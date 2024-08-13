import { createClient } from "@supabase/supabase-js";
import { w as writable } from "./index.js";
import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Toast } from "@capacitor/toast";
import { ActionSheet, ActionSheetButtonStyle } from "@capacitor/action-sheet";
const PUBLIC_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpudW1mZmZrd2NjdWxxYW54YWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMjU1MjIsImV4cCI6MjAyMjcwMTUyMn0.DmzfkPizbKIpwDw_YjTsz9LDwYyaHjRs7IcbKmFVbDk";
const PUBLIC_SUPABASE_URL = "https://znumfffkwcculqanxagr.supabase.co";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);
const products = writable({ loading: true, data: [] });
const cart = writable([]);
const userSession = writable();
supabase.auth.getSession().then(({ data }) => {
  userSession.set(data.session?.user);
});
supabase.auth.onAuthStateChange((event, session) => {
  if (event == "SIGNED_IN" && session) {
    userSession.set(session.user);
  } else if (event == "SIGNED_OUT") {
    userSession.set(null);
  }
});
const utils = {
  user() {
    supabase.auth.getSession().then(({ data }) => {
      userSession.set(data.session);
    });
    return userSession;
  },
  signInWithPassword(email, password) {
    const data = supabase.auth.signInWithPassword({
      email,
      password
    });
    return data;
  },
  signIn(email) {
    return supabase.auth.signInWithOtp({ email });
  },
  signOut() {
    return supabase.auth.signOut();
  },
  products: {
    async all() {
      const { data } = await supabase.from("products").select();
      return data;
    },
    async uploadFile(productName, file) {
      const { data: uploadedDetails, error } = await supabase.storage.from("product_images").upload(`public/${productName}`, file, {
        cacheControl: "3600",
        upsert: true
      });
      console.log(uploadedDetails);
      const { data: publicUrl } = supabase.storage.from("product_images").getPublicUrl(uploadedDetails.path);
      console.log(publicUrl);
      return publicUrl;
    },
    async addProduct(product) {
      const { data, error } = await supabase.from("products").upsert({
        product: product.name,
        price: product.price,
        photo: product.photo,
        size: product.size,
        userUpload: true
      });
      return { data, error };
    },
    async readFileFromUri(uri) {
      return new Promise((resolve, reject) => {
        fetch(uri).then((response) => response.blob()).then((blob) => resolve(blob)).catch((error) => reject(error));
      });
    }
  },
  orders: {
    async submitOrder(order) {
      const { data, error } = await supabase.from("orders").insert(order);
      return { data, error };
    },
    async getOrders() {
      const { data, error } = await supabase.from("orders").select();
      return { data, error };
    }
  },
  others: {
    async addLocalNotification(title, body, seconds) {
      if (Capacitor.isNativePlatform()) {
        const scheduledTime = new Date(Date.now() + 1e3 * seconds);
        const notificationId = await LocalNotifications.schedule({
          notifications: [
            {
              title,
              body,
              id: 2,
              schedule: { at: scheduledTime }
            }
          ]
        });
        console.log("Scheduled notification with id:", notificationId);
      } else {
        console.log("Web platform, no local notification support.");
      }
    },
    async showToast(message) {
      await Toast.show({
        text: message
      });
    },
    async showActions() {
      const result = await ActionSheet.showActions({
        title: "Options",
        options: [
          {
            title: "Reload"
          },
          {
            title: "Close",
            style: ActionSheetButtonStyle.Destructive
          }
        ]
      });
      return result;
    }
  }
};
export {
  userSession as a,
  cart as c,
  products as p,
  utils as u
};

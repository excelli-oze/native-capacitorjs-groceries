import { c as create_ssr_component, a as subscribe, e as escape, d as each, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { c as cart, p as products, u as utils } from "../../chunks/utils.js";
import "@capacitor/geolocation";
import "@capacitor/camera";
import "@capacitor/haptics";
import "../../chunks/client.js";
import "@capacitor/toast";
import "@capacitor/share";
import "@capacitor/action-sheet";
import { registerPlugin, Capacitor } from "@capacitor/core";
function getTimeString(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const secondsDisplay = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondsDisplay.toString().padStart(2, "0")}`;
}
const DealOfTheDaySection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let productsList;
  let loading;
  let formattedTime;
  let $$unsubscribe_cart;
  let $products, $$unsubscribe_products;
  $$unsubscribe_cart = subscribe(cart, (value) => value);
  $$unsubscribe_products = subscribe(products, (value) => $products = value);
  let countdown = 3600;
  productsList = $products.data;
  loading = $products.loading;
  formattedTime = getTimeString(countdown);
  $$unsubscribe_cart();
  $$unsubscribe_products();
  return `<div class="pb-10 bg-green-700"><div class="container mx-auto"><div class="px-4 pt-16 text-green-50 md:px-20"><div class="mb-8 text-3xl font-bold md:text-4xl md:mb-4" data-svelte-h="svelte-15cejys">Deals of the day</div> <div class="flex gap-4 justify-start mb-6 md:mb-14"><p class="text-lg font-normal text-green-300" data-svelte-h="svelte-ifqhiy">Time Left</p> <p class="text-lg font-semibold text-green-50 md:w-fit">${escape(formattedTime)}</p></div> <div class="overflow-x-scroll pb-2 flex gap-2">${loading ? `<p data-svelte-h="svelte-qdsr2u">Loading...</p>` : `${productsList ? `${each(productsList, (product) => {
    return `<div class="bg-blue-600 p-4"><div class="p-2 bg-blue-300 shadow-lg"><img class="w-[208px] h-[250px]"${add_attribute("src", product.photo, 0)}${add_attribute("alt", product.product, 0)}></div> <div class="p-2 mt-8 bg-blue-300/20 w-48"><p class="mb-1 text-xl font-normal text-green-50 whitespace-nowrap">${escape(product.product)}</p> <div class="flex justify-between items-center"><p class="text-sm font-normal"><span class="text-green-900">Rs ${escape(product.price)}</span></p> <button class="px-4 py-1 text-sm text-white bg-green-800 shadow-sm hover:bg-green-900 active:bg-green-800" data-svelte-h="svelte-1gqkzz4">Add to cart</button> </div></div> </div>`;
  })}` : ``}`}</div></div></div></div>`;
});
const HeroSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-blue-300" data-svelte-h="svelte-3b7x6g"><div class="container mx-auto"><div class="flex flex-col pb-10 md:pb-20 place-content-end h-[90vh] max-h-[1000px] px-4 md:px-20 max-w-screen-xl"><div><h1 class="mb-10 min-w-full text-7xl font-bold lg:text-8xl">All <span class="text-green-900">Groceries</span>,<br> for all
					<span class="text-green-900">needs</span></h1> <p class="mb-10 text-base font-semibold text-gray-600 md:mb-14 md:w-1/2 lg:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio cupiditate rem
					dolore? Inventore delectus excepturi accusamus repellat!</p> <a href="./products" class="px-6 py-2 font-semibold text-white bg-green-700 rounded-2xl">Shop Now</a></div></div></div></div>`;
});
const Gelocation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let coordinates = {};
  return `<div class="w-full flex flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4"><p class="text-lg text-green-100 font-semibold" data-svelte-h="svelte-1ymgx20">Geolocation</p> <div><p>Latitude: ${escape(coordinates?.coords?.latitude)}</p> <p>Longitude: ${escape(coordinates?.coords?.longitude)}</p> <p>Accuracy: ${escape(coordinates?.coords?.accuracy)}</p></div> <button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-1oww8nl">Print Current Position</button></div>`;
});
const Camera_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4"><p class="text-lg text-green-100 font-semibold" data-svelte-h="svelte-1aoxesh">Camera</p> ${``} <button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-1wx50pl">pick photo</button></div>`;
});
const Haptics_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4"><p class="text-lg text-green-100 font-semibold" data-svelte-h="svelte-jgk5ee">Haptics</p> <div class="flex flex-col gap-2"><button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-9hoicb">High</button> <button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2" data-svelte-h="svelte-1ikw8r0">Medium</button> <button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2" data-svelte-h="svelte-1xzkpqe">Light</button></div></div>`;
});
const AddProduct = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let user = utils.user();
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let price;
  let name;
  $$unsubscribe_user();
  return `<div class="flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4"><p class="text-lg text-green-100 font-semibold" data-svelte-h="svelte-1hx6w3q">Add Product</p> <label for="name" data-svelte-h="svelte-1l0kx9b">Product Name</label> <input class="px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950" id="name" type="text"${add_attribute("value", name, 0)}> <label for="price" data-svelte-h="svelte-hat3sk">Price</label> <input class="px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950" id="price" type="number"${add_attribute("value", price, 0)}> <label for="size" data-svelte-h="svelte-1hoau7q">Size</label> <select class="px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950" id="size"><option value="small" data-svelte-h="svelte-1i62f28">Small</option><option value="medium" data-svelte-h="svelte-1u6j0ru">Medium</option><option value="big" data-svelte-h="svelte-1o4g6em">Big</option></select> <label for="photo" data-svelte-h="svelte-vljccy">Photo</label> ${``} <button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-1y9a9eh">Pick Photo</button> <button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-15yku37">Add Product</button> ${``} ${!$user ? `<p class="text-red-300" data-svelte-h="svelte-y0y5y7">You are not logged in</p>` : ``}</div>`;
});
const Toast_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4"><p class="text-lg text-green-100 font-semibold" data-svelte-h="svelte-gje63r">Toast</p> <div class="flex flex-col gap-2"><button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-1d90o9d">Toast</button></div></div>`;
});
const Notification = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4"><p class="text-lg text-green-100 font-semibold" data-svelte-h="svelte-g58ayp">Notification</p> <div class="flex flex-col gap-2"><button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-1mx435f">Notification</button></div></div>`;
});
const Share_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4"><p class="text-lg text-green-100 font-semibold" data-svelte-h="svelte-16qptl6">Share Sheet</p> <div class="flex flex-col gap-2"><button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-59ri9k">Share All Options</button> <button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-1cztuph">Share Text Only</button> <button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-fshzpr">Share URL Only</button></div></div>`;
});
const ActionSheet_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4"><p class="text-lg text-green-100 font-semibold" data-svelte-h="svelte-1ia15ei">Actions Sheet</p> <div class="flex flex-col gap-2"><button class="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded" data-svelte-h="svelte-v7cx7p">Actions</button></div></div>`;
});
const AppToWebPlugin = registerPlugin("AppToWebPlugin", {
  web: {
    fetchAccessToken: async () => {
      console.log("Using mock implementation for web");
      return { accessToken: "web-mock-access-token" };
    },
    receiveDataFromWeb: async ({ data }) => {
      console.log("Mock receiveDataFromWeb called with:", data);
      return { success: true };
    }
  }
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  async function getAccessToken() {
    const platform = Capacitor.getPlatform();
    console.log(`Running on platform: ${platform}`);
    try {
      const result = await AppToWebPlugin.fetchAccessToken();
      console.log(`Access Token on ${platform}:`, result.accessToken);
      const sendDataToNative = async (data) => {
        const result2 = await AppToWebPlugin.receiveDataFromWeb({ data });
        return result2;
      };
      sendDataToNative("Hello from Web").then((result2) => {
        console.log("Success from web:", result2.success);
      });
      return result.accessToken;
    } catch (error) {
      console.error(`Error fetching access token on ${platform}:`, error);
    }
  }
  getAccessToken();
  return `${validate_component(HeroSection, "HeroSection").$$render($$result, {}, {}, {})} ${validate_component(DealOfTheDaySection, "DealOfTheDaySection").$$render($$result, {}, {}, {})} <div class="pb-20 bg-blue-300"><div class="container mx-auto"><div class="px-4 pt-16 md:px-20 max-w-screen-xl"><div class="mb-8 text-3xl font-bold md:text-4xl md:mb-4" data-svelte-h="svelte-1lpowoy">Others</div> <div class="flex flex-col gap-4"><div class="md:flex md:flex-row md:gap-4 justify-between">${validate_component(ActionSheet_1, "ActionSheet").$$render($$result, {}, {}, {})} ${validate_component(Notification, "Notification").$$render($$result, {}, {}, {})} ${validate_component(Gelocation, "Gelocation").$$render($$result, {}, {}, {})} ${validate_component(Camera_1, "Camera").$$render($$result, {}, {}, {})} ${validate_component(Haptics_1, "Haptics").$$render($$result, {}, {}, {})}</div> <div class="md:flex md:flex-row md:gap-4 justify-between">${validate_component(Toast_1, "Toast").$$render($$result, {}, {}, {})} ${validate_component(Share_1, "Share").$$render($$result, {}, {}, {})} ${validate_component(AddProduct, "AddProduct").$$render($$result, {}, {}, {})}</div></div></div></div></div>`;
});
export {
  Page as default
};

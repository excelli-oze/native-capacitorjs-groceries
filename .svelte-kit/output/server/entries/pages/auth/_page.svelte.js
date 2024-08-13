import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../../chunks/ssr.js";
import { a as userSession } from "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loggedInSuccessfully;
  let $userSession, $$unsubscribe_userSession;
  $$unsubscribe_userSession = subscribe(userSession, (value) => $userSession = value);
  let email;
  let password;
  loggedInSuccessfully = $userSession;
  $$unsubscribe_userSession();
  return `<div class="px-2 bg-blue-100 md:px-20"><div class="container mx-auto"><div class="flex flex-col justify-center items-center min-h-screen"><div class="p-6 w-full max-w-md bg-green-800 shadow-md">${loggedInSuccessfully ? `<div data-svelte-h="svelte-11stilo"><h2 class="text-3xl text-green-50">You are logged in</h2> <h2 class="mt-4 text-xl text-green-50"><a href="/products">Shop <span class="underline">Products</span>?</a></h2></div>` : `<div><h2 class="mb-6 text-3xl text-green-50" data-svelte-h="svelte-2yocfo">Login</h2> <form><div class="mb-4"><label class="block mb-2 text-sm font-normal text-green-50" for="email" data-svelte-h="svelte-1u6sxgb">Username</label> <input class="px-3 py-2 w-full leading-tight rounded border appearance-none focus:outline-none focus:shadow-outline" type="email" placeholder="user@email.com"${add_attribute("value", email, 0)}></div> <div class="mb-4"><label class="block mb-2 text-sm font-normal text-green-50" for="password" data-svelte-h="svelte-1420l2t">Password</label> <input class="px-3 py-2 w-full leading-tight border appearance-none focus:outline-none focus:shadow-outline" type="password" placeholder="password"${add_attribute("value", password, 0)}></div> ${``} <button class="px-4 py-2 mt-4 font-bold bg-green-500 rounded text-green-950 hover:bg-blue-600 active:bg-green-700 focus:outline-none focus:shadow-outline" type="button" data-svelte-h="svelte-bfnujt">Sign In</button></form></div>`}</div> ${loggedInSuccessfully ? `<div class="mt-4 p-2 bg-red-700"><button class="text-green-50" data-svelte-h="svelte-17qqjbo">LogOut</button></div>` : ``}</div></div></div>`;
});
export {
  Page as default
};

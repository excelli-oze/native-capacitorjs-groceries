import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { StatusBar } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import { c as cart } from "../../chunks/utils.js";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import "@capacitor/app";
const NavigationHandler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return ``;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cart;
  $$unsubscribe_cart = subscribe(cart, (value) => value);
  if (Capacitor.isNativePlatform()) {
    StatusBar.setBackgroundColor({ color: "#166534" });
  }
  $$unsubscribe_cart();
  return `<body${add_attribute("class", ` selection:bg-green-950 selection:text-green-100 font-semibold  `, 0)}><div class="fixed w-[100%]"><nav class="bg-blue-600 flex pr-4" data-svelte-h="svelte-bu8uay"><div class="container flex gap-4 justify-between px-4 py-2 mx-auto md:justify-between md:items-center md:flex-row md:px-20 max-w-screen-2xl"><a href="./" class="text-xl font-bold">GROCERIES</a></div></nav> <nav class="bg-blue-400 sticky top-0 z-20"><div class="container hidden sm:flex gap-4 px-4 py-2 mx-auto md:px-20 max-w-screen-2xl" data-svelte-h="svelte-1w1irhi"><div class="flex flex-row justify-between w-full gap-3 md:gap-8 sm:gap-4"><div class="flex gap-3 md:gap-8 sm:gap-4"><div class=""><a href="/">Home</a></div> <div class=""><a href="/products">Products</a></div></div> <div class="flex gap-3 md:gap-8 sm:gap-4"><div class=""><a href="/orders">Orders</a></div> <div class=""><a href="/auth">Auth</a></div></div></div></div> <div class="container flex sm:hidden gap-4 px-4 py-2 mx-auto md:px-20 max-w-screen-2xl"><div class="flex flex-row justify-between w-full gap-3 md:gap-8 sm:gap-4"><div class="" data-svelte-h="svelte-18s568i"><a href="/">Home</a></div> <div class="" data-svelte-h="svelte-m4wckp"><a href="/products">Products</a></div> <div class="" data-svelte-h="svelte-12ooer9"><a href="/auth">Auth</a></div> <div class="" data-svelte-h="svelte-c0u8l1"><a href="/orders">Orders</a></div> <div class="relative"><button data-svelte-h="svelte-oj37e1">Cart</button> <div class="">${``}</div></div></div></div></nav></div></body> <div class="pt-20">${slots.default ? slots.default({}) : ``}</div> ${validate_component(NavigationHandler, "NavigationHandler").$$render($$result, {}, {}, {})} <a href="/testroute" data-svelte-h="svelte-w63brl">testroute</a>`;
});
export {
  Layout as default
};

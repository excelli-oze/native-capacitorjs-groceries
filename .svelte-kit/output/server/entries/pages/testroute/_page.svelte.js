import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
import { c as cart } from "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cart;
  $$unsubscribe_cart = subscribe(cart, (value) => value);
  $$unsubscribe_cart();
  return `<div class="w-screen grid grid-cols-1 w-screen bg-blue-100 pt-4 gap-y-12 place-items-center px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20 max-w-screen-2xl mx-auto min-h-screen">${`<p data-svelte-h="svelte-qdsr2u">Loading...</p>`}</div>`;
});
export {
  Page as default
};

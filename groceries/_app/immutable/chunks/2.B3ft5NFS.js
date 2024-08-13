const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web.Ci96jTBT.js","./utils.D7pUn0qA.js","./preload-helper.CN7R4D5X.js","./index.CpHgRmVI.js","./scheduler.FLmlRqdj.js","./web.C3xtGhn1.js","./web.D-LsJhnq.js"])))=>i.map(i=>d[i]);
import { s as safe_not_equal, n as noop, c as component_subscribe, o as onMount, a as set_store_value, b as src_url_equal, r as run_all } from "./scheduler.FLmlRqdj.js";
import { S as SvelteComponent, i as init, e as element, s as space, t as text, c as claim_element, a as children, l as get_svelte_dataset, f as claim_space, b as claim_text, d as detach, k as attr, g as insert_hydration, h as append_hydration, j as set_data, o as empty, p as destroy_each, m as listen, n as set_input_value, G as to_number, A as create_component, B as claim_component, C as mount_component, w as transition_in, u as transition_out, D as destroy_component } from "./index.qEUg-WN-.js";
import { e as ensure_array_like } from "./each.CuygwpM4.js";
import { c as cart, p as products, r as registerPlugin, W as WebPlugin, b as CapacitorException, u as utils, T as Toast, A as ActionSheet, d as ActionSheetButtonStyle, C as Capacitor } from "./utils.D7pUn0qA.js";
import { _ as __vitePreload } from "./preload-helper.CN7R4D5X.js";
import { g as goto } from "./entry.C4lqNRiB.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_if_block_1$1(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like(
    /*productsList*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_hydration(target, each_1_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*addToCart, productsList*/
      12) {
        each_value = ensure_array_like(
          /*productsList*/
          ctx2[2]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(each_1_anchor);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block$2(ctx) {
  let p;
  let textContent = "Loading...";
  return {
    c() {
      p = element("p");
      p.textContent = textContent;
    },
    l(nodes) {
      p = claim_element(nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-qdsr2u") p.textContent = textContent;
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_each_block(ctx) {
  let div3;
  let div0;
  let img;
  let img_src_value;
  let img_alt_value;
  let t0;
  let div2;
  let p0;
  let t1_value = (
    /*product*/
    ctx[8].product + ""
  );
  let t1;
  let t2;
  let div1;
  let p1;
  let span;
  let t3;
  let t4_value = (
    /*product*/
    ctx[8].price + ""
  );
  let t4;
  let t5;
  let button;
  let textContent = "Add to cart";
  let t7;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[6](
        /*product*/
        ctx[8]
      )
    );
  }
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div2 = element("div");
      p0 = element("p");
      t1 = text(t1_value);
      t2 = space();
      div1 = element("div");
      p1 = element("p");
      span = element("span");
      t3 = text("Rs ");
      t4 = text(t4_value);
      t5 = space();
      button = element("button");
      button.textContent = textContent;
      t7 = space();
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true });
      div0_nodes.forEach(detach);
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      p0 = claim_element(div2_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, t1_value);
      p0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      span = claim_element(p1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t3 = claim_text(span_nodes, "Rs ");
      t4 = claim_text(span_nodes, t4_value);
      span_nodes.forEach(detach);
      p1_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-1gqkzz4") button.textContent = textContent;
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t7 = claim_space(div3_nodes);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "w-[208px] h-[250px]");
      if (!src_url_equal(img.src, img_src_value = /*product*/
      ctx[8].photo)) attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*product*/
      ctx[8].product);
      attr(div0, "class", "p-2 bg-blue-300 shadow-lg");
      attr(p0, "class", "mb-1 text-xl font-normal text-green-50 whitespace-nowrap");
      attr(span, "class", "text-green-900");
      attr(p1, "class", "text-sm font-normal");
      attr(button, "class", "px-4 py-1 text-sm text-white bg-green-800 shadow-sm hover:bg-green-900 active:bg-green-800");
      attr(div1, "class", "flex justify-between items-center");
      attr(div2, "class", "p-2 mt-8 bg-blue-300/20 w-48");
      attr(div3, "class", "bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, img);
      append_hydration(div3, t0);
      append_hydration(div3, div2);
      append_hydration(div2, p0);
      append_hydration(p0, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      append_hydration(div1, p1);
      append_hydration(p1, span);
      append_hydration(span, t3);
      append_hydration(span, t4);
      append_hydration(div1, t5);
      append_hydration(div1, button);
      append_hydration(div3, t7);
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*productsList*/
      4 && !src_url_equal(img.src, img_src_value = /*product*/
      ctx[8].photo)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*productsList*/
      4 && img_alt_value !== (img_alt_value = /*product*/
      ctx[8].product)) {
        attr(img, "alt", img_alt_value);
      }
      if (dirty & /*productsList*/
      4 && t1_value !== (t1_value = /*product*/
      ctx[8].product + "")) set_data(t1, t1_value);
      if (dirty & /*productsList*/
      4 && t4_value !== (t4_value = /*product*/
      ctx[8].price + "")) set_data(t4, t4_value);
    },
    d(detaching) {
      if (detaching) {
        detach(div3);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$a(ctx) {
  let div5;
  let div4;
  let div3;
  let div0;
  let textContent = "Deals of the day";
  let t1;
  let div1;
  let p0;
  let textContent_1 = "Time Left";
  let t3;
  let p1;
  let t4;
  let t5;
  let div2;
  function select_block_type(ctx2, dirty) {
    if (
      /*loading*/
      ctx2[1]
    ) return create_if_block$2;
    if (
      /*productsList*/
      ctx2[2]
    ) return create_if_block_1$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      div5 = element("div");
      div4 = element("div");
      div3 = element("div");
      div0 = element("div");
      div0.textContent = textContent;
      t1 = space();
      div1 = element("div");
      p0 = element("p");
      p0.textContent = textContent_1;
      t3 = space();
      p1 = element("p");
      t4 = text(
        /*formattedTime*/
        ctx[0]
      );
      t5 = space();
      div2 = element("div");
      if (if_block) if_block.c();
      this.h();
    },
    l(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-15cejys") div0.textContent = textContent;
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-ifqhiy") p0.textContent = textContent_1;
      t3 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t4 = claim_text(
        p1_nodes,
        /*formattedTime*/
        ctx[0]
      );
      p1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      if (if_block) if_block.l(div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "mb-8 text-3xl font-bold md:text-4xl md:mb-4");
      attr(p0, "class", "text-lg font-normal text-green-300");
      attr(p1, "class", "text-lg font-semibold text-green-50 md:w-fit");
      attr(div1, "class", "flex gap-4 justify-start mb-6 md:mb-14");
      attr(div2, "class", "overflow-x-scroll pb-2 flex gap-2");
      attr(div3, "class", "px-4 pt-16 text-green-50 md:px-20");
      attr(div4, "class", "container mx-auto");
      attr(div5, "class", "pb-10 bg-green-700");
    },
    m(target, anchor) {
      insert_hydration(target, div5, anchor);
      append_hydration(div5, div4);
      append_hydration(div4, div3);
      append_hydration(div3, div0);
      append_hydration(div3, t1);
      append_hydration(div3, div1);
      append_hydration(div1, p0);
      append_hydration(div1, t3);
      append_hydration(div1, p1);
      append_hydration(p1, t4);
      append_hydration(div3, t5);
      append_hydration(div3, div2);
      if (if_block) if_block.m(div2, null);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*formattedTime*/
      1) set_data(
        t4,
        /*formattedTime*/
        ctx2[0]
      );
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if (if_block) if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div2, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div5);
      }
      if (if_block) {
        if_block.d();
      }
    }
  };
}
function getTimeString(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const secondsDisplay = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secondsDisplay.toString().padStart(2, "0")}`;
}
function instance$9($$self, $$props, $$invalidate) {
  let productsList;
  let loading;
  let formattedTime;
  let $cart;
  let $products;
  component_subscribe($$self, cart, ($$value) => $$invalidate(7, $cart = $$value));
  component_subscribe($$self, products, ($$value) => $$invalidate(5, $products = $$value));
  let countdown = 3600;
  onMount(() => {
    const timer = setInterval(
      () => {
        if (countdown > 0) {
          $$invalidate(4, countdown--, countdown);
        }
      },
      1e3
    );
    return () => clearInterval(timer);
  });
  function addToCart(product) {
    set_store_value(cart, $cart = [...$cart, product], $cart);
    console.log($cart);
  }
  const click_handler = (product) => {
    addToCart(product);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$products*/
    32) {
      $$invalidate(2, productsList = $products.data);
    }
    if ($$self.$$.dirty & /*$products*/
    32) {
      $$invalidate(1, loading = $products.loading);
    }
    if ($$self.$$.dirty & /*countdown*/
    16) {
      $$invalidate(0, formattedTime = getTimeString(countdown));
    }
  };
  return [
    formattedTime,
    loading,
    productsList,
    addToCart,
    countdown,
    $products,
    click_handler
  ];
}
class DealOfTheDaySection extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$a, safe_not_equal, {});
  }
}
function create_fragment$9(ctx) {
  let div3;
  let textContent = `<div class="container mx-auto"><div class="flex flex-col pb-10 md:pb-20 place-content-end h-[90vh] max-h-[1000px] px-4 md:px-20 max-w-screen-xl"><div><h1 class="mb-10 min-w-full text-7xl font-bold lg:text-8xl">All <span class="text-green-900">Groceries</span>,<br/> for all
					<span class="text-green-900">needs</span></h1> <p class="mb-10 text-base font-semibold text-gray-600 md:mb-14 md:w-1/2 lg:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio cupiditate rem
					dolore? Inventore delectus excepturi accusamus repellat!</p> <a href="./products" class="px-6 py-2 font-semibold text-white bg-green-700 rounded-2xl">Shop Now</a></div></div></div>`;
  return {
    c() {
      div3 = element("div");
      div3.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div3) !== "svelte-3b7x6g") div3.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div3, "class", "bg-blue-300");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div3);
      }
    }
  };
}
class HeroSection extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$9, safe_not_equal, {});
  }
}
const Geolocation = registerPlugin("Geolocation", {
  web: () => __vitePreload(() => import("./web.Ci96jTBT.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0, import.meta.url).then((m) => new m.GeolocationWeb())
});
function create_fragment$8(ctx) {
  var _a, _b, _c, _d, _e, _f;
  let div1;
  let p0;
  let textContent = "Geolocation";
  let t1;
  let div0;
  let p1;
  let t2;
  let t3_value = (
    /*coordinates*/
    ((_b = (_a = ctx[0]) == null ? void 0 : _a.coords) == null ? void 0 : _b.latitude) + ""
  );
  let t3;
  let t4;
  let p2;
  let t5;
  let t6_value = (
    /*coordinates*/
    ((_d = (_c = ctx[0]) == null ? void 0 : _c.coords) == null ? void 0 : _d.longitude) + ""
  );
  let t6;
  let t7;
  let p3;
  let t8;
  let t9_value = (
    /*coordinates*/
    ((_f = (_e = ctx[0]) == null ? void 0 : _e.coords) == null ? void 0 : _f.accuracy) + ""
  );
  let t9;
  let t10;
  let button;
  let textContent_1 = "Print Current Position";
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      p0 = element("p");
      p0.textContent = textContent;
      t1 = space();
      div0 = element("div");
      p1 = element("p");
      t2 = text("Latitude: ");
      t3 = text(t3_value);
      t4 = space();
      p2 = element("p");
      t5 = text("Longitude: ");
      t6 = text(t6_value);
      t7 = space();
      p3 = element("p");
      t8 = text("Accuracy: ");
      t9 = text(t9_value);
      t10 = space();
      button = element("button");
      button.textContent = textContent_1;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-1ymgx20") p0.textContent = textContent;
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      p1 = claim_element(div0_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, "Latitude: ");
      t3 = claim_text(p1_nodes, t3_value);
      p1_nodes.forEach(detach);
      t4 = claim_space(div0_nodes);
      p2 = claim_element(div0_nodes, "P", {});
      var p2_nodes = children(p2);
      t5 = claim_text(p2_nodes, "Longitude: ");
      t6 = claim_text(p2_nodes, t6_value);
      p2_nodes.forEach(detach);
      t7 = claim_space(div0_nodes);
      p3 = claim_element(div0_nodes, "P", {});
      var p3_nodes = children(p3);
      t8 = claim_text(p3_nodes, "Accuracy: ");
      t9 = claim_text(p3_nodes, t9_value);
      p3_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t10 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-1oww8nl") button.textContent = textContent_1;
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p0, "class", "text-lg text-green-100 font-semibold");
      attr(button, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(div1, "class", "w-full flex flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, p0);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, p1);
      append_hydration(p1, t2);
      append_hydration(p1, t3);
      append_hydration(div0, t4);
      append_hydration(div0, p2);
      append_hydration(p2, t5);
      append_hydration(p2, t6);
      append_hydration(div0, t7);
      append_hydration(div0, p3);
      append_hydration(p3, t8);
      append_hydration(p3, t9);
      append_hydration(div1, t10);
      append_hydration(div1, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*printCurrentPosition*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      if (dirty & /*coordinates*/
      1 && t3_value !== (t3_value = /*coordinates*/
      ((_b2 = (_a2 = ctx2[0]) == null ? void 0 : _a2.coords) == null ? void 0 : _b2.latitude) + "")) set_data(t3, t3_value);
      if (dirty & /*coordinates*/
      1 && t6_value !== (t6_value = /*coordinates*/
      ((_d2 = (_c2 = ctx2[0]) == null ? void 0 : _c2.coords) == null ? void 0 : _d2.longitude) + "")) set_data(t6, t6_value);
      if (dirty & /*coordinates*/
      1 && t9_value !== (t9_value = /*coordinates*/
      ((_f2 = (_e2 = ctx2[0]) == null ? void 0 : _e2.coords) == null ? void 0 : _f2.accuracy) + "")) set_data(t9, t9_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      mounted = false;
      dispose();
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let coordinates = {};
  const printCurrentPosition = async () => {
    $$invalidate(0, coordinates = await Geolocation.getCurrentPosition());
  };
  return [coordinates, printCurrentPosition];
}
class Gelocation extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
  }
}
var CameraSource;
(function(CameraSource2) {
  CameraSource2["Prompt"] = "PROMPT";
  CameraSource2["Camera"] = "CAMERA";
  CameraSource2["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function(CameraDirection2) {
  CameraDirection2["Rear"] = "REAR";
  CameraDirection2["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function(CameraResultType2) {
  CameraResultType2["Uri"] = "uri";
  CameraResultType2["Base64"] = "base64";
  CameraResultType2["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
class CameraWeb extends WebPlugin {
  async getPhoto(options) {
    return new Promise(async (resolve, reject) => {
      if (options.webUseInput || options.source === CameraSource.Photos) {
        this.fileInputExperience(options, resolve, reject);
      } else if (options.source === CameraSource.Prompt) {
        let actionSheet = document.querySelector("pwa-action-sheet");
        if (!actionSheet) {
          actionSheet = document.createElement("pwa-action-sheet");
          document.body.appendChild(actionSheet);
        }
        actionSheet.header = options.promptLabelHeader || "Photo";
        actionSheet.cancelable = false;
        actionSheet.options = [
          { title: options.promptLabelPhoto || "From Photos" },
          { title: options.promptLabelPicture || "Take Picture" }
        ];
        actionSheet.addEventListener("onSelection", async (e) => {
          const selection = e.detail;
          if (selection === 0) {
            this.fileInputExperience(options, resolve, reject);
          } else {
            this.cameraExperience(options, resolve, reject);
          }
        });
      } else {
        this.cameraExperience(options, resolve, reject);
      }
    });
  }
  async pickImages(_options) {
    return new Promise(async (resolve, reject) => {
      this.multipleFileInputExperience(resolve, reject);
    });
  }
  async cameraExperience(options, resolve, reject) {
    if (customElements.get("pwa-camera-modal")) {
      const cameraModal = document.createElement("pwa-camera-modal");
      cameraModal.facingMode = options.direction === CameraDirection.Front ? "user" : "environment";
      document.body.appendChild(cameraModal);
      try {
        await cameraModal.componentOnReady();
        cameraModal.addEventListener("onPhoto", async (e) => {
          const photo = e.detail;
          if (photo === null) {
            reject(new CapacitorException("User cancelled photos app"));
          } else if (photo instanceof Error) {
            reject(photo);
          } else {
            resolve(await this._getCameraPhoto(photo, options));
          }
          cameraModal.dismiss();
          document.body.removeChild(cameraModal);
        });
        cameraModal.present();
      } catch (e) {
        this.fileInputExperience(options, resolve, reject);
      }
    } else {
      console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
      this.fileInputExperience(options, resolve, reject);
    }
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input";
      input.type = "file";
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const file = input.files[0];
        let format = "jpeg";
        if (file.type === "image/png") {
          format = "png";
        } else if (file.type === "image/gif") {
          format = "gif";
        }
        if (options.resultType === "dataUrl" || options.resultType === "base64") {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            if (options.resultType === "dataUrl") {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === "base64") {
              const b64 = reader.result.split(",")[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format
          });
          cleanup();
        }
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.capture = true;
    if (options.source === CameraSource.Photos || options.source === CameraSource.Prompt) {
      input.removeAttribute("capture");
    } else if (options.direction === CameraDirection.Front) {
      input.capture = "user";
    } else if (options.direction === CameraDirection.Rear) {
      input.capture = "environment";
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input-multiple");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input-multiple";
      input.type = "file";
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const photos = [];
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = "jpeg";
          if (file.type === "image/png") {
            format = "png";
          } else if (file.type === "image/gif") {
            format = "gif";
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format
          });
        }
        resolve({ photos });
        cleanup();
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = photo.type.split("/")[1];
      if (options.resultType === "uri") {
        resolve({
          webPath: URL.createObjectURL(photo),
          format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === "dataUrl") {
            resolve({
              dataUrl: r,
              format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(",")[1],
              format,
              saved: false
            });
          }
        };
        reader.onerror = (e) => {
          reject(e);
        };
      }
    });
  }
  async checkPermissions() {
    if (typeof navigator === "undefined" || !navigator.permissions) {
      throw this.unavailable("Permissions API not available in this browser");
    }
    try {
      const permission = await window.navigator.permissions.query({
        name: "camera"
      });
      return {
        camera: permission.state,
        photos: "granted"
      };
    } catch (_a) {
      throw this.unavailable("Camera permissions are not available in this browser");
    }
  }
  async requestPermissions() {
    throw this.unimplemented("Not implemented on web.");
  }
  async pickLimitedLibraryPhotos() {
    throw this.unavailable("Not implemented on web.");
  }
  async getLimitedLibraryPhotos() {
    throw this.unavailable("Not implemented on web.");
  }
}
new CameraWeb();
const Camera = registerPlugin("Camera", {
  web: () => new CameraWeb()
});
function create_if_block$1(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { class: true, src: true, alt: true });
      this.h();
    },
    h() {
      attr(img, "class", "max-w-80");
      if (!src_url_equal(img.src, img_src_value = /*imageUrl*/
      ctx[0])) attr(img, "src", img_src_value);
      attr(img, "alt", "some");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*imageUrl*/
      1 && !src_url_equal(img.src, img_src_value = /*imageUrl*/
      ctx2[0])) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(img);
      }
    }
  };
}
function create_fragment$7(ctx) {
  let div;
  let p;
  let textContent = "Camera";
  let t1;
  let t2;
  let button;
  let textContent_1 = "pick photo";
  let mounted;
  let dispose;
  let if_block = (
    /*imageUrl*/
    ctx[0] && create_if_block$1(ctx)
  );
  return {
    c() {
      div = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      if (if_block) if_block.c();
      t2 = space();
      button = element("button");
      button.textContent = textContent_1;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-1aoxesh") p.textContent = textContent;
      t1 = claim_space(div_nodes);
      if (if_block) if_block.l(div_nodes);
      t2 = claim_space(div_nodes);
      button = claim_element(div_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-1wx50pl") button.textContent = textContent_1;
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-lg text-green-100 font-semibold");
      attr(button, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(div, "class", "flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, p);
      append_hydration(div, t1);
      if (if_block) if_block.m(div, null);
      append_hydration(div, t2);
      append_hydration(div, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*takePicture*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*imageUrl*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(div, t2);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let imageUrl;
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    $$invalidate(0, imageUrl = image.webPath);
  };
  return [imageUrl, takePicture];
}
class Camera_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {});
  }
}
var ImpactStyle;
(function(ImpactStyle2) {
  ImpactStyle2["Heavy"] = "HEAVY";
  ImpactStyle2["Medium"] = "MEDIUM";
  ImpactStyle2["Light"] = "LIGHT";
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
(function(NotificationType2) {
  NotificationType2["Success"] = "SUCCESS";
  NotificationType2["Warning"] = "WARNING";
  NotificationType2["Error"] = "ERROR";
})(NotificationType || (NotificationType = {}));
const Haptics = registerPlugin("Haptics", {
  web: () => __vitePreload(() => import("./web.C3xtGhn1.js"), true ? __vite__mapDeps([5,1,2,3,4]) : void 0, import.meta.url).then((m) => new m.HapticsWeb())
});
function create_fragment$6(ctx) {
  let div1;
  let p;
  let textContent = "Haptics";
  let t1;
  let div0;
  let button0;
  let textContent_1 = "High";
  let t3;
  let button1;
  let textContent_2 = "Medium";
  let t5;
  let button2;
  let textContent_3 = "Light";
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      div0 = element("div");
      button0 = element("button");
      button0.textContent = textContent_1;
      t3 = space();
      button1 = element("button");
      button1.textContent = textContent_2;
      t5 = space();
      button2 = element("button");
      button2.textContent = textContent_3;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-jgk5ee") p.textContent = textContent;
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button0 = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button0) !== "svelte-9hoicb") button0.textContent = textContent_1;
      t3 = claim_space(div0_nodes);
      button1 = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button1) !== "svelte-1ikw8r0") button1.textContent = textContent_2;
      t5 = claim_space(div0_nodes);
      button2 = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button2) !== "svelte-1xzkpqe") button2.textContent = textContent_3;
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-lg text-green-100 font-semibold");
      attr(button0, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(button1, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2");
      attr(button2, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2");
      attr(div0, "class", "flex flex-col gap-2");
      attr(div1, "class", "flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, p);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, button0);
      append_hydration(div0, t3);
      append_hydration(div0, button1);
      append_hydration(div0, t5);
      append_hydration(div0, button2);
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*hapticsVibrate*/
            ctx[2]
          ),
          listen(
            button1,
            "click",
            /*hapticsImpactMedium*/
            ctx[0]
          ),
          listen(
            button2,
            "click",
            /*hapticsImpactLight*/
            ctx[1]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$6($$self) {
  const hapticsImpactMedium = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };
  const hapticsImpactLight = async () => {
    await Haptics.impact({ style: ImpactStyle.Light });
  };
  const hapticsVibrate = async () => {
    await Haptics.vibrate();
  };
  return [hapticsImpactMedium, hapticsImpactLight, hapticsVibrate];
}
class Haptics_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {});
  }
}
function create_if_block_2(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { class: true, src: true, alt: true });
      this.h();
    },
    h() {
      attr(img, "class", "max-w-80");
      if (!src_url_equal(img.src, img_src_value = /*imageUrl*/
      ctx[0])) attr(img, "src", img_src_value);
      attr(img, "alt", "some");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*imageUrl*/
      1 && !src_url_equal(img.src, img_src_value = /*imageUrl*/
      ctx2[0])) {
        attr(img, "src", img_src_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(img);
      }
    }
  };
}
function create_if_block_1(ctx) {
  let p;
  let textContent = "Product Added Successfully";
  let t1;
  let a;
  let textContent_1 = "View Products";
  return {
    c() {
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      a = element("a");
      a.textContent = textContent_1;
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-1wx3u6k") p.textContent = textContent;
      t1 = claim_space(nodes);
      a = claim_element(nodes, "A", { href: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(a) !== "svelte-1yn2k40") a.textContent = textContent_1;
      this.h();
    },
    h() {
      attr(p, "class", "text-green-100");
      attr(a, "href", "/products");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, a, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(p);
        detach(t1);
        detach(a);
      }
    }
  };
}
function create_if_block(ctx) {
  let p;
  let textContent = "You are not logged in";
  return {
    c() {
      p = element("p");
      p.textContent = textContent;
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-y0y5y7") p.textContent = textContent;
      this.h();
    },
    h() {
      attr(p, "class", "text-red-300");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_fragment$5(ctx) {
  let div;
  let p;
  let textContent = "Add Product";
  let t1;
  let label0;
  let textContent_1 = "Product Name";
  let t3;
  let input0;
  let t4;
  let label1;
  let textContent_2 = "Price";
  let t6;
  let input1;
  let t7;
  let label2;
  let textContent_3 = "Size";
  let t9;
  let select;
  let option0;
  let textContent_4 = "Small";
  let option1;
  let textContent_5 = "Medium";
  let option2;
  let textContent_6 = "Big";
  let t13;
  let label3;
  let textContent_7 = "Photo";
  let t15;
  let t16;
  let button0;
  let textContent_8 = "Pick Photo";
  let t18;
  let button1;
  let textContent_9 = "Add Product";
  let t20;
  let t21;
  let mounted;
  let dispose;
  let if_block0 = (
    /*imageUrl*/
    ctx[0] && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*productAddedSuccessful*/
    ctx[1] && create_if_block_1()
  );
  let if_block2 = !/*$user*/
  ctx[4] && create_if_block();
  return {
    c() {
      div = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      label0 = element("label");
      label0.textContent = textContent_1;
      t3 = space();
      input0 = element("input");
      t4 = space();
      label1 = element("label");
      label1.textContent = textContent_2;
      t6 = space();
      input1 = element("input");
      t7 = space();
      label2 = element("label");
      label2.textContent = textContent_3;
      t9 = space();
      select = element("select");
      option0 = element("option");
      option0.textContent = textContent_4;
      option1 = element("option");
      option1.textContent = textContent_5;
      option2 = element("option");
      option2.textContent = textContent_6;
      t13 = space();
      label3 = element("label");
      label3.textContent = textContent_7;
      t15 = space();
      if (if_block0) if_block0.c();
      t16 = space();
      button0 = element("button");
      button0.textContent = textContent_8;
      t18 = space();
      button1 = element("button");
      button1.textContent = textContent_9;
      t20 = space();
      if (if_block1) if_block1.c();
      t21 = space();
      if (if_block2) if_block2.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-1hx6w3q") p.textContent = textContent;
      t1 = claim_space(div_nodes);
      label0 = claim_element(div_nodes, "LABEL", { for: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(label0) !== "svelte-1l0kx9b") label0.textContent = textContent_1;
      t3 = claim_space(div_nodes);
      input0 = claim_element(div_nodes, "INPUT", { class: true, id: true, type: true });
      t4 = claim_space(div_nodes);
      label1 = claim_element(div_nodes, "LABEL", { for: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(label1) !== "svelte-hat3sk") label1.textContent = textContent_2;
      t6 = claim_space(div_nodes);
      input1 = claim_element(div_nodes, "INPUT", { class: true, id: true, type: true });
      t7 = claim_space(div_nodes);
      label2 = claim_element(div_nodes, "LABEL", { for: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(label2) !== "svelte-1hoau7q") label2.textContent = textContent_3;
      t9 = claim_space(div_nodes);
      select = claim_element(div_nodes, "SELECT", { class: true, id: true });
      var select_nodes = children(select);
      option0 = claim_element(select_nodes, "OPTION", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(option0) !== "svelte-1i62f28") option0.textContent = textContent_4;
      option1 = claim_element(select_nodes, "OPTION", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(option1) !== "svelte-1u6j0ru") option1.textContent = textContent_5;
      option2 = claim_element(select_nodes, "OPTION", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(option2) !== "svelte-1o4g6em") option2.textContent = textContent_6;
      select_nodes.forEach(detach);
      t13 = claim_space(div_nodes);
      label3 = claim_element(div_nodes, "LABEL", { for: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(label3) !== "svelte-vljccy") label3.textContent = textContent_7;
      t15 = claim_space(div_nodes);
      if (if_block0) if_block0.l(div_nodes);
      t16 = claim_space(div_nodes);
      button0 = claim_element(div_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button0) !== "svelte-1y9a9eh") button0.textContent = textContent_8;
      t18 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button1) !== "svelte-15yku37") button1.textContent = textContent_9;
      t20 = claim_space(div_nodes);
      if (if_block1) if_block1.l(div_nodes);
      t21 = claim_space(div_nodes);
      if (if_block2) if_block2.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-lg text-green-100 font-semibold");
      attr(label0, "for", "name");
      attr(input0, "class", "px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950");
      attr(input0, "id", "name");
      attr(input0, "type", "text");
      attr(label1, "for", "price");
      attr(input1, "class", "px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950");
      attr(input1, "id", "price");
      attr(input1, "type", "number");
      attr(label2, "for", "size");
      option0.__value = "small";
      set_input_value(option0, option0.__value);
      option1.__value = "medium";
      set_input_value(option1, option1.__value);
      option2.__value = "big";
      set_input_value(option2, option2.__value);
      attr(select, "class", "px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950");
      attr(select, "id", "size");
      attr(label3, "for", "photo");
      attr(button0, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(button1, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(div, "class", "flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, p);
      append_hydration(div, t1);
      append_hydration(div, label0);
      append_hydration(div, t3);
      append_hydration(div, input0);
      set_input_value(
        input0,
        /*name*/
        ctx[3]
      );
      append_hydration(div, t4);
      append_hydration(div, label1);
      append_hydration(div, t6);
      append_hydration(div, input1);
      set_input_value(
        input1,
        /*price*/
        ctx[2]
      );
      append_hydration(div, t7);
      append_hydration(div, label2);
      append_hydration(div, t9);
      append_hydration(div, select);
      append_hydration(select, option0);
      append_hydration(select, option1);
      append_hydration(select, option2);
      append_hydration(div, t13);
      append_hydration(div, label3);
      append_hydration(div, t15);
      if (if_block0) if_block0.m(div, null);
      append_hydration(div, t16);
      append_hydration(div, button0);
      append_hydration(div, t18);
      append_hydration(div, button1);
      append_hydration(div, t20);
      if (if_block1) if_block1.m(div, null);
      append_hydration(div, t21);
      if (if_block2) if_block2.m(div, null);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[8]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[9]
          ),
          listen(
            button0,
            "click",
            /*takePicture*/
            ctx[6]
          ),
          listen(
            button1,
            "click",
            /*addProduct*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*name*/
      8 && input0.value !== /*name*/
      ctx2[3]) {
        set_input_value(
          input0,
          /*name*/
          ctx2[3]
        );
      }
      if (dirty & /*price*/
      4 && to_number(input1.value) !== /*price*/
      ctx2[2]) {
        set_input_value(
          input1,
          /*price*/
          ctx2[2]
        );
      }
      if (
        /*imageUrl*/
        ctx2[0]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          if_block0.m(div, t16);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*productAddedSuccessful*/
        ctx2[1]
      ) {
        if (if_block1) ;
        else {
          if_block1 = create_if_block_1();
          if_block1.c();
          if_block1.m(div, t21);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (!/*$user*/
      ctx2[4]) {
        if (if_block2) ;
        else {
          if_block2 = create_if_block();
          if_block2.c();
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        if_block2.d(1);
        if_block2 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let $user;
  let user = utils.user();
  component_subscribe($$self, user, (value) => $$invalidate(4, $user = value));
  let imageUrl;
  let productAddedSuccessful = false;
  let price;
  let name;
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri
    });
    console.log("image", JSON.stringify(image));
    $$invalidate(0, imageUrl = image.webPath);
    image.path;
  };
  async function addProduct() {
    if (!$user) {
      goto("/auth");
      return;
    }
    let fileName, blob;
    fileName = imageUrl.split("/").pop();
    blob = await utils.products.readFileFromUri(imageUrl);
    const { publicUrl } = await utils.products.uploadFile(fileName, blob);
    console.log("publicUrl", publicUrl);
    const product = {
      name,
      price,
      photo: publicUrl,
      size: document.getElementById("size").value
    };
    console.log("product", product);
    const { data, error } = await utils.products.addProduct(product);
    console.log(data, error);
    if (!error) {
      utils.others.showToast("Product added successfully");
      $$invalidate(1, productAddedSuccessful = true);
      goto("/products");
    }
  }
  function input0_input_handler() {
    name = this.value;
    $$invalidate(3, name);
  }
  function input1_input_handler() {
    price = to_number(this.value);
    $$invalidate(2, price);
  }
  return [
    imageUrl,
    productAddedSuccessful,
    price,
    name,
    $user,
    user,
    takePicture,
    addProduct,
    input0_input_handler,
    input1_input_handler
  ];
}
class AddProduct extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
  }
}
function create_fragment$4(ctx) {
  let div1;
  let p;
  let textContent = "Toast";
  let t1;
  let div0;
  let button;
  let textContent_1 = "Toast";
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      div0 = element("div");
      button = element("button");
      button.textContent = textContent_1;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-gje63r") p.textContent = textContent;
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-1d90o9d") button.textContent = textContent_1;
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-lg text-green-100 font-semibold");
      attr(button, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(div0, "class", "flex flex-col gap-2");
      attr(div1, "class", "flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, p);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*showHelloToast*/
          ctx[0]
        );
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      mounted = false;
      dispose();
    }
  };
}
function instance$4($$self) {
  const showHelloToast = async () => {
    await Toast.show({ text: "Hello! This is a toast" });
  };
  return [showHelloToast];
}
class Toast_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
  }
}
function create_fragment$3(ctx) {
  let div1;
  let p;
  let textContent = "Notification";
  let t1;
  let div0;
  let button;
  let textContent_1 = "Notification";
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      div0 = element("div");
      button = element("button");
      button.textContent = textContent_1;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-g58ayp") p.textContent = textContent;
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-1mx435f") button.textContent = textContent_1;
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-lg text-green-100 font-semibold");
      attr(button, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(div0, "class", "flex flex-col gap-2");
      attr(div1, "class", "flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, p);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*scheduleNotification*/
          ctx[0]
        );
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      mounted = false;
      dispose();
    }
  };
}
function instance$3($$self) {
  const scheduleNotification = async () => {
    await utils.others.addLocalNotification("This is title", "This is body", 1);
  };
  return [scheduleNotification];
}
class Notification extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
const Share = registerPlugin("Share", {
  web: () => __vitePreload(() => import("./web.D-LsJhnq.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0, import.meta.url).then((m) => new m.ShareWeb())
});
function create_fragment$2(ctx) {
  let div1;
  let p;
  let textContent = "Share Sheet";
  let t1;
  let div0;
  let button0;
  let textContent_1 = "Share All Options";
  let t3;
  let button1;
  let textContent_2 = "Share Text Only";
  let t5;
  let button2;
  let textContent_3 = "Share URL Only";
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      div0 = element("div");
      button0 = element("button");
      button0.textContent = textContent_1;
      t3 = space();
      button1 = element("button");
      button1.textContent = textContent_2;
      t5 = space();
      button2 = element("button");
      button2.textContent = textContent_3;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-16qptl6") p.textContent = textContent;
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button0 = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button0) !== "svelte-59ri9k") button0.textContent = textContent_1;
      t3 = claim_space(div0_nodes);
      button1 = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button1) !== "svelte-1cztuph") button1.textContent = textContent_2;
      t5 = claim_space(div0_nodes);
      button2 = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button2) !== "svelte-fshzpr") button2.textContent = textContent_3;
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-lg text-green-100 font-semibold");
      attr(button0, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(button1, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(button2, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(div0, "class", "flex flex-col gap-2");
      attr(div1, "class", "flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, p);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, button0);
      append_hydration(div0, t3);
      append_hydration(div0, button1);
      append_hydration(div0, t5);
      append_hydration(div0, button2);
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*shareAllOptions*/
            ctx[0]
          ),
          listen(
            button1,
            "click",
            /*shareTextOnlyOption*/
            ctx[1]
          ),
          listen(
            button2,
            "click",
            /*shareUrlOnlyOption*/
            ctx[2]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self) {
  const shareData = {
    title: "Sample Text",
    text: "This is a sample text",
    url: "http://google.com/",
    dialogTitle: "Share with buddies"
  };
  const shareTextOnly = { text: "This is sample text" };
  const shareUrlOnly = { url: "http://google.com/" };
  const shareAllOptions = async () => {
    await Share.share(shareData);
  };
  const shareTextOnlyOption = async () => {
    await Share.share(shareTextOnly);
  };
  const shareUrlOnlyOption = async () => {
    await Share.share(shareUrlOnly);
  };
  return [shareAllOptions, shareTextOnlyOption, shareUrlOnlyOption];
}
class Share_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
function create_fragment$1(ctx) {
  let div1;
  let p;
  let textContent = "Actions Sheet";
  let t1;
  let div0;
  let button;
  let textContent_1 = "Actions";
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      p = element("p");
      p.textContent = textContent;
      t1 = space();
      div0 = element("div");
      button = element("button");
      button.textContent = textContent_1;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-1ia15ei") p.textContent = textContent;
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-v7cx7p") button.textContent = textContent_1;
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-lg text-green-100 font-semibold");
      attr(button, "class", "bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded");
      attr(div0, "class", "flex flex-col gap-2");
      attr(div1, "class", "flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, p);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*showActions*/
          ctx[0]
        );
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self) {
  const showActions = async () => {
    const result = await ActionSheet.showActions({
      title: "Actions to Select",
      message: "Select an option to perform",
      options: [
        { title: "Option 1" },
        { title: "Option 2" },
        {
          title: "Close",
          style: ActionSheetButtonStyle.Destructive
        }
      ]
    });
    console.log("Action Sheet result:", result);
  };
  return [showActions];
}
class ActionSheet_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
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
function create_fragment(ctx) {
  let herosection;
  let t0;
  let dealofthedaysection;
  let t1;
  let div6;
  let div5;
  let div4;
  let div0;
  let textContent = "Others";
  let t3;
  let div3;
  let div1;
  let actionsheet;
  let t4;
  let notification;
  let t5;
  let gelocation;
  let t6;
  let camera;
  let t7;
  let haptics;
  let t8;
  let div2;
  let toast;
  let t9;
  let share;
  let t10;
  let addproduct;
  let current;
  herosection = new HeroSection({});
  dealofthedaysection = new DealOfTheDaySection({});
  actionsheet = new ActionSheet_1({});
  notification = new Notification({});
  gelocation = new Gelocation({});
  camera = new Camera_1({});
  haptics = new Haptics_1({});
  toast = new Toast_1({});
  share = new Share_1({});
  addproduct = new AddProduct({});
  return {
    c() {
      create_component(herosection.$$.fragment);
      t0 = space();
      create_component(dealofthedaysection.$$.fragment);
      t1 = space();
      div6 = element("div");
      div5 = element("div");
      div4 = element("div");
      div0 = element("div");
      div0.textContent = textContent;
      t3 = space();
      div3 = element("div");
      div1 = element("div");
      create_component(actionsheet.$$.fragment);
      t4 = space();
      create_component(notification.$$.fragment);
      t5 = space();
      create_component(gelocation.$$.fragment);
      t6 = space();
      create_component(camera.$$.fragment);
      t7 = space();
      create_component(haptics.$$.fragment);
      t8 = space();
      div2 = element("div");
      create_component(toast.$$.fragment);
      t9 = space();
      create_component(share.$$.fragment);
      t10 = space();
      create_component(addproduct.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(herosection.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(dealofthedaysection.$$.fragment, nodes);
      t1 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-1lpowoy") div0.textContent = textContent;
      t3 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(actionsheet.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(notification.$$.fragment, div1_nodes);
      t5 = claim_space(div1_nodes);
      claim_component(gelocation.$$.fragment, div1_nodes);
      t6 = claim_space(div1_nodes);
      claim_component(camera.$$.fragment, div1_nodes);
      t7 = claim_space(div1_nodes);
      claim_component(haptics.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t8 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(toast.$$.fragment, div2_nodes);
      t9 = claim_space(div2_nodes);
      claim_component(share.$$.fragment, div2_nodes);
      t10 = claim_space(div2_nodes);
      claim_component(addproduct.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "mb-8 text-3xl font-bold md:text-4xl md:mb-4");
      attr(div1, "class", "md:flex md:flex-row md:gap-4 justify-between");
      attr(div2, "class", "md:flex md:flex-row md:gap-4 justify-between");
      attr(div3, "class", "flex flex-col gap-4");
      attr(div4, "class", "px-4 pt-16 md:px-20 max-w-screen-xl");
      attr(div5, "class", "container mx-auto");
      attr(div6, "class", "pb-20 bg-blue-300");
    },
    m(target, anchor) {
      mount_component(herosection, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(dealofthedaysection, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div6, anchor);
      append_hydration(div6, div5);
      append_hydration(div5, div4);
      append_hydration(div4, div0);
      append_hydration(div4, t3);
      append_hydration(div4, div3);
      append_hydration(div3, div1);
      mount_component(actionsheet, div1, null);
      append_hydration(div1, t4);
      mount_component(notification, div1, null);
      append_hydration(div1, t5);
      mount_component(gelocation, div1, null);
      append_hydration(div1, t6);
      mount_component(camera, div1, null);
      append_hydration(div1, t7);
      mount_component(haptics, div1, null);
      append_hydration(div3, t8);
      append_hydration(div3, div2);
      mount_component(toast, div2, null);
      append_hydration(div2, t9);
      mount_component(share, div2, null);
      append_hydration(div2, t10);
      mount_component(addproduct, div2, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current) return;
      transition_in(herosection.$$.fragment, local);
      transition_in(dealofthedaysection.$$.fragment, local);
      transition_in(actionsheet.$$.fragment, local);
      transition_in(notification.$$.fragment, local);
      transition_in(gelocation.$$.fragment, local);
      transition_in(camera.$$.fragment, local);
      transition_in(haptics.$$.fragment, local);
      transition_in(toast.$$.fragment, local);
      transition_in(share.$$.fragment, local);
      transition_in(addproduct.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(herosection.$$.fragment, local);
      transition_out(dealofthedaysection.$$.fragment, local);
      transition_out(actionsheet.$$.fragment, local);
      transition_out(notification.$$.fragment, local);
      transition_out(gelocation.$$.fragment, local);
      transition_out(camera.$$.fragment, local);
      transition_out(haptics.$$.fragment, local);
      transition_out(toast.$$.fragment, local);
      transition_out(share.$$.fragment, local);
      transition_out(addproduct.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(t1);
        detach(div6);
      }
      destroy_component(herosection, detaching);
      destroy_component(dealofthedaysection, detaching);
      destroy_component(actionsheet);
      destroy_component(notification);
      destroy_component(gelocation);
      destroy_component(camera);
      destroy_component(haptics);
      destroy_component(toast);
      destroy_component(share);
      destroy_component(addproduct);
    }
  };
}
function instance($$self) {
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
  return [];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  ImpactStyle as I,
  NotificationType as N,
  Page as P
};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/web.QNo_JNoZ.js","../chunks/utils.D7pUn0qA.js","../chunks/preload-helper.CN7R4D5X.js","../chunks/index.CpHgRmVI.js","../chunks/scheduler.FLmlRqdj.js"])))=>i.map(i=>d[i]);
import { w as split_css_unit, s as safe_not_equal, c as component_subscribe, o as onMount, x as create_slot, y as update_slot_base, z as get_all_dirty_from_scope, A as get_slot_changes, f as add_render_callback, n as noop, r as run_all, a as set_store_value } from "../chunks/scheduler.FLmlRqdj.js";
import { S as SvelteComponent, i as init, e as element, s as space, A as create_component, c as claim_element, a as children, l as get_svelte_dataset, f as claim_space, d as detach, B as claim_component, k as attr, g as insert_hydration, h as append_hydration, C as mount_component, m as listen, w as transition_in, u as transition_out, v as check_outros, D as destroy_component, E as create_bidirectional_transition, F as create_in_transition, n as set_input_value, G as to_number, y as group_outros, t as text, b as claim_text, j as set_data, o as empty, p as destroy_each } from "../chunks/index.qEUg-WN-.js";
import { e as ensure_array_like } from "../chunks/each.CuygwpM4.js";
import { r as registerPlugin, C as Capacitor, u as utils, p as products, c as cart } from "../chunks/utils.D7pUn0qA.js";
import { g as goto } from "../chunks/entry.C4lqNRiB.js";
import { p as page } from "../chunks/stores.BaorquDV.js";
import { w as writable } from "../chunks/index.CpHgRmVI.js";
import { _ as __vitePreload } from "../chunks/preload-helper.CN7R4D5X.js";
const prerender = true;
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prerender
}, Symbol.toStringTag, { value: "Module" }));
var Style;
(function(Style2) {
  Style2["Dark"] = "DARK";
  Style2["Light"] = "LIGHT";
  Style2["Default"] = "DEFAULT";
})(Style || (Style = {}));
var Animation;
(function(Animation2) {
  Animation2["None"] = "NONE";
  Animation2["Slide"] = "SLIDE";
  Animation2["Fade"] = "FADE";
})(Animation || (Animation = {}));
const StatusBar = registerPlugin("StatusBar");
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
function createNavigationStore() {
  const { subscribe, update } = writable([]);
  return {
    subscribe,
    pushRoute: (route) => update((routes) => [...routes, route]),
    popRoute: () => update((routes) => routes.slice(0, -1)),
    clearRoutes: () => update(() => [])
  };
}
const navigationHistory = createNavigationStore();
const App = registerPlugin("App", {
  web: () => __vitePreload(() => import("../chunks/web.QNo_JNoZ.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0, import.meta.url).then((m) => new m.AppWeb())
});
function instance$1($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  onMount(() => {
    navigationHistory.clearRoutes();
    navigationHistory.pushRoute($page.url.pathname);
    const unsubscribe = page.subscribe(({ url }) => {
      navigationHistory.pushRoute(url.pathname);
    });
    App.addListener("backButton", handleBackButton);
    return () => {
      unsubscribe();
      App.removeAllListeners();
    };
  });
  function handleBackButton() {
    let routes;
    navigationHistory.subscribe((value) => {
      routes = value;
    })();
    if (routes.length <= 1) {
      console.log("No more pages in history.");
      showExitConfirmation();
    } else {
      navigationHistory.popRoute();
      const previousRoute = routes[routes.length - 2];
      goto(previousRoute);
    }
  }
  function showExitConfirmation() {
    App.minimizeApp();
  }
  return [];
}
class NavigationHandler extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, null, safe_not_equal, {});
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let div;
  let t;
  let div_transition;
  let current;
  let if_block0 = (
    /*cartUI*/
    ctx[1] && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*orderUI*/
    ctx[5] && create_if_block_1(ctx)
  );
  return {
    c() {
      div = element("div");
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0) if_block0.l(div_nodes);
      t = claim_space(div_nodes);
      if (if_block1) if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "absolute right-0 bg-green-900 w-[93vw] min-h-[80vh] max-h-[80vh] shadow-2xl md:mx-20 px-4 py-8 flex flex--col overflow-scroll");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block0) if_block0.m(div, null);
      append_hydration(div, t);
      if (if_block1) if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*cartUI*/
        ctx2[1]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*cartUI*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*orderUI*/
        ctx2[5]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*orderUI*/
          32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      if (local) {
        add_render_callback(() => {
          if (!current) return;
          if (!div_transition) div_transition = create_bidirectional_transition(div, fly, { duration: 300, y: 500, easing: quintOut }, true);
          div_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      if (local) {
        if (!div_transition) div_transition = create_bidirectional_transition(div, fly, { duration: 300, y: 500, easing: quintOut }, false);
        div_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (detaching && div_transition) div_transition.end();
    }
  };
}
function create_if_block_2(ctx) {
  let div2;
  let div0;
  let textContent = "Cart";
  let t1;
  let div1;
  let div2_intro;
  function select_block_type(ctx2, dirty) {
    if (!/*cartItems*/
    ctx2[6].length) return create_if_block_3;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      div0.textContent = textContent;
      t1 = space();
      div1 = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-1gm60mr") div0.textContent = textContent;
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-2xl");
      attr(div1, "class", "flex flex-col w-full justify-between h-full");
      attr(div2, "class", "text-green-50 w-full flex flex-col justify-between");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      if_block.m(div1, null);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
    },
    i(local) {
      if (local) {
        if (!div2_intro) {
          add_render_callback(() => {
            div2_intro = create_in_transition(div2, fly, { y: 200, duration: 200 });
            div2_intro.start();
          });
        }
      }
    },
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      if_block.d();
    }
  };
}
function create_else_block(ctx) {
  let div5;
  let div0;
  let t0;
  let div4;
  let div3;
  let div1;
  let textContent = "Total";
  let t2;
  let div2;
  let t3;
  let t4_value = (
    /*cartItems*/
    ctx[6].reduce(func, 0) + ""
  );
  let t4;
  let t5;
  let button;
  let textContent_1 = "Add Address";
  let mounted;
  let dispose;
  let if_block = (
    /*cartItems*/
    ctx[6] && create_if_block_4(ctx)
  );
  return {
    c() {
      div5 = element("div");
      div0 = element("div");
      if (if_block) if_block.c();
      t0 = space();
      div4 = element("div");
      div3 = element("div");
      div1 = element("div");
      div1.textContent = textContent;
      t2 = space();
      div2 = element("div");
      t3 = text("₹ ");
      t4 = text(t4_value);
      t5 = space();
      button = element("button");
      button.textContent = textContent_1;
      this.h();
    },
    l(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block) if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(div1) !== "svelte-1cf7gfk") div1.textContent = textContent;
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      t3 = claim_text(div2_nodes, "₹ ");
      t4 = claim_text(div2_nodes, t4_value);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t5 = claim_space(div4_nodes);
      button = claim_element(div4_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-1vw93s8") button.textContent = textContent_1;
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "overflow-y-scroll overscroll-contain w-full");
      attr(div3, "class", "flex justify-between px-4 py-2 mt-8 text-2xl text-green-50 bg-green-950");
      attr(button, "class", "px-4 py-2 my-2 w-full text-xl bg-blue-400 text-green-950 hover:bg-green-700 hover:text-green-50 active:bg-blue-600 active:outline-none focus:outline-none focus:ring-2 focus:ring-green-600");
      attr(div4, "class", "");
      attr(div5, "class", "flex flex-col w-full");
    },
    m(target, anchor) {
      insert_hydration(target, div5, anchor);
      append_hydration(div5, div0);
      if (if_block) if_block.m(div0, null);
      append_hydration(div5, t0);
      append_hydration(div5, div4);
      append_hydration(div4, div3);
      append_hydration(div3, div1);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      append_hydration(div2, t3);
      append_hydration(div2, t4);
      append_hydration(div4, t5);
      append_hydration(div4, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_1*/
          ctx[12]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (
        /*cartItems*/
        ctx2[6]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_4(ctx2);
          if_block.c();
          if_block.m(div0, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*cartItems*/
      64 && t4_value !== (t4_value = /*cartItems*/
      ctx2[6].reduce(func, 0) + "")) set_data(t4, t4_value);
    },
    d(detaching) {
      if (detaching) {
        detach(div5);
      }
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3(ctx) {
  let div2;
  let textContent = `<div>Your cart is empty</div> <div class="mt-2"><a class="text-2xl" href="./products">Shop Products?</a></div>`;
  return {
    c() {
      div2 = element("div");
      div2.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div2) !== "svelte-aixqra") div2.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div2, "class", "mt-20");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_if_block_4(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like(
    /*cartItems*/
    ctx[6]
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
      if (dirty & /*cartItems*/
      64) {
        each_value = ensure_array_like(
          /*cartItems*/
          ctx2[6]
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
function create_each_block(ctx) {
  let div2;
  let div0;
  let t0_value = (
    /*item*/
    ctx[18].product + ""
  );
  let t0;
  let t1;
  let div1;
  let t2;
  let t3_value = (
    /*item*/
    ctx[18].price + ""
  );
  let t3;
  let t4;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      t2 = text("₹ ");
      t3 = text(t3_value);
      t4 = space();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "₹ ");
      t3 = claim_text(div1_nodes, t3_value);
      div1_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "font-normal");
      attr(div1, "class", "");
      attr(div2, "class", "flex justify-between px-4 py-2 my-2 text-xl text-green-50 bg-green-700 w-full");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, t2);
      append_hydration(div1, t3);
      append_hydration(div2, t4);
    },
    p(ctx2, dirty) {
      if (dirty & /*cartItems*/
      64 && t0_value !== (t0_value = /*item*/
      ctx2[18].product + "")) set_data(t0, t0_value);
      if (dirty & /*cartItems*/
      64 && t3_value !== (t3_value = /*item*/
      ctx2[18].price + "")) set_data(t3, t3_value);
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_if_block_1(ctx) {
  let div5;
  let div4;
  let div0;
  let textContent = "Address";
  let t1;
  let form;
  let div1;
  let label0;
  let textContent_1 = "Name";
  let t3;
  let input0;
  let t4;
  let div2;
  let label1;
  let textContent_2 = "Address";
  let t6;
  let textarea;
  let t7;
  let div3;
  let label2;
  let textContent_3 = "Phone";
  let t9;
  let input1;
  let t10;
  let button0;
  let textContent_4 = "Back to Cart";
  let t12;
  let button1;
  let textContent_5 = "Order";
  let div5_intro;
  let mounted;
  let dispose;
  return {
    c() {
      div5 = element("div");
      div4 = element("div");
      div0 = element("div");
      div0.textContent = textContent;
      t1 = space();
      form = element("form");
      div1 = element("div");
      label0 = element("label");
      label0.textContent = textContent_1;
      t3 = space();
      input0 = element("input");
      t4 = space();
      div2 = element("div");
      label1 = element("label");
      label1.textContent = textContent_2;
      t6 = space();
      textarea = element("textarea");
      t7 = space();
      div3 = element("div");
      label2 = element("label");
      label2.textContent = textContent_3;
      t9 = space();
      input1 = element("input");
      t10 = space();
      button0 = element("button");
      button0.textContent = textContent_4;
      t12 = space();
      button1 = element("button");
      button1.textContent = textContent_5;
      this.h();
    },
    l(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-7r9xnd") div0.textContent = textContent;
      t1 = claim_space(div4_nodes);
      form = claim_element(div4_nodes, "FORM", { class: true });
      var form_nodes = children(form);
      div1 = claim_element(form_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      label0 = claim_element(div1_nodes, "LABEL", {
        for: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label0) !== "svelte-14u613g") label0.textContent = textContent_1;
      t3 = claim_space(div1_nodes);
      input0 = claim_element(div1_nodes, "INPUT", { placeholder: true, class: true });
      div1_nodes.forEach(detach);
      t4 = claim_space(form_nodes);
      div2 = claim_element(form_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label1 = claim_element(div2_nodes, "LABEL", {
        for: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label1) !== "svelte-ds83r4") label1.textContent = textContent_2;
      t6 = claim_space(div2_nodes);
      textarea = claim_element(div2_nodes, "TEXTAREA", { placeholder: true, class: true });
      children(textarea).forEach(detach);
      div2_nodes.forEach(detach);
      t7 = claim_space(form_nodes);
      div3 = claim_element(form_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      label2 = claim_element(div3_nodes, "LABEL", {
        for: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label2) !== "svelte-kvid6k") label2.textContent = textContent_3;
      t9 = claim_space(div3_nodes);
      input1 = claim_element(div3_nodes, "INPUT", {
        type: true,
        placeholder: true,
        class: true
      });
      div3_nodes.forEach(detach);
      form_nodes.forEach(detach);
      t10 = claim_space(div4_nodes);
      button0 = claim_element(div4_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button0) !== "svelte-16ga8eu") button0.textContent = textContent_4;
      t12 = claim_space(div4_nodes);
      button1 = claim_element(div4_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button1) !== "svelte-zujxvu") button1.textContent = textContent_5;
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-2xl");
      attr(label0, "for", "name");
      attr(label0, "class", "text-sm font-normal");
      attr(input0, "placeholder", "Full Name");
      attr(input0, "class", "px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950");
      attr(div1, "class", "flex flex-col");
      attr(label1, "for", "address");
      attr(label1, "class", "text-sm font-normal");
      attr(textarea, "placeholder", "Address");
      attr(textarea, "class", "px-4 py-2 mb-2 w-full h-32 text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950");
      attr(div2, "class", "flex flex-col");
      attr(label2, "for", "phone");
      attr(label2, "class", "text-sm font-normal");
      attr(input1, "type", "number");
      attr(input1, "placeholder", "+91 - XXX XXX XXXX");
      attr(input1, "class", "px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950");
      attr(div3, "class", "flex flex-col");
      attr(form, "class", "flex flex-col gap-2 px-4 pt-2 my-4 bg-green-700");
      attr(button0, "class", "py-2 mt-4 mb-2 w-full text-xl text-green-50 bg-green-950 hover:bg-green-700 hover:text-green-950 focus:outline-none focus:ring-2 focus:ring-green-600");
      attr(button1, "class", "py-2 mt-2 mb-8 w-full text-xl bg-blue-400 text-green-950 hover:bg-green-700 hover:text-green-50 active:bg-blue-600 active:outline-none focus:outline-none focus:ring-2 focus:ring-green-600");
      attr(div4, "class", "text-green-50");
      attr(div5, "class", "overflow-y-scroll overscroll-contain font-medium w-full");
    },
    m(target, anchor) {
      insert_hydration(target, div5, anchor);
      append_hydration(div5, div4);
      append_hydration(div4, div0);
      append_hydration(div4, t1);
      append_hydration(div4, form);
      append_hydration(form, div1);
      append_hydration(div1, label0);
      append_hydration(div1, t3);
      append_hydration(div1, input0);
      set_input_value(
        input0,
        /*name*/
        ctx[2]
      );
      append_hydration(form, t4);
      append_hydration(form, div2);
      append_hydration(div2, label1);
      append_hydration(div2, t6);
      append_hydration(div2, textarea);
      set_input_value(
        textarea,
        /*address*/
        ctx[3]
      );
      append_hydration(form, t7);
      append_hydration(form, div3);
      append_hydration(div3, label2);
      append_hydration(div3, t9);
      append_hydration(div3, input1);
      set_input_value(
        input1,
        /*phone*/
        ctx[4]
      );
      append_hydration(div4, t10);
      append_hydration(div4, button0);
      append_hydration(div4, t12);
      append_hydration(div4, button1);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[13]
          ),
          listen(
            textarea,
            "input",
            /*textarea_input_handler*/
            ctx[14]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[15]
          ),
          listen(
            button0,
            "click",
            /*click_handler_2*/
            ctx[16]
          ),
          listen(
            button1,
            "click",
            /*click_handler_3*/
            ctx[17]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*name*/
      4 && input0.value !== /*name*/
      ctx2[2]) {
        set_input_value(
          input0,
          /*name*/
          ctx2[2]
        );
      }
      if (dirty & /*address*/
      8) {
        set_input_value(
          textarea,
          /*address*/
          ctx2[3]
        );
      }
      if (dirty & /*phone*/
      16 && to_number(input1.value) !== /*phone*/
      ctx2[4]) {
        set_input_value(
          input1,
          /*phone*/
          ctx2[4]
        );
      }
    },
    i(local) {
      if (local) {
        if (!div5_intro) {
          add_render_callback(() => {
            div5_intro = create_in_transition(div5, fly, { y: 200, duration: 200 });
            div5_intro.start();
          });
        }
      }
    },
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div5);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment(ctx) {
  let body;
  let div17;
  let nav0;
  let textContent = `<div class="container flex gap-4 justify-between px-4 py-2 mx-auto md:justify-between md:items-center md:flex-row md:px-20 max-w-screen-2xl"><a href="./" class="text-xl font-bold">GROCERIES</a></div>`;
  let t1;
  let nav1;
  let div8;
  let textContent_1 = `<div class="flex flex-row justify-between w-full gap-3 md:gap-8 sm:gap-4"><div class="flex gap-3 md:gap-8 sm:gap-4"><div class=""><a href="/">Home</a></div> <div class=""><a href="/products">Products</a></div></div> <div class="flex gap-3 md:gap-8 sm:gap-4"><div class=""><a href="/orders">Orders</a></div> <div class=""><a href="/auth">Auth</a></div></div></div>`;
  let t9;
  let div16;
  let div15;
  let div9;
  let textContent_2 = `<a href="/">Home</a>`;
  let t11;
  let div10;
  let textContent_3 = `<a href="/products">Products</a>`;
  let t13;
  let div11;
  let textContent_4 = `<a href="/auth">Auth</a>`;
  let t15;
  let div12;
  let textContent_5 = `<a href="/orders">Orders</a>`;
  let t17;
  let div14;
  let button;
  let textContent_6 = "Cart";
  let t19;
  let div13;
  let t20;
  let div18;
  let t21;
  let navigationhandler;
  let t22;
  let a9;
  let textContent_7 = "testroute";
  let current;
  let mounted;
  let dispose;
  let if_block = (
    /*dropdownUI*/
    ctx[0] && create_if_block(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  navigationhandler = new NavigationHandler({});
  return {
    c() {
      body = element("body");
      div17 = element("div");
      nav0 = element("nav");
      nav0.innerHTML = textContent;
      t1 = space();
      nav1 = element("nav");
      div8 = element("div");
      div8.innerHTML = textContent_1;
      t9 = space();
      div16 = element("div");
      div15 = element("div");
      div9 = element("div");
      div9.innerHTML = textContent_2;
      t11 = space();
      div10 = element("div");
      div10.innerHTML = textContent_3;
      t13 = space();
      div11 = element("div");
      div11.innerHTML = textContent_4;
      t15 = space();
      div12 = element("div");
      div12.innerHTML = textContent_5;
      t17 = space();
      div14 = element("div");
      button = element("button");
      button.textContent = textContent_6;
      t19 = space();
      div13 = element("div");
      if (if_block) if_block.c();
      t20 = space();
      div18 = element("div");
      if (default_slot) default_slot.c();
      t21 = space();
      create_component(navigationhandler.$$.fragment);
      t22 = space();
      a9 = element("a");
      a9.textContent = textContent_7;
      this.h();
    },
    l(nodes) {
      body = claim_element(nodes, "BODY", { class: true });
      var body_nodes = children(body);
      div17 = claim_element(body_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      nav0 = claim_element(div17_nodes, "NAV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(nav0) !== "svelte-bu8uay") nav0.innerHTML = textContent;
      t1 = claim_space(div17_nodes);
      nav1 = claim_element(div17_nodes, "NAV", { class: true });
      var nav1_nodes = children(nav1);
      div8 = claim_element(nav1_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div8) !== "svelte-1w1irhi") div8.innerHTML = textContent_1;
      t9 = claim_space(nav1_nodes);
      div16 = claim_element(nav1_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      div15 = claim_element(div16_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      div9 = claim_element(div15_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div9) !== "svelte-18s568i") div9.innerHTML = textContent_2;
      t11 = claim_space(div15_nodes);
      div10 = claim_element(div15_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div10) !== "svelte-m4wckp") div10.innerHTML = textContent_3;
      t13 = claim_space(div15_nodes);
      div11 = claim_element(div15_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div11) !== "svelte-12ooer9") div11.innerHTML = textContent_4;
      t15 = claim_space(div15_nodes);
      div12 = claim_element(div15_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div12) !== "svelte-c0u8l1") div12.innerHTML = textContent_5;
      t17 = claim_space(div15_nodes);
      div14 = claim_element(div15_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      button = claim_element(div14_nodes, "BUTTON", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-oj37e1") button.textContent = textContent_6;
      t19 = claim_space(div14_nodes);
      div13 = claim_element(div14_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      if (if_block) if_block.l(div13_nodes);
      div13_nodes.forEach(detach);
      div14_nodes.forEach(detach);
      div15_nodes.forEach(detach);
      div16_nodes.forEach(detach);
      nav1_nodes.forEach(detach);
      div17_nodes.forEach(detach);
      body_nodes.forEach(detach);
      t20 = claim_space(nodes);
      div18 = claim_element(nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      if (default_slot) default_slot.l(div18_nodes);
      div18_nodes.forEach(detach);
      t21 = claim_space(nodes);
      claim_component(navigationhandler.$$.fragment, nodes);
      t22 = claim_space(nodes);
      a9 = claim_element(nodes, "A", { href: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(a9) !== "svelte-w63brl") a9.textContent = textContent_7;
      this.h();
    },
    h() {
      attr(nav0, "class", "bg-blue-600 flex pr-4");
      attr(div8, "class", "container hidden sm:flex gap-4 px-4 py-2 mx-auto md:px-20 max-w-screen-2xl");
      attr(div9, "class", "");
      attr(div10, "class", "");
      attr(div11, "class", "");
      attr(div12, "class", "");
      attr(div13, "class", "");
      attr(div14, "class", "relative");
      attr(div15, "class", "flex flex-row justify-between w-full gap-3 md:gap-8 sm:gap-4");
      attr(div16, "class", "container flex sm:hidden gap-4 px-4 py-2 mx-auto md:px-20 max-w-screen-2xl");
      attr(nav1, "class", "bg-blue-400 sticky top-0 z-20");
      attr(div17, "class", "fixed w-[100%]");
      attr(body, "class", ` selection:bg-green-950 selection:text-green-100 font-semibold  `);
      attr(div18, "class", "pt-20");
      attr(a9, "href", "/testroute");
    },
    m(target, anchor) {
      insert_hydration(target, body, anchor);
      append_hydration(body, div17);
      append_hydration(div17, nav0);
      append_hydration(div17, t1);
      append_hydration(div17, nav1);
      append_hydration(nav1, div8);
      append_hydration(nav1, t9);
      append_hydration(nav1, div16);
      append_hydration(div16, div15);
      append_hydration(div15, div9);
      append_hydration(div15, t11);
      append_hydration(div15, div10);
      append_hydration(div15, t13);
      append_hydration(div15, div11);
      append_hydration(div15, t15);
      append_hydration(div15, div12);
      append_hydration(div15, t17);
      append_hydration(div15, div14);
      append_hydration(div14, button);
      append_hydration(div14, t19);
      append_hydration(div14, div13);
      if (if_block) if_block.m(div13, null);
      insert_hydration(target, t20, anchor);
      insert_hydration(target, div18, anchor);
      if (default_slot) {
        default_slot.m(div18, null);
      }
      insert_hydration(target, t21, anchor);
      mount_component(navigationhandler, target, anchor);
      insert_hydration(target, t22, anchor);
      insert_hydration(target, a9, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[11]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*dropdownUI*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*dropdownUI*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div13, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      transition_in(default_slot, local);
      transition_in(navigationhandler.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      transition_out(navigationhandler.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(body);
        detach(t20);
        detach(div18);
        detach(t21);
        detach(t22);
        detach(a9);
      }
      if (if_block) if_block.d();
      if (default_slot) default_slot.d(detaching);
      destroy_component(navigationhandler, detaching);
      mounted = false;
      dispose();
    }
  };
}
const func = (acc, item) => acc + item.price;
function instance($$self, $$props, $$invalidate) {
  let cartItems;
  let $cart;
  component_subscribe($$self, cart, ($$value) => $$invalidate(8, $cart = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let dropdownUI = false;
  let cartUI = false;
  let name = "";
  let address = "";
  let phone = "";
  onMount(async () => {
    const productsFetched = await utils.products.all();
    products.set({ loading: false, data: productsFetched });
  });
  if (Capacitor.isNativePlatform()) {
    StatusBar.setBackgroundColor({ color: "#166534" });
  }
  let orderUI = false;
  async function submitOrder() {
    try {
      let order = {
        products: cartItems,
        address,
        phone,
        name
      };
      console.log("order", order);
      const orderSubmitted = await utils.orders.submitOrder(order);
      console.log("orderSubmitted", orderSubmitted);
      if (orderSubmitted) {
        $$invalidate(5, orderUI = false);
        $$invalidate(1, cartUI = false);
        $$invalidate(0, dropdownUI = false);
        set_store_value(cart, $cart = [], $cart);
        $$invalidate(2, name = "");
        $$invalidate(3, address = "");
        $$invalidate(4, phone = "");
      }
      utils.others.showToast("Order Placed Successfully");
    } catch (error) {
      console.error("Failed to submit order:", error);
    }
  }
  const click_handler = () => {
    $$invalidate(0, dropdownUI = !dropdownUI);
    $$invalidate(1, cartUI = true);
    if (orderUI) {
      $$invalidate(5, orderUI = false);
    }
  };
  const click_handler_1 = () => {
    $$invalidate(1, cartUI = false);
    $$invalidate(5, orderUI = true);
  };
  function input0_input_handler() {
    name = this.value;
    $$invalidate(2, name);
  }
  function textarea_input_handler() {
    address = this.value;
    $$invalidate(3, address);
  }
  function input1_input_handler() {
    phone = to_number(this.value);
    $$invalidate(4, phone);
  }
  const click_handler_2 = () => {
    $$invalidate(5, orderUI = false);
    $$invalidate(1, cartUI = true);
  };
  const click_handler_3 = () => {
    submitOrder();
  };
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2) $$invalidate(9, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$cart*/
    256) {
      $$invalidate(6, cartItems = $cart);
    }
  };
  return [
    dropdownUI,
    cartUI,
    name,
    address,
    phone,
    orderUI,
    cartItems,
    submitOrder,
    $cart,
    $$scope,
    slots,
    click_handler,
    click_handler_1,
    input0_input_handler,
    textarea_input_handler,
    input1_input_handler,
    click_handler_2,
    click_handler_3
  ];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as component,
  _layout as universal
};

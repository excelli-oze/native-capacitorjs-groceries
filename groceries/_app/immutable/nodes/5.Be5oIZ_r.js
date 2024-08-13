import { s as safe_not_equal, n as noop, c as component_subscribe, o as onMount, a as set_store_value, b as src_url_equal } from "../chunks/scheduler.FLmlRqdj.js";
import { S as SvelteComponent, i as init, e as element, c as claim_element, a as children, d as detach, k as attr, g as insert_hydration, s as space, o as empty, l as get_svelte_dataset, f as claim_space, p as destroy_each, t as text, b as claim_text, h as append_hydration, m as listen, j as set_data } from "../chunks/index.qEUg-WN-.js";
import { e as ensure_array_like } from "../chunks/each.CuygwpM4.js";
import { p as products, c as cart } from "../chunks/utils.D7pUn0qA.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
  let div;
  let textContent = "Products";
  let t1;
  let if_block_anchor;
  let if_block = (
    /*productsList*/
    ctx[0] && create_if_block_1(ctx)
  );
  return {
    c() {
      div = element("div");
      div.textContent = textContent;
      t1 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-y0lyg9") div.textContent = textContent;
      t1 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(div, "class", "text-2xl font-bold md:text-4xl ");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      insert_hydration(target, t1, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (
        /*productsList*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
        detach(t1);
        detach(if_block_anchor);
      }
      if (if_block) if_block.d(detaching);
    }
  };
}
function create_if_block(ctx) {
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
function create_if_block_1(ctx) {
  let each_1_anchor;
  let each_value = ensure_array_like(
    /*productsList*/
    ctx[0]
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
      5) {
        each_value = ensure_array_like(
          /*productsList*/
          ctx2[0]
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
    ctx[5].title + ""
  );
  let t1;
  let t2;
  let div1;
  let p1;
  let span;
  let t3;
  let t4_value = (
    /*product*/
    ctx[5].price + ""
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
      ctx[3](
        /*product*/
        ctx[5]
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
      if (get_svelte_dataset(button) !== "svelte-444ri9") button.textContent = textContent;
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t7 = claim_space(div3_nodes);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "w-[208px] h-[250px]");
      if (!src_url_equal(img.src, img_src_value = /*product*/
      ctx[5].image)) attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*product*/
      ctx[5].title);
      attr(div0, "class", "p-2 w-full bg-blue-300 shadow-lg h-fit");
      attr(p0, "class", "mb-1 text-xl font-normal text-green-50 ");
      attr(span, "class", "text-green-900");
      attr(p1, "class", "text-sm font-normal");
      attr(button, "class", "px-4 py-1 text-sm text-white bg-green-800 shadow-sm hover:bg-green-900 active:bg-green-800");
      attr(div1, "class", "flex justify-between items-center");
      attr(div2, "class", "p-2 mt-8 bg-blue-300/20");
      attr(div3, "class", "bg-blue-600 p-4 w-[256px]");
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
      1 && !src_url_equal(img.src, img_src_value = /*product*/
      ctx[5].image)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*productsList*/
      1 && img_alt_value !== (img_alt_value = /*product*/
      ctx[5].title)) {
        attr(img, "alt", img_alt_value);
      }
      if (dirty & /*productsList*/
      1 && t1_value !== (t1_value = /*product*/
      ctx[5].title + "")) set_data(t1, t1_value);
      if (dirty & /*productsList*/
      1 && t4_value !== (t4_value = /*product*/
      ctx[5].price + "")) set_data(t4, t4_value);
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
function create_fragment(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (
      /*loading*/
      ctx2[1]
    ) return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "w-screen grid grid-cols-1 w-screen bg-blue-100 pt-4 gap-y-12 place-items-center px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20 max-w-screen-2xl mx-auto min-h-screen");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if_block.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $cart;
  component_subscribe($$self, cart, ($$value) => $$invalidate(4, $cart = $$value));
  let productsList = [];
  let loading = true;
  onMount(async () => {
    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((json) => {
      products.set({ loading: false, data: json });
      $$invalidate(0, productsList = json);
      $$invalidate(1, loading = false);
    });
  });
  function addToCart(product) {
    set_store_value(cart, $cart = [...$cart, product], $cart);
    console.log($cart);
  }
  const click_handler = (product) => {
    addToCart(product);
  };
  return [productsList, loading, addToCart, click_handler];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};

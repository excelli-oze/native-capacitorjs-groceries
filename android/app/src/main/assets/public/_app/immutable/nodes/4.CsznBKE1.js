import { s as safe_not_equal, n as noop, c as component_subscribe, o as onMount, b as src_url_equal } from "../chunks/scheduler.FLmlRqdj.js";
import { S as SvelteComponent, i as init, e as element, s as space, c as claim_element, a as children, l as get_svelte_dataset, f as claim_space, d as detach, k as attr, g as insert_hydration, h as append_hydration, o as empty, p as destroy_each, t as text, q as svg_element, b as claim_text, r as claim_svg_element, m as listen, j as set_data } from "../chunks/index.qEUg-WN-.js";
import { e as ensure_array_like } from "../chunks/each.CuygwpM4.js";
import { u as utils } from "../chunks/utils.D7pUn0qA.js";
import "../chunks/entry.C4lqNRiB.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
  let div;
  let if_block = (
    /*orders*/
    ctx[0] && create_if_block_1(ctx)
  );
  return {
    c() {
      div = element("div");
      if (if_block) if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "flex flex-col gap-4 p-4");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block) if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (
        /*orders*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block) if_block.d();
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
      if (get_svelte_dataset(p) !== "svelte-1fu9vkp") p.textContent = textContent;
      this.h();
    },
    h() {
      attr(p, "class", "text-red-600 p-4");
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
    /*orders*/
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
      if (dirty & /*activeOrder, orders, toggleOrder, Intl, Date*/
      19) {
        each_value = ensure_array_like(
          /*orders*/
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
function create_if_block_2(ctx) {
  let each_1_anchor;
  let each_value_1 = ensure_array_like(
    /*order*/
    ctx[6].products
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
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
      if (dirty & /*orders*/
      1) {
        each_value_1 = ensure_array_like(
          /*order*/
          ctx2[6].products
        );
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
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
function create_each_block_1(ctx) {
  let li;
  let img;
  let img_src_value;
  let img_alt_value;
  let t0;
  let h4;
  let t1_value = (
    /*product*/
    ctx[9].product + ""
  );
  let t1;
  let t2;
  let p0;
  let t3;
  let t4_value = (
    /*product*/
    ctx[9].size + ""
  );
  let t4;
  let t5;
  let p1;
  let t6;
  let t7_value = (
    /*product*/
    ctx[9].price + ""
  );
  let t7;
  let t8;
  return {
    c() {
      li = element("li");
      img = element("img");
      t0 = space();
      h4 = element("h4");
      t1 = text(t1_value);
      t2 = space();
      p0 = element("p");
      t3 = text("Size: ");
      t4 = text(t4_value);
      t5 = space();
      p1 = element("p");
      t6 = text("Price: $");
      t7 = text(t7_value);
      t8 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      img = claim_element(li_nodes, "IMG", { src: true, alt: true, class: true });
      t0 = claim_space(li_nodes);
      h4 = claim_element(li_nodes, "H4", { class: true });
      var h4_nodes = children(h4);
      t1 = claim_text(h4_nodes, t1_value);
      h4_nodes.forEach(detach);
      t2 = claim_space(li_nodes);
      p0 = claim_element(li_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "Size: ");
      t4 = claim_text(p0_nodes, t4_value);
      p0_nodes.forEach(detach);
      t5 = claim_space(li_nodes);
      p1 = claim_element(li_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "Price: $");
      t7 = claim_text(p1_nodes, t7_value);
      p1_nodes.forEach(detach);
      t8 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*product*/
      ctx[9].photo)) attr(img, "src", img_src_value);
      attr(img, "alt", img_alt_value = /*product*/
      ctx[9].product);
      attr(img, "class", "w-full h-40 object-cover rounded-lg mb-2");
      attr(h4, "class", "text-lg font-semibold");
      attr(p0, "class", "text-gray-600");
      attr(p1, "class", "text-gray-600");
      attr(li, "class", "bg-blue-100 rounded-lg p-4");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, img);
      append_hydration(li, t0);
      append_hydration(li, h4);
      append_hydration(h4, t1);
      append_hydration(li, t2);
      append_hydration(li, p0);
      append_hydration(p0, t3);
      append_hydration(p0, t4);
      append_hydration(li, t5);
      append_hydration(li, p1);
      append_hydration(p1, t6);
      append_hydration(p1, t7);
      append_hydration(li, t8);
    },
    p(ctx2, dirty) {
      if (dirty & /*orders*/
      1 && !src_url_equal(img.src, img_src_value = /*product*/
      ctx2[9].photo)) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*orders*/
      1 && img_alt_value !== (img_alt_value = /*product*/
      ctx2[9].product)) {
        attr(img, "alt", img_alt_value);
      }
      if (dirty & /*orders*/
      1 && t1_value !== (t1_value = /*product*/
      ctx2[9].product + "")) set_data(t1, t1_value);
      if (dirty & /*orders*/
      1 && t4_value !== (t4_value = /*product*/
      ctx2[9].size + "")) set_data(t4, t4_value);
      if (dirty & /*orders*/
      1 && t7_value !== (t7_value = /*product*/
      ctx2[9].price + "")) set_data(t7, t7_value);
    },
    d(detaching) {
      if (detaching) {
        detach(li);
      }
    }
  };
}
function create_each_block(ctx) {
  let div5;
  let div2;
  let div0;
  let h2;
  let t0;
  let t1_value = (
    /*order*/
    ctx[6].orderid + ""
  );
  let t1;
  let t2;
  let p0;
  let t3;
  let t4_value = new Intl.DateTimeFormat(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }
  ).format(new Date(
    /*order*/
    ctx[6].created_at
  )) + "";
  let t4;
  let t5;
  let p1;
  let t6;
  let t7_value = (
    /*order*/
    ctx[6].address + ""
  );
  let t7;
  let t8;
  let p2;
  let t9;
  let t10_value = (
    /*order*/
    ctx[6].userid + ""
  );
  let t10;
  let t11;
  let p3;
  let t12;
  let t13_value = (
    /*order*/
    ctx[6].phone + ""
  );
  let t13;
  let t14;
  let p4;
  let t15;
  let t16_value = (
    /*order*/
    ctx[6].name + ""
  );
  let t16;
  let t17;
  let div1;
  let svg;
  let path;
  let div1_class_value;
  let t18;
  let div4;
  let div3;
  let h3;
  let textContent = "Products:";
  let t20;
  let ul;
  let div4_class_value;
  let t21;
  let mounted;
  let dispose;
  function click_handler() {
    return (
      /*click_handler*/
      ctx[5](
        /*order*/
        ctx[6]
      )
    );
  }
  let if_block = (
    /*orders*/
    ctx[0] && create_if_block_2(ctx)
  );
  return {
    c() {
      div5 = element("div");
      div2 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t0 = text("Order ID: ");
      t1 = text(t1_value);
      t2 = space();
      p0 = element("p");
      t3 = text("Created at: ");
      t4 = text(t4_value);
      t5 = space();
      p1 = element("p");
      t6 = text("Address: ");
      t7 = text(t7_value);
      t8 = space();
      p2 = element("p");
      t9 = text("User ID: ");
      t10 = text(t10_value);
      t11 = space();
      p3 = element("p");
      t12 = text("Phone: ");
      t13 = text(t13_value);
      t14 = space();
      p4 = element("p");
      t15 = text("Name: ");
      t16 = text(t16_value);
      t17 = space();
      div1 = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      t18 = space();
      div4 = element("div");
      div3 = element("div");
      h3 = element("h3");
      h3.textContent = textContent;
      t20 = space();
      ul = element("ul");
      if (if_block) if_block.c();
      t21 = space();
      this.h();
    },
    l(nodes) {
      div5 = claim_element(nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div2 = claim_element(div5_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Order ID: ");
      t1 = claim_text(h2_nodes, t1_value);
      h2_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "Created at: ");
      t4 = claim_text(p0_nodes, t4_value);
      p0_nodes.forEach(detach);
      t5 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "Address: ");
      t7 = claim_text(p1_nodes, t7_value);
      p1_nodes.forEach(detach);
      t8 = claim_space(div0_nodes);
      p2 = claim_element(div0_nodes, "P", { class: true });
      var p2_nodes = children(p2);
      t9 = claim_text(p2_nodes, "User ID: ");
      t10 = claim_text(p2_nodes, t10_value);
      p2_nodes.forEach(detach);
      t11 = claim_space(div0_nodes);
      p3 = claim_element(div0_nodes, "P", { class: true });
      var p3_nodes = children(p3);
      t12 = claim_text(p3_nodes, "Phone: ");
      t13 = claim_text(p3_nodes, t13_value);
      p3_nodes.forEach(detach);
      t14 = claim_space(div0_nodes);
      p4 = claim_element(div0_nodes, "P", { class: true });
      var p4_nodes = children(p4);
      t15 = claim_text(p4_nodes, "Name: ");
      t16 = claim_text(p4_nodes, t16_value);
      p4_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t17 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      svg = claim_svg_element(div1_nodes, "svg", { xmlns: true, viewBox: true, class: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t18 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h3 = claim_element(div3_nodes, "H3", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h3) !== "svelte-1f3vjoj") h3.textContent = textContent;
      t20 = claim_space(div3_nodes);
      ul = claim_element(div3_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      if (if_block) if_block.l(ul_nodes);
      ul_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t21 = claim_space(div5_nodes);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "text-lg font-semibold mb-2");
      attr(p0, "class", "text-gray-600");
      attr(p1, "class", "text-gray-600");
      attr(p2, "class", "text-gray-600");
      attr(p3, "class", "text-gray-600");
      attr(p4, "class", "text-gray-600");
      attr(path, "d", "M7 10l5 5 5-5z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "class", "w-6 h-6");
      attr(div1, "class", div1_class_value = "arrow " + /*activeOrder*/
      (ctx[1] === /*order*/
      ctx[6].orderid ? "active" : "") + " svelte-caq7ac");
      attr(div2, "class", "px-6 py-4 flex justify-between items-center");
      attr(h3, "class", "text-lg font-semibold mb-2");
      attr(ul, "class", "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4");
      attr(div3, "class", "px-6 py-4 bg-blue-300");
      attr(div4, "class", div4_class_value = "order-details " + /*activeOrder*/
      (ctx[1] === /*order*/
      ctx[6].orderid ? "active" : "") + " svelte-caq7ac");
      attr(div5, "class", "bg-blue-400 rounded-lg");
    },
    m(target, anchor) {
      insert_hydration(target, div5, anchor);
      append_hydration(div5, div2);
      append_hydration(div2, div0);
      append_hydration(div0, h2);
      append_hydration(h2, t0);
      append_hydration(h2, t1);
      append_hydration(div0, t2);
      append_hydration(div0, p0);
      append_hydration(p0, t3);
      append_hydration(p0, t4);
      append_hydration(div0, t5);
      append_hydration(div0, p1);
      append_hydration(p1, t6);
      append_hydration(p1, t7);
      append_hydration(div0, t8);
      append_hydration(div0, p2);
      append_hydration(p2, t9);
      append_hydration(p2, t10);
      append_hydration(div0, t11);
      append_hydration(div0, p3);
      append_hydration(p3, t12);
      append_hydration(p3, t13);
      append_hydration(div0, t14);
      append_hydration(div0, p4);
      append_hydration(p4, t15);
      append_hydration(p4, t16);
      append_hydration(div2, t17);
      append_hydration(div2, div1);
      append_hydration(div1, svg);
      append_hydration(svg, path);
      append_hydration(div5, t18);
      append_hydration(div5, div4);
      append_hydration(div4, div3);
      append_hydration(div3, h3);
      append_hydration(div3, t20);
      append_hydration(div3, ul);
      if (if_block) if_block.m(ul, null);
      append_hydration(div5, t21);
      if (!mounted) {
        dispose = listen(div2, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*orders*/
      1 && t1_value !== (t1_value = /*order*/
      ctx[6].orderid + "")) set_data(t1, t1_value);
      if (dirty & /*orders*/
      1 && t4_value !== (t4_value = new Intl.DateTimeFormat(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true
        }
      ).format(new Date(
        /*order*/
        ctx[6].created_at
      )) + "")) set_data(t4, t4_value);
      if (dirty & /*orders*/
      1 && t7_value !== (t7_value = /*order*/
      ctx[6].address + "")) set_data(t7, t7_value);
      if (dirty & /*orders*/
      1 && t10_value !== (t10_value = /*order*/
      ctx[6].userid + "")) set_data(t10, t10_value);
      if (dirty & /*orders*/
      1 && t13_value !== (t13_value = /*order*/
      ctx[6].phone + "")) set_data(t13, t13_value);
      if (dirty & /*orders*/
      1 && t16_value !== (t16_value = /*order*/
      ctx[6].name + "")) set_data(t16, t16_value);
      if (dirty & /*activeOrder, orders*/
      3 && div1_class_value !== (div1_class_value = "arrow " + /*activeOrder*/
      (ctx[1] === /*order*/
      ctx[6].orderid ? "active" : "") + " svelte-caq7ac")) {
        attr(div1, "class", div1_class_value);
      }
      if (
        /*orders*/
        ctx[0]
      ) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block_2(ctx);
          if_block.c();
          if_block.m(ul, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & /*activeOrder, orders*/
      3 && div4_class_value !== (div4_class_value = "order-details " + /*activeOrder*/
      (ctx[1] === /*order*/
      ctx[6].orderid ? "active" : "") + " svelte-caq7ac")) {
        attr(div4, "class", div4_class_value);
      }
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
function create_fragment(ctx) {
  let div1;
  let div0;
  let textContent = "Orders";
  let t1;
  function select_block_type(ctx2, dirty) {
    if (!/*$user*/
    ctx2[2]) return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      div0.textContent = textContent;
      t1 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div0) !== "svelte-zjfy3z") div0.textContent = textContent;
      t1 = claim_space(div1_nodes);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "text-2xl text-start p-4");
      attr(div1, "class", "px-2 bg-blue-100 md:px-20 min-h-screen");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div1, t1);
      if_block.m(div1, null);
    },
    p(ctx2, [dirty]) {
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
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
      if_block.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $user;
  let user = utils.user();
  component_subscribe($$self, user, (value) => $$invalidate(2, $user = value));
  let orders = [];
  onMount(async () => {
    const { data, error } = await utils.orders.getOrders();
    if (data) {
      $$invalidate(0, orders = data);
    }
    if (error) {
      console.error(error);
    }
  });
  let activeOrder = null;
  function toggleOrder(orderid) {
    $$invalidate(1, activeOrder = activeOrder === orderid ? null : orderid);
  }
  const click_handler = (order) => toggleOrder(order.orderid);
  return [orders, activeOrder, $user, user, toggleOrder, click_handler];
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

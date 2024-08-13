import { s as safe_not_equal, n as noop, c as component_subscribe, a as set_store_value, r as run_all } from "../chunks/scheduler.FLmlRqdj.js";
import { S as SvelteComponent, i as init, e as element, s as space, c as claim_element, a as children, d as detach, f as claim_space, k as attr, g as insert_hydration, h as append_hydration, l as get_svelte_dataset, m as listen, n as set_input_value } from "../chunks/index.qEUg-WN-.js";
import { u as utils, a as userSession } from "../chunks/utils.D7pUn0qA.js";
function create_else_block(ctx) {
  let div2;
  let h2;
  let textContent = "Login";
  let t1;
  let form;
  let div0;
  let label0;
  let textContent_1 = "Username";
  let t3;
  let input0;
  let t4;
  let div1;
  let label1;
  let textContent_2 = "Password";
  let t6;
  let input1;
  let t7;
  let t8;
  let button;
  let textContent_3 = "Sign In";
  let mounted;
  let dispose;
  let if_block = (
    /*error*/
    ctx[2] && create_if_block_2()
  );
  return {
    c() {
      div2 = element("div");
      h2 = element("h2");
      h2.textContent = textContent;
      t1 = space();
      form = element("form");
      div0 = element("div");
      label0 = element("label");
      label0.textContent = textContent_1;
      t3 = space();
      input0 = element("input");
      t4 = space();
      div1 = element("div");
      label1 = element("label");
      label1.textContent = textContent_2;
      t6 = space();
      input1 = element("input");
      t7 = space();
      if (if_block) if_block.c();
      t8 = space();
      button = element("button");
      button.textContent = textContent_3;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", {});
      var div2_nodes = children(div2);
      h2 = claim_element(div2_nodes, "H2", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h2) !== "svelte-2yocfo") h2.textContent = textContent;
      t1 = claim_space(div2_nodes);
      form = claim_element(div2_nodes, "FORM", {});
      var form_nodes = children(form);
      div0 = claim_element(form_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      label0 = claim_element(div0_nodes, "LABEL", {
        class: true,
        for: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label0) !== "svelte-1u6sxgb") label0.textContent = textContent_1;
      t3 = claim_space(div0_nodes);
      input0 = claim_element(div0_nodes, "INPUT", {
        class: true,
        type: true,
        placeholder: true
      });
      div0_nodes.forEach(detach);
      t4 = claim_space(form_nodes);
      div1 = claim_element(form_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      label1 = claim_element(div1_nodes, "LABEL", {
        class: true,
        for: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(label1) !== "svelte-1420l2t") label1.textContent = textContent_2;
      t6 = claim_space(div1_nodes);
      input1 = claim_element(div1_nodes, "INPUT", {
        class: true,
        type: true,
        placeholder: true
      });
      div1_nodes.forEach(detach);
      t7 = claim_space(form_nodes);
      if (if_block) if_block.l(form_nodes);
      t8 = claim_space(form_nodes);
      button = claim_element(form_nodes, "BUTTON", {
        class: true,
        type: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(button) !== "svelte-bfnujt") button.textContent = textContent_3;
      form_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "mb-6 text-3xl text-green-50");
      attr(label0, "class", "block mb-2 text-sm font-normal text-green-50");
      attr(label0, "for", "email");
      attr(input0, "class", "px-3 py-2 w-full leading-tight rounded border appearance-none focus:outline-none focus:shadow-outline");
      attr(input0, "type", "email");
      attr(input0, "placeholder", "user@email.com");
      attr(div0, "class", "mb-4");
      attr(label1, "class", "block mb-2 text-sm font-normal text-green-50");
      attr(label1, "for", "password");
      attr(input1, "class", "px-3 py-2 w-full leading-tight border appearance-none focus:outline-none focus:shadow-outline");
      attr(input1, "type", "password");
      attr(input1, "placeholder", "password");
      attr(div1, "class", "mb-4");
      attr(button, "class", "px-4 py-2 mt-4 font-bold bg-green-500 rounded text-green-950 hover:bg-blue-600 active:bg-green-700 focus:outline-none focus:shadow-outline");
      attr(button, "type", "button");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, h2);
      append_hydration(div2, t1);
      append_hydration(div2, form);
      append_hydration(form, div0);
      append_hydration(div0, label0);
      append_hydration(div0, t3);
      append_hydration(div0, input0);
      set_input_value(
        input0,
        /*email*/
        ctx[0]
      );
      append_hydration(form, t4);
      append_hydration(form, div1);
      append_hydration(div1, label1);
      append_hydration(div1, t6);
      append_hydration(div1, input1);
      set_input_value(
        input1,
        /*password*/
        ctx[1]
      );
      append_hydration(form, t7);
      if (if_block) if_block.m(form, null);
      append_hydration(form, t8);
      append_hydration(form, button);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[6]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[7]
          ),
          listen(
            button,
            "click",
            /*click_handler*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*email*/
      1 && input0.value !== /*email*/
      ctx2[0]) {
        set_input_value(
          input0,
          /*email*/
          ctx2[0]
        );
      }
      if (dirty & /*password*/
      2 && input1.value !== /*password*/
      ctx2[1]) {
        set_input_value(
          input1,
          /*password*/
          ctx2[1]
        );
      }
      if (
        /*error*/
        ctx2[2]
      ) {
        if (if_block) ;
        else {
          if_block = create_if_block_2();
          if_block.c();
          if_block.m(form, t8);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      if (if_block) if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let div;
  let textContent = `<h2 class="text-3xl text-green-50">You are logged in</h2> <h2 class="mt-4 text-xl text-green-50"><a href="/products">Shop <span class="underline">Products</span>?</a></h2>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-11stilo") div.innerHTML = textContent;
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let textContent = "Sign in failed. Try again";
  return {
    c() {
      div = element("div");
      div.textContent = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-j65y7g") div.textContent = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "text-red-300");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_if_block(ctx) {
  let div;
  let button;
  let textContent = "LogOut";
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      button = element("button");
      button.textContent = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-17qqjbo") button.textContent = textContent;
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "text-green-50");
      attr(div, "class", "mt-4 p-2 bg-red-700");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_1*/
          ctx[9]
        );
        mounted = true;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let div3;
  let div2;
  let div1;
  let div0;
  let t;
  function select_block_type(ctx2, dirty) {
    if (
      /*loggedInSuccessfully*/
      ctx2[3]
    ) return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type(ctx);
  let if_block1 = (
    /*loggedInSuccessfully*/
    ctx[3] && create_if_block(ctx)
  );
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div1_nodes);
      if (if_block1) if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "p-6 w-full max-w-md bg-green-800 shadow-md");
      attr(div1, "class", "flex flex-col justify-center items-center min-h-screen");
      attr(div2, "class", "container mx-auto");
      attr(div3, "class", "px-2 bg-blue-100 md:px-20");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      if_block0.m(div0, null);
      append_hydration(div1, t);
      if (if_block1) if_block1.m(div1, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if_block0.d(1);
        if_block0 = current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }
      if (
        /*loggedInSuccessfully*/
        ctx2[3]
      ) {
        if (if_block1) ;
        else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div3);
      }
      if_block0.d();
      if (if_block1) if_block1.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let loggedInSuccessfully;
  let $userSession;
  component_subscribe($$self, userSession, ($$value) => $$invalidate(5, $userSession = $$value));
  let email;
  let password;
  let error;
  async function login(email2, password2) {
    const { data, error: loginError } = await utils.signInWithPassword(email2, password2);
    set_store_value(userSession, $userSession = data.session, $userSession);
    $$invalidate(2, error = loginError);
  }
  function input0_input_handler() {
    email = this.value;
    $$invalidate(0, email);
  }
  function input1_input_handler() {
    password = this.value;
    $$invalidate(1, password);
  }
  const click_handler = () => login(email, password);
  const click_handler_1 = () => {
    utils.signOut();
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$userSession*/
    32) {
      $$invalidate(3, loggedInSuccessfully = $userSession);
    }
  };
  return [
    email,
    password,
    error,
    loggedInSuccessfully,
    login,
    $userSession,
    input0_input_handler,
    input1_input_handler,
    click_handler,
    click_handler_1
  ];
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

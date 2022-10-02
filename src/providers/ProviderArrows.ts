import { Directive, DirectiveBinding, VNode } from "vue-demi";
import { useEventListener } from "@vueuse/core";
import { invocateFunc } from "../utils";

export const ProviderArrows = (): Directive => {
  const register = (
    el: HTMLElement,
    binding: DirectiveBinding,
    node: VNode
  ) => {
    useEventListener(el, "keydown", (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") invocateFunc(node.props?.left);
      if (e.key === "ArrowRight") invocateFunc(node.props?.right);
      if (e.key === "ArrowUp") invocateFunc(node.props?.up);
      if (e.key === "ArrowDown") invocateFunc(node.props?.down);
    });
  };

  return {
    created: register,
    // @ts-expect-error
    bind: register,
  };
};

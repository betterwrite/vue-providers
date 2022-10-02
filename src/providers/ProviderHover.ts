import { Directive, DirectiveBinding, VNode } from "vue-demi";
import { useEventListener } from "@vueuse/core";
import { invocateFunc } from "../utils";

export const ProviderHover = (): Directive => {
  const register = (el: Element, binding: DirectiveBinding, node: VNode) => {
    useEventListener(el, "mouseenter", () => {
      invocateFunc(node.props?.enter);
    });
    useEventListener(el, "mouseleave", () => {
      invocateFunc(node.props?.leave);
    });
  };

  return {
    created: register,
    // @ts-expect-error
    bind: register,
  };
};

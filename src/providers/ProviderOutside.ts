import { Directive, DirectiveBinding, VNode } from "vue-demi";
import { onClickOutside } from "@vueuse/core";
import { invocateFunc } from "../utils";

export const ProviderOutside = (): Directive => {
  const register = (
    el: HTMLElement,
    binding: DirectiveBinding,
    node: VNode
  ) => {
    onClickOutside(el, () => invocateFunc(node.props?.outside));
  };

  return {
    created: register,
    // @ts-expect-error
    bind: register,
  };
};

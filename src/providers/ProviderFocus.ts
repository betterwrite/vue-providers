import { watch, Directive, DirectiveBinding, VNode } from "vue-demi";
import { useFocus } from "@vueuse/core";
import { invocateFunc } from "../utils";

export const ProviderFocus = (): Directive => {
  const register = (
    el: HTMLElement,
    binding: DirectiveBinding,
    node: VNode
  ) => {
    const { focused } = useFocus(el);

    watch(focused, (v) => {
      invocateFunc(v ? node.props?.focused : node.props?.unfocused);
    });
  };

  return {
    created: register,
    // @ts-expect-error
    bind: register,
  };
};

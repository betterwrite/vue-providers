import { Directive, DirectiveBinding, VNode } from "vue-demi";
import { useEventListener } from "@vueuse/core";
import { invocateFunc } from "../utils";

export const ProviderClose = (): Directive => {
  const register = (
    el: HTMLElement,
    binding: DirectiveBinding,
    node: VNode
  ) => {
    useEventListener(
      "keydown",
      (e: KeyboardEvent) => {
        if (e.key === "Escape") invocateFunc(node.props?.esc);
      },
      { passive: true }
    );
  };

  return {
    created: register,
    // @ts-expect-error
    bind: register,
  };
};

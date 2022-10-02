import { watch, Directive, DirectiveBinding, VNode } from "vue-demi";
import { useMousePressed } from "@vueuse/core";
import { invocateFunc } from "../utils";

export const ProviderPressed = (): Directive => {
  const register = (
    el: HTMLElement,
    binding: DirectiveBinding,
    node: VNode
  ) => {
    const { pressed } = useMousePressed({ target: el });

    watch(pressed, (v) => {
      invocateFunc(v ? node.props?.on : node.props?.off);
    });
  };

  return {
    created: register,
    // @ts-expect-error
    bind: register,
  };
};

import { App, Plugin } from "vue-demi";
import { ProviderArrows } from "./providers/ProviderArrows";
import { ProviderClose } from "./providers/ProviderClose";
import { ProviderFocus } from "./providers/ProviderFocus";
import { ProviderHover } from "./providers/ProviderHover";
import { ProviderOutside } from "./providers/ProviderOutside";
import { ProviderPressed } from "./providers/ProviderPressed";

export interface PluginOptions {}

export const ProviderPlugin: Plugin = {
  install: (app: App, options?: PluginOptions) => {
    app.directive("provider-hover", ProviderHover());
    app.directive("provider-focus", ProviderFocus());
    app.directive("provider-arrows", ProviderArrows());
    app.directive("provider-close", ProviderClose());
    app.directive("provider-outside", ProviderOutside());
    app.directive("provider-pressed", ProviderPressed());
  },
};

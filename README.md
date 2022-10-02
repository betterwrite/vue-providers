# Vue Providers

A simple collection of general-purpose directives for Vue 2/3. Powered by [VueUse](https://vueuse.org/)

<img src="https://img.shields.io/npm/v/vue-directive-providers?label=&style=for-the-badge" />

## Install

`yarn add vue-directive-providers`

## Use

in `src/main.(js|ts)`

```js
import { createApp } from "vue";
import { ProviderPlugin } from "vue-directive-providers";
import App from "./App.vue";

const app = createApp(App);
//...
app.use(ProviderPlugin);
//...
app.mount("#app");
```

## Directives

- `v-provider-arrows`
- `v-provider-close`
- `v-provider-focus`
- `v-provider-hover`
- `v-provider-outside`
- `v-provider-pressed`

<br>

### v-provider-arrows

```html
<input
  v-provider-arrows
  :left="functionHere"
  :right="functionHere"
  :up="functionHere"
  :down="functionHere"
/>
```

### v-provider-close

```html
<div v-provider-close :esc="functionHere" />
```

### v-provider-focus

```html
<input v-provider-focus :focused="functionHere" :unfocused="functionHere" />
```

### v-provider-hover

```html
<div v-provider-hover :enter="functionHere" :leave="functionHere" />
```

### v-provider-outside

```html
<div v-provider-outside :outside="functionHere" />
```

### v-provider-pressed

```html
<div v-provider-pressed :on="functionHere" :off="functionHere" />
```

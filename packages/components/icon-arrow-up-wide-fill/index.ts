import type { App } from 'vue';
import _IconArrowUpWideFill from './icon-arrow-up-wide-fill.vue';

const IconArrowUpWideFill = Object.assign(_IconArrowUpWideFill, {
  install: (app: App) => {
    app.component(_IconArrowUpWideFill.name, _IconArrowUpWideFill);
  }
});

export default IconArrowUpWideFill;
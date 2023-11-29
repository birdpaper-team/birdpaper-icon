import type { App } from 'vue';
import _IconOrderPlayFill from './icon-order-play-fill.vue';

const IconOrderPlayFill = Object.assign(_IconOrderPlayFill, {
  install: (app: App) => {
    app.component(_IconOrderPlayFill.name, _IconOrderPlayFill);
  }
});

export default IconOrderPlayFill;
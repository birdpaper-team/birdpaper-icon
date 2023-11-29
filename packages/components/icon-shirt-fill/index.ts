import type { App } from 'vue';
import _IconShirtFill from './icon-shirt-fill.vue';

const IconShirtFill = Object.assign(_IconShirtFill, {
  install: (app: App) => {
    app.component(_IconShirtFill.name, _IconShirtFill);
  }
});

export default IconShirtFill;
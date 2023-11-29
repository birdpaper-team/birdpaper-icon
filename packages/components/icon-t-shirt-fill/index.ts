import type { App } from 'vue';
import _IconTShirtFill from './icon-t-shirt-fill.vue';

const IconTShirtFill = Object.assign(_IconTShirtFill, {
  install: (app: App) => {
    app.component(_IconTShirtFill.name, _IconTShirtFill);
  }
});

export default IconTShirtFill;
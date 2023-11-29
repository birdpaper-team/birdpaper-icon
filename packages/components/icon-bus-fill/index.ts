import type { App } from 'vue';
import _IconBusFill from './icon-bus-fill.vue';

const IconBusFill = Object.assign(_IconBusFill, {
  install: (app: App) => {
    app.component(_IconBusFill.name, _IconBusFill);
  }
});

export default IconBusFill;
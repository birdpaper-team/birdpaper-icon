import type { App } from 'vue';
import _IconIcecream from './icon-icecream.vue';

const IconIcecream = Object.assign(_IconIcecream, {
  install: (app: App) => {
    app.component(_IconIcecream.name, _IconIcecream);
  }
});

export default IconIcecream;
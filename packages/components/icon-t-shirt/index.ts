import type { App } from 'vue';
import _IconTShirt from './icon-t-shirt.vue';

const IconTShirt = Object.assign(_IconTShirt, {
  install: (app: App) => {
    app.component(_IconTShirt.name, _IconTShirt);
  }
});

export default IconTShirt;
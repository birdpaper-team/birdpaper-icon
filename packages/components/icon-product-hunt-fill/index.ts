import type { App } from 'vue';
import _IconProductHuntFill from './icon-product-hunt-fill.vue';

const IconProductHuntFill = Object.assign(_IconProductHuntFill, {
  install: (app: App) => {
    app.component(_IconProductHuntFill.name, _IconProductHuntFill);
  }
});

export default IconProductHuntFill;
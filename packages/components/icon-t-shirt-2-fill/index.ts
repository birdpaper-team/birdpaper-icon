import type { App } from 'vue';
import _IconTShirt2Fill from './icon-t-shirt-2-fill.vue';

const IconTShirt2Fill = Object.assign(_IconTShirt2Fill, {
  install: (app: App) => {
    app.component(_IconTShirt2Fill.name, _IconTShirt2Fill);
  }
});

export default IconTShirt2Fill;
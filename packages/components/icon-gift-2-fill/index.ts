import type { App } from 'vue';
import _IconGift2Fill from './icon-gift-2-fill.vue';

const IconGift2Fill = Object.assign(_IconGift2Fill, {
  install: (app: App) => {
    app.component(_IconGift2Fill.name, _IconGift2Fill);
  }
});

export default IconGift2Fill;
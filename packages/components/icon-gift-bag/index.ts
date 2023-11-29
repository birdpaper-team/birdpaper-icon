import type { App } from 'vue';
import _IconGiftBag from './icon-gift-bag.vue';

const IconGiftBag = Object.assign(_IconGiftBag, {
  install: (app: App) => {
    app.component(_IconGiftBag.name, _IconGiftBag);
  }
});

export default IconGiftBag;
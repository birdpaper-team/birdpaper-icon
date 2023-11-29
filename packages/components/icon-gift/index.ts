import type { App } from 'vue';
import _IconGift from './icon-gift.vue';

const IconGift = Object.assign(_IconGift, {
  install: (app: App) => {
    app.component(_IconGift.name, _IconGift);
  }
});

export default IconGift;
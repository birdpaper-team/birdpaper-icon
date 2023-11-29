import type { App } from 'vue';
import _IconGiftFill from './icon-gift-fill.vue';

const IconGiftFill = Object.assign(_IconGiftFill, {
  install: (app: App) => {
    app.component(_IconGiftFill.name, _IconGiftFill);
  }
});

export default IconGiftFill;
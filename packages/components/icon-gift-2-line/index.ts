import type { App } from 'vue';
import _IconGift2Line from './icon-gift-2-line.vue';

const IconGift2Line = Object.assign(_IconGift2Line, {
  install: (app: App) => {
    app.component(_IconGift2Line.name, _IconGift2Line);
  }
});

export default IconGift2Line;
import type { App } from 'vue';
import _IconMastercardFill from './icon-mastercard-fill.vue';

const IconMastercardFill = Object.assign(_IconMastercardFill, {
  install: (app: App) => {
    app.component(_IconMastercardFill.name, _IconMastercardFill);
  }
});

export default IconMastercardFill;
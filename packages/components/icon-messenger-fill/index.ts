import type { App } from 'vue';
import _IconMessengerFill from './icon-messenger-fill.vue';

const IconMessengerFill = Object.assign(_IconMessengerFill, {
  install: (app: App) => {
    app.component(_IconMessengerFill.name, _IconMessengerFill);
  }
});

export default IconMessengerFill;
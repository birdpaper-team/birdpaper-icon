import type { App } from 'vue';
import _IconTelegramFill from './icon-telegram-fill.vue';

const IconTelegramFill = Object.assign(_IconTelegramFill, {
  install: (app: App) => {
    app.component(_IconTelegramFill.name, _IconTelegramFill);
  }
});

export default IconTelegramFill;
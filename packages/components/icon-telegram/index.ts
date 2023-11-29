import type { App } from 'vue';
import _IconTelegram from './icon-telegram.vue';

const IconTelegram = Object.assign(_IconTelegram, {
  install: (app: App) => {
    app.component(_IconTelegram.name, _IconTelegram);
  }
});

export default IconTelegram;
import type { App } from 'vue';
import _IconTelegramLine from './icon-telegram-line.vue';

const IconTelegramLine = Object.assign(_IconTelegramLine, {
  install: (app: App) => {
    app.component(_IconTelegramLine.name, _IconTelegramLine);
  }
});

export default IconTelegramLine;
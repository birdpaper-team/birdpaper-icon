import type { App } from 'vue';
import _IconGiftLine from './icon-gift-line.vue';

const IconGiftLine = Object.assign(_IconGiftLine, {
  install: (app: App) => {
    app.component(_IconGiftLine.name, _IconGiftLine);
  }
});

export default IconGiftLine;
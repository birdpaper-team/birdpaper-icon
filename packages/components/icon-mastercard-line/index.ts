import type { App } from 'vue';
import _IconMastercardLine from './icon-mastercard-line.vue';

const IconMastercardLine = Object.assign(_IconMastercardLine, {
  install: (app: App) => {
    app.component(_IconMastercardLine.name, _IconMastercardLine);
  }
});

export default IconMastercardLine;
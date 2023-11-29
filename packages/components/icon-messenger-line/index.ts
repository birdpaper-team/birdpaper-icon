import type { App } from 'vue';
import _IconMessengerLine from './icon-messenger-line.vue';

const IconMessengerLine = Object.assign(_IconMessengerLine, {
  install: (app: App) => {
    app.component(_IconMessengerLine.name, _IconMessengerLine);
  }
});

export default IconMessengerLine;
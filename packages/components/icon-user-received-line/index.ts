import type { App } from 'vue';
import _IconUserReceivedLine from './icon-user-received-line.vue';

const IconUserReceivedLine = Object.assign(_IconUserReceivedLine, {
  install: (app: App) => {
    app.component(_IconUserReceivedLine.name, _IconUserReceivedLine);
  }
});

export default IconUserReceivedLine;
import type { App } from 'vue';
import _IconRfidLine from './icon-rfid-line.vue';

const IconRfidLine = Object.assign(_IconRfidLine, {
  install: (app: App) => {
    app.component(_IconRfidLine.name, _IconRfidLine);
  }
});

export default IconRfidLine;
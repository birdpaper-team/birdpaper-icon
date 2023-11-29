import type { App } from 'vue';
import _IconWindowsLine from './icon-windows-line.vue';

const IconWindowsLine = Object.assign(_IconWindowsLine, {
  install: (app: App) => {
    app.component(_IconWindowsLine.name, _IconWindowsLine);
  }
});

export default IconWindowsLine;
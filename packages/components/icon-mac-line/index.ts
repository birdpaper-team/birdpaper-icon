import type { App } from 'vue';
import _IconMacLine from './icon-mac-line.vue';

const IconMacLine = Object.assign(_IconMacLine, {
  install: (app: App) => {
    app.component(_IconMacLine.name, _IconMacLine);
  }
});

export default IconMacLine;
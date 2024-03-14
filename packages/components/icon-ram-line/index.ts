import type { App } from 'vue';
import _IconRamLine from './icon-ram-line.vue';

const IconRamLine = Object.assign(_IconRamLine, {
  install: (app: App) => {
    app.component(_IconRamLine.name, _IconRamLine);
  }
});

export default IconRamLine;
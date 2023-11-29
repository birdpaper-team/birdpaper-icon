import type { App } from 'vue';
import _IconComputerLine from './icon-computer-line.vue';

const IconComputerLine = Object.assign(_IconComputerLine, {
  install: (app: App) => {
    app.component(_IconComputerLine.name, _IconComputerLine);
  }
});

export default IconComputerLine;
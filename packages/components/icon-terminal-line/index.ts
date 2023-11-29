import type { App } from 'vue';
import _IconTerminalLine from './icon-terminal-line.vue';

const IconTerminalLine = Object.assign(_IconTerminalLine, {
  install: (app: App) => {
    app.component(_IconTerminalLine.name, _IconTerminalLine);
  }
});

export default IconTerminalLine;
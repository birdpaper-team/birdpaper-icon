import type { App } from 'vue';
import _IconTerminalWindowLine from './icon-terminal-window-line.vue';

const IconTerminalWindowLine = Object.assign(_IconTerminalWindowLine, {
  install: (app: App) => {
    app.component(_IconTerminalWindowLine.name, _IconTerminalWindowLine);
  }
});

export default IconTerminalWindowLine;
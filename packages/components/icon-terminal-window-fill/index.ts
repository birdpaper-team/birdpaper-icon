import type { App } from 'vue';
import _IconTerminalWindowFill from './icon-terminal-window-fill.vue';

const IconTerminalWindowFill = Object.assign(_IconTerminalWindowFill, {
  install: (app: App) => {
    app.component(_IconTerminalWindowFill.name, _IconTerminalWindowFill);
  }
});

export default IconTerminalWindowFill;
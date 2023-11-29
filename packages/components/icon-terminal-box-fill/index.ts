import type { App } from 'vue';
import _IconTerminalBoxFill from './icon-terminal-box-fill.vue';

const IconTerminalBoxFill = Object.assign(_IconTerminalBoxFill, {
  install: (app: App) => {
    app.component(_IconTerminalBoxFill.name, _IconTerminalBoxFill);
  }
});

export default IconTerminalBoxFill;
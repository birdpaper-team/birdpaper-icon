import type { App } from 'vue';
import _IconTerminalFill from './icon-terminal-fill.vue';

const IconTerminalFill = Object.assign(_IconTerminalFill, {
  install: (app: App) => {
    app.component(_IconTerminalFill.name, _IconTerminalFill);
  }
});

export default IconTerminalFill;
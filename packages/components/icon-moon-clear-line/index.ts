import type { App } from 'vue';
import _IconMoonClearLine from './icon-moon-clear-line.vue';

const IconMoonClearLine = Object.assign(_IconMoonClearLine, {
  install: (app: App) => {
    app.component(_IconMoonClearLine.name, _IconMoonClearLine);
  }
});

export default IconMoonClearLine;
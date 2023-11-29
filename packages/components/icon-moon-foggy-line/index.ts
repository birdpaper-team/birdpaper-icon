import type { App } from 'vue';
import _IconMoonFoggyLine from './icon-moon-foggy-line.vue';

const IconMoonFoggyLine = Object.assign(_IconMoonFoggyLine, {
  install: (app: App) => {
    app.component(_IconMoonFoggyLine.name, _IconMoonFoggyLine);
  }
});

export default IconMoonFoggyLine;
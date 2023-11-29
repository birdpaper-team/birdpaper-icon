import type { App } from 'vue';
import _IconSunFoggyLine from './icon-sun-foggy-line.vue';

const IconSunFoggyLine = Object.assign(_IconSunFoggyLine, {
  install: (app: App) => {
    app.component(_IconSunFoggyLine.name, _IconSunFoggyLine);
  }
});

export default IconSunFoggyLine;
import type { App } from 'vue';
import _IconFoggyLine from './icon-foggy-line.vue';

const IconFoggyLine = Object.assign(_IconFoggyLine, {
  install: (app: App) => {
    app.component(_IconFoggyLine.name, _IconFoggyLine);
  }
});

export default IconFoggyLine;
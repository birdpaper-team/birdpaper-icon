import type { App } from 'vue';
import _IconGlobalLine from './icon-global-line.vue';

const IconGlobalLine = Object.assign(_IconGlobalLine, {
  install: (app: App) => {
    app.component(_IconGlobalLine.name, _IconGlobalLine);
  }
});

export default IconGlobalLine;
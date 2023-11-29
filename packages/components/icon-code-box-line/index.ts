import type { App } from 'vue';
import _IconCodeBoxLine from './icon-code-box-line.vue';

const IconCodeBoxLine = Object.assign(_IconCodeBoxLine, {
  install: (app: App) => {
    app.component(_IconCodeBoxLine.name, _IconCodeBoxLine);
  }
});

export default IconCodeBoxLine;
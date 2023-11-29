import type { App } from 'vue';
import _IconMvLine from './icon-mv-line.vue';

const IconMvLine = Object.assign(_IconMvLine, {
  install: (app: App) => {
    app.component(_IconMvLine.name, _IconMvLine);
  }
});

export default IconMvLine;
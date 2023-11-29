import type { App } from 'vue';
import _IconDividingLine from './icon-dividing-line.vue';

const IconDividingLine = Object.assign(_IconDividingLine, {
  install: (app: App) => {
    app.component(_IconDividingLine.name, _IconDividingLine);
  }
});

export default IconDividingLine;
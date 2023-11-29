import type { App } from 'vue';
import _IconPagesLine from './icon-pages-line.vue';

const IconPagesLine = Object.assign(_IconPagesLine, {
  install: (app: App) => {
    app.component(_IconPagesLine.name, _IconPagesLine);
  }
});

export default IconPagesLine;
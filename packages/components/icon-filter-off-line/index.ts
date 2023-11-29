import type { App } from 'vue';
import _IconFilterOffLine from './icon-filter-off-line.vue';

const IconFilterOffLine = Object.assign(_IconFilterOffLine, {
  install: (app: App) => {
    app.component(_IconFilterOffLine.name, _IconFilterOffLine);
  }
});

export default IconFilterOffLine;
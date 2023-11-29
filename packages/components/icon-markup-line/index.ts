import type { App } from 'vue';
import _IconMarkupLine from './icon-markup-line.vue';

const IconMarkupLine = Object.assign(_IconMarkupLine, {
  install: (app: App) => {
    app.component(_IconMarkupLine.name, _IconMarkupLine);
  }
});

export default IconMarkupLine;
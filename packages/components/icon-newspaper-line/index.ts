import type { App } from 'vue';
import _IconNewspaperLine from './icon-newspaper-line.vue';

const IconNewspaperLine = Object.assign(_IconNewspaperLine, {
  install: (app: App) => {
    app.component(_IconNewspaperLine.name, _IconNewspaperLine);
  }
});

export default IconNewspaperLine;
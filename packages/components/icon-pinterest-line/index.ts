import type { App } from 'vue';
import _IconPinterestLine from './icon-pinterest-line.vue';

const IconPinterestLine = Object.assign(_IconPinterestLine, {
  install: (app: App) => {
    app.component(_IconPinterestLine.name, _IconPinterestLine);
  }
});

export default IconPinterestLine;
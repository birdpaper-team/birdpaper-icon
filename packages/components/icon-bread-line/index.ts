import type { App } from 'vue';
import _IconBreadLine from './icon-bread-line.vue';

const IconBreadLine = Object.assign(_IconBreadLine, {
  install: (app: App) => {
    app.component(_IconBreadLine.name, _IconBreadLine);
  }
});

export default IconBreadLine;
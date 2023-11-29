import type { App } from 'vue';
import _IconPenNibLine from './icon-pen-nib-line.vue';

const IconPenNibLine = Object.assign(_IconPenNibLine, {
  install: (app: App) => {
    app.component(_IconPenNibLine.name, _IconPenNibLine);
  }
});

export default IconPenNibLine;
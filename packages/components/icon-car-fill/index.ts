import type { App } from 'vue';
import _IconCarFill from './icon-car-fill.vue';

const IconCarFill = Object.assign(_IconCarFill, {
  install: (app: App) => {
    app.component(_IconCarFill.name, _IconCarFill);
  }
});

export default IconCarFill;
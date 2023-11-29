import type { App } from 'vue';
import _IconPencilFill from './icon-pencil-fill.vue';

const IconPencilFill = Object.assign(_IconPencilFill, {
  install: (app: App) => {
    app.component(_IconPencilFill.name, _IconPencilFill);
  }
});

export default IconPencilFill;
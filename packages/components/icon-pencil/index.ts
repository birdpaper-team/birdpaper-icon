import type { App } from 'vue';
import _IconPencil from './icon-pencil.vue';

const IconPencil = Object.assign(_IconPencil, {
  install: (app: App) => {
    app.component(_IconPencil.name, _IconPencil);
  }
});

export default IconPencil;
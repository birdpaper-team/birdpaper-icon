import type { App } from 'vue';
import _IconFileHiding from './icon-file-hiding.vue';

const IconFileHiding = Object.assign(_IconFileHiding, {
  install: (app: App) => {
    app.component(_IconFileHiding.name, _IconFileHiding);
  }
});

export default IconFileHiding;
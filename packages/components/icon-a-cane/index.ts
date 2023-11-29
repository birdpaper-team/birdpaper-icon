import type { App } from 'vue';
import _IconACane from './icon-a-cane.vue';

const IconACane = Object.assign(_IconACane, {
  install: (app: App) => {
    app.component(_IconACane.name, _IconACane);
  }
});

export default IconACane;
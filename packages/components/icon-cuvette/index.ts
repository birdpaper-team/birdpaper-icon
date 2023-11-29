import type { App } from 'vue';
import _IconCuvette from './icon-cuvette.vue';

const IconCuvette = Object.assign(_IconCuvette, {
  install: (app: App) => {
    app.component(_IconCuvette.name, _IconCuvette);
  }
});

export default IconCuvette;
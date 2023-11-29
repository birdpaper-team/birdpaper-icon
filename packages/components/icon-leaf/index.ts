import type { App } from 'vue';
import _IconLeaf from './icon-leaf.vue';

const IconLeaf = Object.assign(_IconLeaf, {
  install: (app: App) => {
    app.component(_IconLeaf.name, _IconLeaf);
  }
});

export default IconLeaf;
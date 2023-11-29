import type { App } from 'vue';
import _IconTree from './icon-tree.vue';

const IconTree = Object.assign(_IconTree, {
  install: (app: App) => {
    app.component(_IconTree.name, _IconTree);
  }
});

export default IconTree;
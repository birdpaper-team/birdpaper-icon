import type { App } from 'vue';
import _IconNodeTree from './icon-node-tree.vue';

const IconNodeTree = Object.assign(_IconNodeTree, {
  install: (app: App) => {
    app.component(_IconNodeTree.name, _IconNodeTree);
  }
});

export default IconNodeTree;
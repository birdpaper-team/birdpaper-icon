import type { App } from 'vue';
import _IconCoconutTree from './icon-coconut-tree.vue';

const IconCoconutTree = Object.assign(_IconCoconutTree, {
  install: (app: App) => {
    app.component(_IconCoconutTree.name, _IconCoconutTree);
  }
});

export default IconCoconutTree;
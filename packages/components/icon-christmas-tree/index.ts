import type { App } from 'vue';
import _IconChristmasTree from './icon-christmas-tree.vue';

const IconChristmasTree = Object.assign(_IconChristmasTree, {
  install: (app: App) => {
    app.component(_IconChristmasTree.name, _IconChristmasTree);
  }
});

export default IconChristmasTree;
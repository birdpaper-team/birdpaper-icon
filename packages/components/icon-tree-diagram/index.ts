import type { App } from 'vue';
import _IconTreeDiagram from './icon-tree-diagram.vue';

const IconTreeDiagram = Object.assign(_IconTreeDiagram, {
  install: (app: App) => {
    app.component(_IconTreeDiagram.name, _IconTreeDiagram);
  }
});

export default IconTreeDiagram;
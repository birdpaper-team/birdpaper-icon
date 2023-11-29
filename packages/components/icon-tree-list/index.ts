import type { App } from 'vue';
import _IconTreeList from './icon-tree-list.vue';

const IconTreeList = Object.assign(_IconTreeList, {
  install: (app: App) => {
    app.component(_IconTreeList.name, _IconTreeList);
  }
});

export default IconTreeList;
import type { App } from 'vue';
import _IconViewGridList from './icon-view-grid-list.vue';

const IconViewGridList = Object.assign(_IconViewGridList, {
  install: (app: App) => {
    app.component(_IconViewGridList.name, _IconViewGridList);
  }
});

export default IconViewGridList;
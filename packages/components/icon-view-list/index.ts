import type { App } from 'vue';
import _IconViewList from './icon-view-list.vue';

const IconViewList = Object.assign(_IconViewList, {
  install: (app: App) => {
    app.component(_IconViewList.name, _IconViewList);
  }
});

export default IconViewList;
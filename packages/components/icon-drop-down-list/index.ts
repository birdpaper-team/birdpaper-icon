import type { App } from 'vue';
import _IconDropDownList from './icon-drop-down-list.vue';

const IconDropDownList = Object.assign(_IconDropDownList, {
  install: (app: App) => {
    app.component(_IconDropDownList.name, _IconDropDownList);
  }
});

export default IconDropDownList;
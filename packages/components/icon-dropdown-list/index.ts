import type { App } from 'vue';
import _IconDropdownList from './icon-dropdown-list.vue';

const IconDropdownList = Object.assign(_IconDropdownList, {
  install: (app: App) => {
    app.component(_IconDropdownList.name, _IconDropdownList);
  }
});

export default IconDropdownList;
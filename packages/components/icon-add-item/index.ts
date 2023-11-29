import type { App } from 'vue';
import _IconAddItem from './icon-add-item.vue';

const IconAddItem = Object.assign(_IconAddItem, {
  install: (app: App) => {
    app.component(_IconAddItem.name, _IconAddItem);
  }
});

export default IconAddItem;
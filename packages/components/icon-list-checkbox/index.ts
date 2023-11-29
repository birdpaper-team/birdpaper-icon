import type { App } from 'vue';
import _IconListCheckbox from './icon-list-checkbox.vue';

const IconListCheckbox = Object.assign(_IconListCheckbox, {
  install: (app: App) => {
    app.component(_IconListCheckbox.name, _IconListCheckbox);
  }
});

export default IconListCheckbox;
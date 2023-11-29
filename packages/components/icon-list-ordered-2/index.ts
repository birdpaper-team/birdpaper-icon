import type { App } from 'vue';
import _IconListOrdered2 from './icon-list-ordered-2.vue';

const IconListOrdered2 = Object.assign(_IconListOrdered2, {
  install: (app: App) => {
    app.component(_IconListOrdered2.name, _IconListOrdered2);
  }
});

export default IconListOrdered2;
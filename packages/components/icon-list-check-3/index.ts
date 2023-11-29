import type { App } from 'vue';
import _IconListCheck3 from './icon-list-check-3.vue';

const IconListCheck3 = Object.assign(_IconListCheck3, {
  install: (app: App) => {
    app.component(_IconListCheck3.name, _IconListCheck3);
  }
});

export default IconListCheck3;
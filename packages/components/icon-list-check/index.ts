import type { App } from 'vue';
import _IconListCheck from './icon-list-check.vue';

const IconListCheck = Object.assign(_IconListCheck, {
  install: (app: App) => {
    app.component(_IconListCheck.name, _IconListCheck);
  }
});

export default IconListCheck;
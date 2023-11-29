import type { App } from 'vue';
import _IconModify from './icon-modify.vue';

const IconModify = Object.assign(_IconModify, {
  install: (app: App) => {
    app.component(_IconModify.name, _IconModify);
  }
});

export default IconModify;
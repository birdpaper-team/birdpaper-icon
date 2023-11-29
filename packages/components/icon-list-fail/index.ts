import type { App } from 'vue';
import _IconListFail from './icon-list-fail.vue';

const IconListFail = Object.assign(_IconListFail, {
  install: (app: App) => {
    app.component(_IconListFail.name, _IconListFail);
  }
});

export default IconListFail;
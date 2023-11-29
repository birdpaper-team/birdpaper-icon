import type { App } from 'vue';
import _IconListSuccess from './icon-list-success.vue';

const IconListSuccess = Object.assign(_IconListSuccess, {
  install: (app: App) => {
    app.component(_IconListSuccess.name, _IconListSuccess);
  }
});

export default IconListSuccess;
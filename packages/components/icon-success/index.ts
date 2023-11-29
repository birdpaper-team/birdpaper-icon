import type { App } from 'vue';
import _IconSuccess from './icon-success.vue';

const IconSuccess = Object.assign(_IconSuccess, {
  install: (app: App) => {
    app.component(_IconSuccess.name, _IconSuccess);
  }
});

export default IconSuccess;
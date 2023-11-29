import type { App } from 'vue';
import _IconFileSuccess from './icon-file-success.vue';

const IconFileSuccess = Object.assign(_IconFileSuccess, {
  install: (app: App) => {
    app.component(_IconFileSuccess.name, _IconFileSuccess);
  }
});

export default IconFileSuccess;
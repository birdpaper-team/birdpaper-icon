import type { App } from 'vue';
import _IconMessageSuccess from './icon-message-success.vue';

const IconMessageSuccess = Object.assign(_IconMessageSuccess, {
  install: (app: App) => {
    app.component(_IconMessageSuccess.name, _IconMessageSuccess);
  }
});

export default IconMessageSuccess;
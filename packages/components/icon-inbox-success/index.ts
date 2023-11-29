import type { App } from 'vue';
import _IconInboxSuccess from './icon-inbox-success.vue';

const IconInboxSuccess = Object.assign(_IconInboxSuccess, {
  install: (app: App) => {
    app.component(_IconInboxSuccess.name, _IconInboxSuccess);
  }
});

export default IconInboxSuccess;
import type { App } from 'vue';
import _IconInboxSuccessR from './icon-inbox-success-r.vue';

const IconInboxSuccessR = Object.assign(_IconInboxSuccessR, {
  install: (app: App) => {
    app.component(_IconInboxSuccessR.name, _IconInboxSuccessR);
  }
});

export default IconInboxSuccessR;
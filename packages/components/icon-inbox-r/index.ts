import type { App } from 'vue';
import _IconInboxR from './icon-inbox-r.vue';

const IconInboxR = Object.assign(_IconInboxR, {
  install: (app: App) => {
    app.component(_IconInboxR.name, _IconInboxR);
  }
});

export default IconInboxR;
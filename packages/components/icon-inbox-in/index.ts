import type { App } from 'vue';
import _IconInboxIn from './icon-inbox-in.vue';

const IconInboxIn = Object.assign(_IconInboxIn, {
  install: (app: App) => {
    app.component(_IconInboxIn.name, _IconInboxIn);
  }
});

export default IconInboxIn;
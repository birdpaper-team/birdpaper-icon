import type { App } from 'vue';
import _IconInboxOut from './icon-inbox-out.vue';

const IconInboxOut = Object.assign(_IconInboxOut, {
  install: (app: App) => {
    app.component(_IconInboxOut.name, _IconInboxOut);
  }
});

export default IconInboxOut;
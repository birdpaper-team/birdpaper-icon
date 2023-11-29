import type { App } from 'vue';
import _IconInbox from './icon-inbox.vue';

const IconInbox = Object.assign(_IconInbox, {
  install: (app: App) => {
    app.component(_IconInbox.name, _IconInbox);
  }
});

export default IconInbox;
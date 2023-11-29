import type { App } from 'vue';
import _IconInboxUnarchiveFill from './icon-inbox-unarchive-fill.vue';

const IconInboxUnarchiveFill = Object.assign(_IconInboxUnarchiveFill, {
  install: (app: App) => {
    app.component(_IconInboxUnarchiveFill.name, _IconInboxUnarchiveFill);
  }
});

export default IconInboxUnarchiveFill;
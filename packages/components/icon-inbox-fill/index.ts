import type { App } from 'vue';
import _IconInboxFill from './icon-inbox-fill.vue';

const IconInboxFill = Object.assign(_IconInboxFill, {
  install: (app: App) => {
    app.component(_IconInboxFill.name, _IconInboxFill);
  }
});

export default IconInboxFill;
import type { App } from 'vue';
import _IconInboxArchiveFill from './icon-inbox-archive-fill.vue';

const IconInboxArchiveFill = Object.assign(_IconInboxArchiveFill, {
  install: (app: App) => {
    app.component(_IconInboxArchiveFill.name, _IconInboxArchiveFill);
  }
});

export default IconInboxArchiveFill;
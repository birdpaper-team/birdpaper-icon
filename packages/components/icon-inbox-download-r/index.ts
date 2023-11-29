import type { App } from 'vue';
import _IconInboxDownloadR from './icon-inbox-download-r.vue';

const IconInboxDownloadR = Object.assign(_IconInboxDownloadR, {
  install: (app: App) => {
    app.component(_IconInboxDownloadR.name, _IconInboxDownloadR);
  }
});

export default IconInboxDownloadR;
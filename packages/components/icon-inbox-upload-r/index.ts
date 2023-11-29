import type { App } from 'vue';
import _IconInboxUploadR from './icon-inbox-upload-r.vue';

const IconInboxUploadR = Object.assign(_IconInboxUploadR, {
  install: (app: App) => {
    app.component(_IconInboxUploadR.name, _IconInboxUploadR);
  }
});

export default IconInboxUploadR;
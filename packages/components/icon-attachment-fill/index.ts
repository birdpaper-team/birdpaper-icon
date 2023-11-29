import type { App } from 'vue';
import _IconAttachmentFill from './icon-attachment-fill.vue';

const IconAttachmentFill = Object.assign(_IconAttachmentFill, {
  install: (app: App) => {
    app.component(_IconAttachmentFill.name, _IconAttachmentFill);
  }
});

export default IconAttachmentFill;
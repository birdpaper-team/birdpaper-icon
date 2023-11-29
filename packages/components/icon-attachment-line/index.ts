import type { App } from 'vue';
import _IconAttachmentLine from './icon-attachment-line.vue';

const IconAttachmentLine = Object.assign(_IconAttachmentLine, {
  install: (app: App) => {
    app.component(_IconAttachmentLine.name, _IconAttachmentLine);
  }
});

export default IconAttachmentLine;
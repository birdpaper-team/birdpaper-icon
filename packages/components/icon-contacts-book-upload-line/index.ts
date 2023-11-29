import type { App } from 'vue';
import _IconContactsBookUploadLine from './icon-contacts-book-upload-line.vue';

const IconContactsBookUploadLine = Object.assign(_IconContactsBookUploadLine, {
  install: (app: App) => {
    app.component(_IconContactsBookUploadLine.name, _IconContactsBookUploadLine);
  }
});

export default IconContactsBookUploadLine;
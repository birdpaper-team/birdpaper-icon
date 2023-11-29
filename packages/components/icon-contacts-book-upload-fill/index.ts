import type { App } from 'vue';
import _IconContactsBookUploadFill from './icon-contacts-book-upload-fill.vue';

const IconContactsBookUploadFill = Object.assign(_IconContactsBookUploadFill, {
  install: (app: App) => {
    app.component(_IconContactsBookUploadFill.name, _IconContactsBookUploadFill);
  }
});

export default IconContactsBookUploadFill;
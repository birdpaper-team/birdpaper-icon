import type { App } from 'vue';
import _IconFileUploadLine from './icon-file-upload-line.vue';

const IconFileUploadLine = Object.assign(_IconFileUploadLine, {
  install: (app: App) => {
    app.component(_IconFileUploadLine.name, _IconFileUploadLine);
  }
});

export default IconFileUploadLine;
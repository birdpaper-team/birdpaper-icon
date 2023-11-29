import type { App } from 'vue';
import _IconUploadLine from './icon-upload-line.vue';

const IconUploadLine = Object.assign(_IconUploadLine, {
  install: (app: App) => {
    app.component(_IconUploadLine.name, _IconUploadLine);
  }
});

export default IconUploadLine;
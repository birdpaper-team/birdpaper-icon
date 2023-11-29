import type { App } from 'vue';
import _IconVideoUploadLine from './icon-video-upload-line.vue';

const IconVideoUploadLine = Object.assign(_IconVideoUploadLine, {
  install: (app: App) => {
    app.component(_IconVideoUploadLine.name, _IconVideoUploadLine);
  }
});

export default IconVideoUploadLine;
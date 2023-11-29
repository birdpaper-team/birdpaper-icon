import type { App } from 'vue';
import _IconUpload2Line from './icon-upload-2-line.vue';

const IconUpload2Line = Object.assign(_IconUpload2Line, {
  install: (app: App) => {
    app.component(_IconUpload2Line.name, _IconUpload2Line);
  }
});

export default IconUpload2Line;
import type { App } from 'vue';
import _IconUpload2Fill from './icon-upload-2-fill.vue';

const IconUpload2Fill = Object.assign(_IconUpload2Fill, {
  install: (app: App) => {
    app.component(_IconUpload2Fill.name, _IconUpload2Fill);
  }
});

export default IconUpload2Fill;
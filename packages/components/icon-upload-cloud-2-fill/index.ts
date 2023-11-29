import type { App } from 'vue';
import _IconUploadCloud2Fill from './icon-upload-cloud-2-fill.vue';

const IconUploadCloud2Fill = Object.assign(_IconUploadCloud2Fill, {
  install: (app: App) => {
    app.component(_IconUploadCloud2Fill.name, _IconUploadCloud2Fill);
  }
});

export default IconUploadCloud2Fill;
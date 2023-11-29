import type { App } from 'vue';
import _IconDownloadCloud2Fill from './icon-download-cloud-2-fill.vue';

const IconDownloadCloud2Fill = Object.assign(_IconDownloadCloud2Fill, {
  install: (app: App) => {
    app.component(_IconDownloadCloud2Fill.name, _IconDownloadCloud2Fill);
  }
});

export default IconDownloadCloud2Fill;
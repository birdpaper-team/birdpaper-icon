import type { App } from 'vue';
import _IconDownload2Fill from './icon-download-2-fill.vue';

const IconDownload2Fill = Object.assign(_IconDownload2Fill, {
  install: (app: App) => {
    app.component(_IconDownload2Fill.name, _IconDownload2Fill);
  }
});

export default IconDownload2Fill;
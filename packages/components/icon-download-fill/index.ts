import type { App } from 'vue';
import _IconDownloadFill from './icon-download-fill.vue';

const IconDownloadFill = Object.assign(_IconDownloadFill, {
  install: (app: App) => {
    app.component(_IconDownloadFill.name, _IconDownloadFill);
  }
});

export default IconDownloadFill;
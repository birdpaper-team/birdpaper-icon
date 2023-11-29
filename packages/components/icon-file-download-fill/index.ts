import type { App } from 'vue';
import _IconFileDownloadFill from './icon-file-download-fill.vue';

const IconFileDownloadFill = Object.assign(_IconFileDownloadFill, {
  install: (app: App) => {
    app.component(_IconFileDownloadFill.name, _IconFileDownloadFill);
  }
});

export default IconFileDownloadFill;
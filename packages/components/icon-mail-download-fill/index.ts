import type { App } from 'vue';
import _IconMailDownloadFill from './icon-mail-download-fill.vue';

const IconMailDownloadFill = Object.assign(_IconMailDownloadFill, {
  install: (app: App) => {
    app.component(_IconMailDownloadFill.name, _IconMailDownloadFill);
  }
});

export default IconMailDownloadFill;
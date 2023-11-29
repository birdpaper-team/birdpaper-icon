import type { App } from 'vue';
import _IconMailDownload from './icon-mail-download.vue';

const IconMailDownload = Object.assign(_IconMailDownload, {
  install: (app: App) => {
    app.component(_IconMailDownload.name, _IconMailDownload);
  }
});

export default IconMailDownload;
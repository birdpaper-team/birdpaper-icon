import type { App } from 'vue';
import _IconDownloadWeb from './icon-download-web.vue';

const IconDownloadWeb = Object.assign(_IconDownloadWeb, {
  install: (app: App) => {
    app.component(_IconDownloadWeb.name, _IconDownloadWeb);
  }
});

export default IconDownloadWeb;
import type { App } from 'vue';
import _IconDownloadLaptop from './icon-download-laptop.vue';

const IconDownloadLaptop = Object.assign(_IconDownloadLaptop, {
  install: (app: App) => {
    app.component(_IconDownloadLaptop.name, _IconDownloadLaptop);
  }
});

export default IconDownloadLaptop;
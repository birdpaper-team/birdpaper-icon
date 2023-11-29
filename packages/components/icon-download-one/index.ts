import type { App } from 'vue';
import _IconDownloadOne from './icon-download-one.vue';

const IconDownloadOne = Object.assign(_IconDownloadOne, {
  install: (app: App) => {
    app.component(_IconDownloadOne.name, _IconDownloadOne);
  }
});

export default IconDownloadOne;
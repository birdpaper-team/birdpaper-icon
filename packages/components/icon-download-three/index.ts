import type { App } from 'vue';
import _IconDownloadThree from './icon-download-three.vue';

const IconDownloadThree = Object.assign(_IconDownloadThree, {
  install: (app: App) => {
    app.component(_IconDownloadThree.name, _IconDownloadThree);
  }
});

export default IconDownloadThree;
import type { App } from 'vue';
import _IconDownloadFour from './icon-download-four.vue';

const IconDownloadFour = Object.assign(_IconDownloadFour, {
  install: (app: App) => {
    app.component(_IconDownloadFour.name, _IconDownloadFour);
  }
});

export default IconDownloadFour;
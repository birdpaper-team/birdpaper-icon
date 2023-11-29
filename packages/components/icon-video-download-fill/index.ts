import type { App } from 'vue';
import _IconVideoDownloadFill from './icon-video-download-fill.vue';

const IconVideoDownloadFill = Object.assign(_IconVideoDownloadFill, {
  install: (app: App) => {
    app.component(_IconVideoDownloadFill.name, _IconVideoDownloadFill);
  }
});

export default IconVideoDownloadFill;
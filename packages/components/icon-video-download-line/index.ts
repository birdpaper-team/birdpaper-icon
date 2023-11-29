import type { App } from 'vue';
import _IconVideoDownloadLine from './icon-video-download-line.vue';

const IconVideoDownloadLine = Object.assign(_IconVideoDownloadLine, {
  install: (app: App) => {
    app.component(_IconVideoDownloadLine.name, _IconVideoDownloadLine);
  }
});

export default IconVideoDownloadLine;
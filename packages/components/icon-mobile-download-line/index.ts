import type { App } from 'vue';
import _IconMobileDownloadLine from './icon-mobile-download-line.vue';

const IconMobileDownloadLine = Object.assign(_IconMobileDownloadLine, {
  install: (app: App) => {
    app.component(_IconMobileDownloadLine.name, _IconMobileDownloadLine);
  }
});

export default IconMobileDownloadLine;
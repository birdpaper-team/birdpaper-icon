import type { App } from 'vue';
import _IconMobileDownloadFill from './icon-mobile-download-fill.vue';

const IconMobileDownloadFill = Object.assign(_IconMobileDownloadFill, {
  install: (app: App) => {
    app.component(_IconMobileDownloadFill.name, _IconMobileDownloadFill);
  }
});

export default IconMobileDownloadFill;
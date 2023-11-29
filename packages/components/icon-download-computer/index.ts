import type { App } from 'vue';
import _IconDownloadComputer from './icon-download-computer.vue';

const IconDownloadComputer = Object.assign(_IconDownloadComputer, {
  install: (app: App) => {
    app.component(_IconDownloadComputer.name, _IconDownloadComputer);
  }
});

export default IconDownloadComputer;
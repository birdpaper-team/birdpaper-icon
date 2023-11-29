import type { App } from 'vue';
import _IconDownload2Line from './icon-download-2-line.vue';

const IconDownload2Line = Object.assign(_IconDownload2Line, {
  install: (app: App) => {
    app.component(_IconDownload2Line.name, _IconDownload2Line);
  }
});

export default IconDownload2Line;
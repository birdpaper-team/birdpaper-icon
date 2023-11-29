import type { App } from 'vue';
import _IconFileTips from './icon-file-tips.vue';

const IconFileTips = Object.assign(_IconFileTips, {
  install: (app: App) => {
    app.component(_IconFileTips.name, _IconFileTips);
  }
});

export default IconFileTips;
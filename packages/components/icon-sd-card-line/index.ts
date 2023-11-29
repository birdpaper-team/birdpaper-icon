import type { App } from 'vue';
import _IconSdCardLine from './icon-sd-card-line.vue';

const IconSdCardLine = Object.assign(_IconSdCardLine, {
  install: (app: App) => {
    app.component(_IconSdCardLine.name, _IconSdCardLine);
  }
});

export default IconSdCardLine;
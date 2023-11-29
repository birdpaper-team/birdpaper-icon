import type { App } from 'vue';
import _IconCentosLine from './icon-centos-line.vue';

const IconCentosLine = Object.assign(_IconCentosLine, {
  install: (app: App) => {
    app.component(_IconCentosLine.name, _IconCentosLine);
  }
});

export default IconCentosLine;
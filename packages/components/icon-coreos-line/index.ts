import type { App } from 'vue';
import _IconCoreosLine from './icon-coreos-line.vue';

const IconCoreosLine = Object.assign(_IconCoreosLine, {
  install: (app: App) => {
    app.component(_IconCoreosLine.name, _IconCoreosLine);
  }
});

export default IconCoreosLine;
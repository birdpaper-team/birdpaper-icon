import type { App } from 'vue';
import _IconXrpLine from './icon-xrp-line.vue';

const IconXrpLine = Object.assign(_IconXrpLine, {
  install: (app: App) => {
    app.component(_IconXrpLine.name, _IconXrpLine);
  }
});

export default IconXrpLine;
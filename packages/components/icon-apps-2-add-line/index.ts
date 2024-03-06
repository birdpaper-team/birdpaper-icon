import type { App } from 'vue';
import _IconApps2AddLine from './icon-apps-2-add-line.vue';

const IconApps2AddLine = Object.assign(_IconApps2AddLine, {
  install: (app: App) => {
    app.component(_IconApps2AddLine.name, _IconApps2AddLine);
  }
});

export default IconApps2AddLine;
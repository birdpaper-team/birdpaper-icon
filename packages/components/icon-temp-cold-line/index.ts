import type { App } from 'vue';
import _IconTempColdLine from './icon-temp-cold-line.vue';

const IconTempColdLine = Object.assign(_IconTempColdLine, {
  install: (app: App) => {
    app.component(_IconTempColdLine.name, _IconTempColdLine);
  }
});

export default IconTempColdLine;
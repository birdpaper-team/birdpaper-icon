import type { App } from 'vue';
import _IconTempHotLine from './icon-temp-hot-line.vue';

const IconTempHotLine = Object.assign(_IconTempHotLine, {
  install: (app: App) => {
    app.component(_IconTempHotLine.name, _IconTempHotLine);
  }
});

export default IconTempHotLine;
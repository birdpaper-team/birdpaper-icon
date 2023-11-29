import type { App } from 'vue';
import _IconScan2Line from './icon-scan-2-line.vue';

const IconScan2Line = Object.assign(_IconScan2Line, {
  install: (app: App) => {
    app.component(_IconScan2Line.name, _IconScan2Line);
  }
});

export default IconScan2Line;
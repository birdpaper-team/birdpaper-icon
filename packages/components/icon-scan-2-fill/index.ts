import type { App } from 'vue';
import _IconScan2Fill from './icon-scan-2-fill.vue';

const IconScan2Fill = Object.assign(_IconScan2Fill, {
  install: (app: App) => {
    app.component(_IconScan2Fill.name, _IconScan2Fill);
  }
});

export default IconScan2Fill;
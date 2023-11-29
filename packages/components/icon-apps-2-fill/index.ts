import type { App } from 'vue';
import _IconApps2Fill from './icon-apps-2-fill.vue';

const IconApps2Fill = Object.assign(_IconApps2Fill, {
  install: (app: App) => {
    app.component(_IconApps2Fill.name, _IconApps2Fill);
  }
});

export default IconApps2Fill;
import type { App } from 'vue';
import _IconSettings2Fill from './icon-settings-2-fill.vue';

const IconSettings2Fill = Object.assign(_IconSettings2Fill, {
  install: (app: App) => {
    app.component(_IconSettings2Fill.name, _IconSettings2Fill);
  }
});

export default IconSettings2Fill;
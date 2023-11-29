import type { App } from 'vue';
import _IconSettings4Fill from './icon-settings-4-fill.vue';

const IconSettings4Fill = Object.assign(_IconSettings4Fill, {
  install: (app: App) => {
    app.component(_IconSettings4Fill.name, _IconSettings4Fill);
  }
});

export default IconSettings4Fill;
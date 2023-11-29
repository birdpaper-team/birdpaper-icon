import type { App } from 'vue';
import _IconSettings3Fill from './icon-settings-3-fill.vue';

const IconSettings3Fill = Object.assign(_IconSettings3Fill, {
  install: (app: App) => {
    app.component(_IconSettings3Fill.name, _IconSettings3Fill);
  }
});

export default IconSettings3Fill;
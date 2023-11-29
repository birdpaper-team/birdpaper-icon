import type { App } from 'vue';
import _IconSettings5Fill from './icon-settings-5-fill.vue';

const IconSettings5Fill = Object.assign(_IconSettings5Fill, {
  install: (app: App) => {
    app.component(_IconSettings5Fill.name, _IconSettings5Fill);
  }
});

export default IconSettings5Fill;
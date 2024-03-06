import type { App } from 'vue';
import _IconGroup3Fill from './icon-group-3-fill.vue';

const IconGroup3Fill = Object.assign(_IconGroup3Fill, {
  install: (app: App) => {
    app.component(_IconGroup3Fill.name, _IconGroup3Fill);
  }
});

export default IconGroup3Fill;
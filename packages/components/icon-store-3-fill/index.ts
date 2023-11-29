import type { App } from 'vue';
import _IconStore3Fill from './icon-store-3-fill.vue';

const IconStore3Fill = Object.assign(_IconStore3Fill, {
  install: (app: App) => {
    app.component(_IconStore3Fill.name, _IconStore3Fill);
  }
});

export default IconStore3Fill;
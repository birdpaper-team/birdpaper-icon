import type { App } from 'vue';
import _IconHome3Fill from './icon-home-3-fill.vue';

const IconHome3Fill = Object.assign(_IconHome3Fill, {
  install: (app: App) => {
    app.component(_IconHome3Fill.name, _IconHome3Fill);
  }
});

export default IconHome3Fill;
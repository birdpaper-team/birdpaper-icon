import type { App } from 'vue';
import _IconProgress3Fill from './icon-progress-3-fill.vue';

const IconProgress3Fill = Object.assign(_IconProgress3Fill, {
  install: (app: App) => {
    app.component(_IconProgress3Fill.name, _IconProgress3Fill);
  }
});

export default IconProgress3Fill;
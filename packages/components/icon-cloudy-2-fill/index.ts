import type { App } from 'vue';
import _IconCloudy2Fill from './icon-cloudy-2-fill.vue';

const IconCloudy2Fill = Object.assign(_IconCloudy2Fill, {
  install: (app: App) => {
    app.component(_IconCloudy2Fill.name, _IconCloudy2Fill);
  }
});

export default IconCloudy2Fill;
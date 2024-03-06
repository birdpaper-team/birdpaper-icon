import type { App } from 'vue';
import _IconHeartAdd2Fill from './icon-heart-add-2-fill.vue';

const IconHeartAdd2Fill = Object.assign(_IconHeartAdd2Fill, {
  install: (app: App) => {
    app.component(_IconHeartAdd2Fill.name, _IconHeartAdd2Fill);
  }
});

export default IconHeartAdd2Fill;
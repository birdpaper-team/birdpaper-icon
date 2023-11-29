import type { App } from 'vue';
import _IconShareForward2Fill from './icon-share-forward-2-fill.vue';

const IconShareForward2Fill = Object.assign(_IconShareForward2Fill, {
  install: (app: App) => {
    app.component(_IconShareForward2Fill.name, _IconShareForward2Fill);
  }
});

export default IconShareForward2Fill;
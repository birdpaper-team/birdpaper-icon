import type { App } from 'vue';
import _IconCompasses2Fill from './icon-compasses-2-fill.vue';

const IconCompasses2Fill = Object.assign(_IconCompasses2Fill, {
  install: (app: App) => {
    app.component(_IconCompasses2Fill.name, _IconCompasses2Fill);
  }
});

export default IconCompasses2Fill;
import type { App } from 'vue';
import _IconSkull2Fill from './icon-skull-2-fill.vue';

const IconSkull2Fill = Object.assign(_IconSkull2Fill, {
  install: (app: App) => {
    app.component(_IconSkull2Fill.name, _IconSkull2Fill);
  }
});

export default IconSkull2Fill;
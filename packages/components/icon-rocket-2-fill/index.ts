import type { App } from 'vue';
import _IconRocket2Fill from './icon-rocket-2-fill.vue';

const IconRocket2Fill = Object.assign(_IconRocket2Fill, {
  install: (app: App) => {
    app.component(_IconRocket2Fill.name, _IconRocket2Fill);
  }
});

export default IconRocket2Fill;
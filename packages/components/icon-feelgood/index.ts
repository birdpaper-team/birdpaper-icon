import type { App } from 'vue';
import _IconFeelgood from './icon-feelgood.vue';

const IconFeelgood = Object.assign(_IconFeelgood, {
  install: (app: App) => {
    app.component(_IconFeelgood.name, _IconFeelgood);
  }
});

export default IconFeelgood;
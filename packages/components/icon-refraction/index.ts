import type { App } from 'vue';
import _IconRefraction from './icon-refraction.vue';

const IconRefraction = Object.assign(_IconRefraction, {
  install: (app: App) => {
    app.component(_IconRefraction.name, _IconRefraction);
  }
});

export default IconRefraction;
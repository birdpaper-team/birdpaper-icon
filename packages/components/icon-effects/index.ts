import type { App } from 'vue';
import _IconEffects from './icon-effects.vue';

const IconEffects = Object.assign(_IconEffects, {
  install: (app: App) => {
    app.component(_IconEffects.name, _IconEffects);
  }
});

export default IconEffects;
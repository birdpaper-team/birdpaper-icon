import type { App } from 'vue';
import _IconComposition from './icon-composition.vue';

const IconComposition = Object.assign(_IconComposition, {
  install: (app: App) => {
    app.component(_IconComposition.name, _IconComposition);
  }
});

export default IconComposition;
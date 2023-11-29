import type { App } from 'vue';
import _IconProjectorFill from './icon-projector-fill.vue';

const IconProjectorFill = Object.assign(_IconProjectorFill, {
  install: (app: App) => {
    app.component(_IconProjectorFill.name, _IconProjectorFill);
  }
});

export default IconProjectorFill;
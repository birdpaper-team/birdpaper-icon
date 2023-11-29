import type { App } from 'vue';
import _IconSimCardFill from './icon-sim-card-fill.vue';

const IconSimCardFill = Object.assign(_IconSimCardFill, {
  install: (app: App) => {
    app.component(_IconSimCardFill.name, _IconSimCardFill);
  }
});

export default IconSimCardFill;
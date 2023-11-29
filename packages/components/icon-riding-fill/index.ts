import type { App } from 'vue';
import _IconRidingFill from './icon-riding-fill.vue';

const IconRidingFill = Object.assign(_IconRidingFill, {
  install: (app: App) => {
    app.component(_IconRidingFill.name, _IconRidingFill);
  }
});

export default IconRidingFill;
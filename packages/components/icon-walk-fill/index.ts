import type { App } from 'vue';
import _IconWalkFill from './icon-walk-fill.vue';

const IconWalkFill = Object.assign(_IconWalkFill, {
  install: (app: App) => {
    app.component(_IconWalkFill.name, _IconWalkFill);
  }
});

export default IconWalkFill;
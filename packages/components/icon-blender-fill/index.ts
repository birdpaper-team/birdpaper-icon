import type { App } from 'vue';
import _IconBlenderFill from './icon-blender-fill.vue';

const IconBlenderFill = Object.assign(_IconBlenderFill, {
  install: (app: App) => {
    app.component(_IconBlenderFill.name, _IconBlenderFill);
  }
});

export default IconBlenderFill;
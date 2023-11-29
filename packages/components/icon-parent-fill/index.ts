import type { App } from 'vue';
import _IconParentFill from './icon-parent-fill.vue';

const IconParentFill = Object.assign(_IconParentFill, {
  install: (app: App) => {
    app.component(_IconParentFill.name, _IconParentFill);
  }
});

export default IconParentFill;
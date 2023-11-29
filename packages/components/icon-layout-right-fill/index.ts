import type { App } from 'vue';
import _IconLayoutRightFill from './icon-layout-right-fill.vue';

const IconLayoutRightFill = Object.assign(_IconLayoutRightFill, {
  install: (app: App) => {
    app.component(_IconLayoutRightFill.name, _IconLayoutRightFill);
  }
});

export default IconLayoutRightFill;
import type { App } from 'vue';
import _IconArrowDropRightFill from './icon-arrow-drop-right-fill.vue';

const IconArrowDropRightFill = Object.assign(_IconArrowDropRightFill, {
  install: (app: App) => {
    app.component(_IconArrowDropRightFill.name, _IconArrowDropRightFill);
  }
});

export default IconArrowDropRightFill;
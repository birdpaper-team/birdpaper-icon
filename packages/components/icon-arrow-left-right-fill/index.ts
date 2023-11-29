import type { App } from 'vue';
import _IconArrowLeftRightFill from './icon-arrow-left-right-fill.vue';

const IconArrowLeftRightFill = Object.assign(_IconArrowLeftRightFill, {
  install: (app: App) => {
    app.component(_IconArrowLeftRightFill.name, _IconArrowLeftRightFill);
  }
});

export default IconArrowLeftRightFill;
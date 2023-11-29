import type { App } from 'vue';
import _IconArrowRightFill from './icon-arrow-right-fill.vue';

const IconArrowRightFill = Object.assign(_IconArrowRightFill, {
  install: (app: App) => {
    app.component(_IconArrowRightFill.name, _IconArrowRightFill);
  }
});

export default IconArrowRightFill;
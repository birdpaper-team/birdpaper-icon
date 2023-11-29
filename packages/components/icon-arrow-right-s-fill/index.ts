import type { App } from 'vue';
import _IconArrowRightSFill from './icon-arrow-right-s-fill.vue';

const IconArrowRightSFill = Object.assign(_IconArrowRightSFill, {
  install: (app: App) => {
    app.component(_IconArrowRightSFill.name, _IconArrowRightSFill);
  }
});

export default IconArrowRightSFill;
import type { App } from 'vue';
import _IconArrowRightWideFill from './icon-arrow-right-wide-fill.vue';

const IconArrowRightWideFill = Object.assign(_IconArrowRightWideFill, {
  install: (app: App) => {
    app.component(_IconArrowRightWideFill.name, _IconArrowRightWideFill);
  }
});

export default IconArrowRightWideFill;
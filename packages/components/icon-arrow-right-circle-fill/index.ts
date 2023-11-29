import type { App } from 'vue';
import _IconArrowRightCircleFill from './icon-arrow-right-circle-fill.vue';

const IconArrowRightCircleFill = Object.assign(_IconArrowRightCircleFill, {
  install: (app: App) => {
    app.component(_IconArrowRightCircleFill.name, _IconArrowRightCircleFill);
  }
});

export default IconArrowRightCircleFill;
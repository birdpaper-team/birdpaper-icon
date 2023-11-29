import type { App } from 'vue';
import _IconArrowLeftCircleFill from './icon-arrow-left-circle-fill.vue';

const IconArrowLeftCircleFill = Object.assign(_IconArrowLeftCircleFill, {
  install: (app: App) => {
    app.component(_IconArrowLeftCircleFill.name, _IconArrowLeftCircleFill);
  }
});

export default IconArrowLeftCircleFill;
import type { App } from 'vue';
import _IconArrowLeftFill from './icon-arrow-left-fill.vue';

const IconArrowLeftFill = Object.assign(_IconArrowLeftFill, {
  install: (app: App) => {
    app.component(_IconArrowLeftFill.name, _IconArrowLeftFill);
  }
});

export default IconArrowLeftFill;
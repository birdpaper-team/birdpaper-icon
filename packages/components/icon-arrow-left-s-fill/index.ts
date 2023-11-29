import type { App } from 'vue';
import _IconArrowLeftSFill from './icon-arrow-left-s-fill.vue';

const IconArrowLeftSFill = Object.assign(_IconArrowLeftSFill, {
  install: (app: App) => {
    app.component(_IconArrowLeftSFill.name, _IconArrowLeftSFill);
  }
});

export default IconArrowLeftSFill;
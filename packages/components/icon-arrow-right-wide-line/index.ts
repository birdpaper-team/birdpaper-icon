import type { App } from 'vue';
import _IconArrowRightWideLine from './icon-arrow-right-wide-line.vue';

const IconArrowRightWideLine = Object.assign(_IconArrowRightWideLine, {
  install: (app: App) => {
    app.component(_IconArrowRightWideLine.name, _IconArrowRightWideLine);
  }
});

export default IconArrowRightWideLine;
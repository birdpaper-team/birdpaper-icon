import type { App } from 'vue';
import _IconArrowLeftWideLine from './icon-arrow-left-wide-line.vue';

const IconArrowLeftWideLine = Object.assign(_IconArrowLeftWideLine, {
  install: (app: App) => {
    app.component(_IconArrowLeftWideLine.name, _IconArrowLeftWideLine);
  }
});

export default IconArrowLeftWideLine;
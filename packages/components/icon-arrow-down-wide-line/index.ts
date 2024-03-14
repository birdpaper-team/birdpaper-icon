import type { App } from 'vue';
import _IconArrowDownWideLine from './icon-arrow-down-wide-line.vue';

const IconArrowDownWideLine = Object.assign(_IconArrowDownWideLine, {
  install: (app: App) => {
    app.component(_IconArrowDownWideLine.name, _IconArrowDownWideLine);
  }
});

export default IconArrowDownWideLine;
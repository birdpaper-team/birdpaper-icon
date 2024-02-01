import type { App } from 'vue';
import _IconArrowUpWideLine from './icon-arrow-up-wide-line.vue';

const IconArrowUpWideLine = Object.assign(_IconArrowUpWideLine, {
  install: (app: App) => {
    app.component(_IconArrowUpWideLine.name, _IconArrowUpWideLine);
  }
});

export default IconArrowUpWideLine;
import type { App } from 'vue';
import _IconMotorbikeLine from './icon-motorbike-line.vue';

const IconMotorbikeLine = Object.assign(_IconMotorbikeLine, {
  install: (app: App) => {
    app.component(_IconMotorbikeLine.name, _IconMotorbikeLine);
  }
});

export default IconMotorbikeLine;
import type { App } from 'vue';
import _IconTapeMeasure from './icon-tape-measure.vue';

const IconTapeMeasure = Object.assign(_IconTapeMeasure, {
  install: (app: App) => {
    app.component(_IconTapeMeasure.name, _IconTapeMeasure);
  }
});

export default IconTapeMeasure;
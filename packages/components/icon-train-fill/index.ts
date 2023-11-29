import type { App } from 'vue';
import _IconTrainFill from './icon-train-fill.vue';

const IconTrainFill = Object.assign(_IconTrainFill, {
  install: (app: App) => {
    app.component(_IconTrainFill.name, _IconTrainFill);
  }
});

export default IconTrainFill;
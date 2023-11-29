import type { App } from 'vue';
import _IconTrainWifiFill from './icon-train-wifi-fill.vue';

const IconTrainWifiFill = Object.assign(_IconTrainWifiFill, {
  install: (app: App) => {
    app.component(_IconTrainWifiFill.name, _IconTrainWifiFill);
  }
});

export default IconTrainWifiFill;
import type { App } from 'vue';
import _IconTrainLine from './icon-train-line.vue';

const IconTrainLine = Object.assign(_IconTrainLine, {
  install: (app: App) => {
    app.component(_IconTrainLine.name, _IconTrainLine);
  }
});

export default IconTrainLine;
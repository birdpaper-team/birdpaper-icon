import type { App } from 'vue';
import _IconTrainWifiLine from './icon-train-wifi-line.vue';

const IconTrainWifiLine = Object.assign(_IconTrainWifiLine, {
  install: (app: App) => {
    app.component(_IconTrainWifiLine.name, _IconTrainWifiLine);
  }
});

export default IconTrainWifiLine;
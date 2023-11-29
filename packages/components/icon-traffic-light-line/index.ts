import type { App } from 'vue';
import _IconTrafficLightLine from './icon-traffic-light-line.vue';

const IconTrafficLightLine = Object.assign(_IconTrafficLightLine, {
  install: (app: App) => {
    app.component(_IconTrafficLightLine.name, _IconTrafficLightLine);
  }
});

export default IconTrafficLightLine;
import type { App } from 'vue';
import _IconTrafficLightFill from './icon-traffic-light-fill.vue';

const IconTrafficLightFill = Object.assign(_IconTrafficLightFill, {
  install: (app: App) => {
    app.component(_IconTrafficLightFill.name, _IconTrafficLightFill);
  }
});

export default IconTrafficLightFill;
import type { App } from 'vue';
import _IconDataArrival from './icon-data-arrival.vue';

const IconDataArrival = Object.assign(_IconDataArrival, {
  install: (app: App) => {
    app.component(_IconDataArrival.name, _IconDataArrival);
  }
});

export default IconDataArrival;
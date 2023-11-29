import type { App } from 'vue';
import _IconTourBus from './icon-tour-bus.vue';

const IconTourBus = Object.assign(_IconTourBus, {
  install: (app: App) => {
    app.component(_IconTourBus.name, _IconTourBus);
  }
});

export default IconTourBus;
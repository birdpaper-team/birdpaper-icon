import type { App } from 'vue';
import _IconBusTwo from './icon-bus-two.vue';

const IconBusTwo = Object.assign(_IconBusTwo, {
  install: (app: App) => {
    app.component(_IconBusTwo.name, _IconBusTwo);
  }
});

export default IconBusTwo;
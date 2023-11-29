import type { App } from 'vue';
import _IconIwatchTwo from './icon-iwatch-two.vue';

const IconIwatchTwo = Object.assign(_IconIwatchTwo, {
  install: (app: App) => {
    app.component(_IconIwatchTwo.name, _IconIwatchTwo);
  }
});

export default IconIwatchTwo;
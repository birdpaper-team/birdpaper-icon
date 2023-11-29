import type { App } from 'vue';
import _IconDataTwo from './icon-data-two.vue';

const IconDataTwo = Object.assign(_IconDataTwo, {
  install: (app: App) => {
    app.component(_IconDataTwo.name, _IconDataTwo);
  }
});

export default IconDataTwo;
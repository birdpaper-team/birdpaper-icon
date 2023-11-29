import type { App } from 'vue';
import _IconConnectionPointTwo from './icon-connection-point-two.vue';

const IconConnectionPointTwo = Object.assign(_IconConnectionPointTwo, {
  install: (app: App) => {
    app.component(_IconConnectionPointTwo.name, _IconConnectionPointTwo);
  }
});

export default IconConnectionPointTwo;
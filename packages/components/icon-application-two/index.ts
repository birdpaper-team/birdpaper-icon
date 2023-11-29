import type { App } from 'vue';
import _IconApplicationTwo from './icon-application-two.vue';

const IconApplicationTwo = Object.assign(_IconApplicationTwo, {
  install: (app: App) => {
    app.component(_IconApplicationTwo.name, _IconApplicationTwo);
  }
});

export default IconApplicationTwo;
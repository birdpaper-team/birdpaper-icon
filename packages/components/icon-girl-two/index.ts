import type { App } from 'vue';
import _IconGirlTwo from './icon-girl-two.vue';

const IconGirlTwo = Object.assign(_IconGirlTwo, {
  install: (app: App) => {
    app.component(_IconGirlTwo.name, _IconGirlTwo);
  }
});

export default IconGirlTwo;
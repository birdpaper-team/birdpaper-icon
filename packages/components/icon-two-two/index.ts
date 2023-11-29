import type { App } from 'vue';
import _IconTwoTwo from './icon-two-two.vue';

const IconTwoTwo = Object.assign(_IconTwoTwo, {
  install: (app: App) => {
    app.component(_IconTwoTwo.name, _IconTwoTwo);
  }
});

export default IconTwoTwo;
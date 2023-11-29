import type { App } from 'vue';
import _IconLocalTwo from './icon-local-two.vue';

const IconLocalTwo = Object.assign(_IconLocalTwo, {
  install: (app: App) => {
    app.component(_IconLocalTwo.name, _IconLocalTwo);
  }
});

export default IconLocalTwo;
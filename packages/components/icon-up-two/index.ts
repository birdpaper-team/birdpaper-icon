import type { App } from 'vue';
import _IconUpTwo from './icon-up-two.vue';

const IconUpTwo = Object.assign(_IconUpTwo, {
  install: (app: App) => {
    app.component(_IconUpTwo.name, _IconUpTwo);
  }
});

export default IconUpTwo;
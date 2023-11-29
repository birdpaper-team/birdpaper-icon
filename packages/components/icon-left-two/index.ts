import type { App } from 'vue';
import _IconLeftTwo from './icon-left-two.vue';

const IconLeftTwo = Object.assign(_IconLeftTwo, {
  install: (app: App) => {
    app.component(_IconLeftTwo.name, _IconLeftTwo);
  }
});

export default IconLeftTwo;
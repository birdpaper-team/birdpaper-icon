import type { App } from 'vue';
import _IconFireTwo from './icon-fire-two.vue';

const IconFireTwo = Object.assign(_IconFireTwo, {
  install: (app: App) => {
    app.component(_IconFireTwo.name, _IconFireTwo);
  }
});

export default IconFireTwo;
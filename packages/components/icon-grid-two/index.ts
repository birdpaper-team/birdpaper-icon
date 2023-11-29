import type { App } from 'vue';
import _IconGridTwo from './icon-grid-two.vue';

const IconGridTwo = Object.assign(_IconGridTwo, {
  install: (app: App) => {
    app.component(_IconGridTwo.name, _IconGridTwo);
  }
});

export default IconGridTwo;
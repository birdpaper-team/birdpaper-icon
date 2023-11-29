import type { App } from 'vue';
import _IconCardTwo from './icon-card-two.vue';

const IconCardTwo = Object.assign(_IconCardTwo, {
  install: (app: App) => {
    app.component(_IconCardTwo.name, _IconCardTwo);
  }
});

export default IconCardTwo;
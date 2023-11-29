import type { App } from 'vue';
import _IconProjectorTwo from './icon-projector-two.vue';

const IconProjectorTwo = Object.assign(_IconProjectorTwo, {
  install: (app: App) => {
    app.component(_IconProjectorTwo.name, _IconProjectorTwo);
  }
});

export default IconProjectorTwo;
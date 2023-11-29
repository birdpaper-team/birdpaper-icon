import type { App } from 'vue';
import _IconProjectorOne from './icon-projector-one.vue';

const IconProjectorOne = Object.assign(_IconProjectorOne, {
  install: (app: App) => {
    app.component(_IconProjectorOne.name, _IconProjectorOne);
  }
});

export default IconProjectorOne;
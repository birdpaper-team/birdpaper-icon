import type { App } from 'vue';
import _IconProjectorThree from './icon-projector-three.vue';

const IconProjectorThree = Object.assign(_IconProjectorThree, {
  install: (app: App) => {
    app.component(_IconProjectorThree.name, _IconProjectorThree);
  }
});

export default IconProjectorThree;
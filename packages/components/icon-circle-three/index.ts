import type { App } from 'vue';
import _IconCircleThree from './icon-circle-three.vue';

const IconCircleThree = Object.assign(_IconCircleThree, {
  install: (app: App) => {
    app.component(_IconCircleThree.name, _IconCircleThree);
  }
});

export default IconCircleThree;
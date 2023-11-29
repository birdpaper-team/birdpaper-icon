import type { App } from 'vue';
import _IconGridThree from './icon-grid-three.vue';

const IconGridThree = Object.assign(_IconGridThree, {
  install: (app: App) => {
    app.component(_IconGridThree.name, _IconGridThree);
  }
});

export default IconGridThree;
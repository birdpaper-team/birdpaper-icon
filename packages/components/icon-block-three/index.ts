import type { App } from 'vue';
import _IconBlockThree from './icon-block-three.vue';

const IconBlockThree = Object.assign(_IconBlockThree, {
  install: (app: App) => {
    app.component(_IconBlockThree.name, _IconBlockThree);
  }
});

export default IconBlockThree;
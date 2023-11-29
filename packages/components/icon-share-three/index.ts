import type { App } from 'vue';
import _IconShareThree from './icon-share-three.vue';

const IconShareThree = Object.assign(_IconShareThree, {
  install: (app: App) => {
    app.component(_IconShareThree.name, _IconShareThree);
  }
});

export default IconShareThree;
import type { App } from 'vue';
import _IconDeleteThree from './icon-delete-three.vue';

const IconDeleteThree = Object.assign(_IconDeleteThree, {
  install: (app: App) => {
    app.component(_IconDeleteThree.name, _IconDeleteThree);
  }
});

export default IconDeleteThree;
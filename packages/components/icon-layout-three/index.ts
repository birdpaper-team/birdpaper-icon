import type { App } from 'vue';
import _IconLayoutThree from './icon-layout-three.vue';

const IconLayoutThree = Object.assign(_IconLayoutThree, {
  install: (app: App) => {
    app.component(_IconLayoutThree.name, _IconLayoutThree);
  }
});

export default IconLayoutThree;
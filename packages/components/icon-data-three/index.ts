import type { App } from 'vue';
import _IconDataThree from './icon-data-three.vue';

const IconDataThree = Object.assign(_IconDataThree, {
  install: (app: App) => {
    app.component(_IconDataThree.name, _IconDataThree);
  }
});

export default IconDataThree;
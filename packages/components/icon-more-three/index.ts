import type { App } from 'vue';
import _IconMoreThree from './icon-more-three.vue';

const IconMoreThree = Object.assign(_IconMoreThree, {
  install: (app: App) => {
    app.component(_IconMoreThree.name, _IconMoreThree);
  }
});

export default IconMoreThree;
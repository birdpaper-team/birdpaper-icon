import type { App } from 'vue';
import _IconAddThree from './icon-add-three.vue';

const IconAddThree = Object.assign(_IconAddThree, {
  install: (app: App) => {
    app.component(_IconAddThree.name, _IconAddThree);
  }
});

export default IconAddThree;
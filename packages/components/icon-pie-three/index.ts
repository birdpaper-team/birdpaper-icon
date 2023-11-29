import type { App } from 'vue';
import _IconPieThree from './icon-pie-three.vue';

const IconPieThree = Object.assign(_IconPieThree, {
  install: (app: App) => {
    app.component(_IconPieThree.name, _IconPieThree);
  }
});

export default IconPieThree;
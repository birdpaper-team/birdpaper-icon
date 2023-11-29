import type { App } from 'vue';
import _IconMaterialThree from './icon-material-three.vue';

const IconMaterialThree = Object.assign(_IconMaterialThree, {
  install: (app: App) => {
    app.component(_IconMaterialThree.name, _IconMaterialThree);
  }
});

export default IconMaterialThree;
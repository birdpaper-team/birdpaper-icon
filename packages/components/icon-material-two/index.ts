import type { App } from 'vue';
import _IconMaterialTwo from './icon-material-two.vue';

const IconMaterialTwo = Object.assign(_IconMaterialTwo, {
  install: (app: App) => {
    app.component(_IconMaterialTwo.name, _IconMaterialTwo);
  }
});

export default IconMaterialTwo;
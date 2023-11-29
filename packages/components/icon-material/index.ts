import type { App } from 'vue';
import _IconMaterial from './icon-material.vue';

const IconMaterial = Object.assign(_IconMaterial, {
  install: (app: App) => {
    app.component(_IconMaterial.name, _IconMaterial);
  }
});

export default IconMaterial;
import type { App } from 'vue';
import _IconVirtualRealityGlasses from './icon-virtual-reality-glasses.vue';

const IconVirtualRealityGlasses = Object.assign(_IconVirtualRealityGlasses, {
  install: (app: App) => {
    app.component(_IconVirtualRealityGlasses.name, _IconVirtualRealityGlasses);
  }
});

export default IconVirtualRealityGlasses;
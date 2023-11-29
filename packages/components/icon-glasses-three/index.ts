import type { App } from 'vue';
import _IconGlassesThree from './icon-glasses-three.vue';

const IconGlassesThree = Object.assign(_IconGlassesThree, {
  install: (app: App) => {
    app.component(_IconGlassesThree.name, _IconGlassesThree);
  }
});

export default IconGlassesThree;
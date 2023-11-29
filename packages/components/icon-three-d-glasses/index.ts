import type { App } from 'vue';
import _IconThreeDGlasses from './icon-three-d-glasses.vue';

const IconThreeDGlasses = Object.assign(_IconThreeDGlasses, {
  install: (app: App) => {
    app.component(_IconThreeDGlasses.name, _IconThreeDGlasses);
  }
});

export default IconThreeDGlasses;
import type { App } from 'vue';
import _IconRedo from './icon-redo.vue';

const IconRedo = Object.assign(_IconRedo, {
  install: (app: App) => {
    app.component(_IconRedo.name, _IconRedo);
  }
});

export default IconRedo;
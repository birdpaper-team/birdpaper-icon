import type { App } from 'vue';
import _IconGoogle from './icon-google.vue';

const IconGoogle = Object.assign(_IconGoogle, {
  install: (app: App) => {
    app.component(_IconGoogle.name, _IconGoogle);
  }
});

export default IconGoogle;
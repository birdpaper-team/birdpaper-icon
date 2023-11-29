import type { App } from 'vue';
import _IconMultiCircular from './icon-multi-circular.vue';

const IconMultiCircular = Object.assign(_IconMultiCircular, {
  install: (app: App) => {
    app.component(_IconMultiCircular.name, _IconMultiCircular);
  }
});

export default IconMultiCircular;
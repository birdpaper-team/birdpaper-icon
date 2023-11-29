import type { App } from 'vue';
import _IconMultiFunctionKnife from './icon-multi-function-knife.vue';

const IconMultiFunctionKnife = Object.assign(_IconMultiFunctionKnife, {
  install: (app: App) => {
    app.component(_IconMultiFunctionKnife.name, _IconMultiFunctionKnife);
  }
});

export default IconMultiFunctionKnife;
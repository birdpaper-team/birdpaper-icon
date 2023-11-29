import type { App } from 'vue';
import _IconWubiInput from './icon-wubi-input.vue';

const IconWubiInput = Object.assign(_IconWubiInput, {
  install: (app: App) => {
    app.component(_IconWubiInput.name, _IconWubiInput);
  }
});

export default IconWubiInput;
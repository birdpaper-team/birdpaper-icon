import type { App } from 'vue';
import _IconFTwoKey from './icon-f-two-key.vue';

const IconFTwoKey = Object.assign(_IconFTwoKey, {
  install: (app: App) => {
    app.component(_IconFTwoKey.name, _IconFTwoKey);
  }
});

export default IconFTwoKey;
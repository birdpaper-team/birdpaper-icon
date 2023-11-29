import type { App } from 'vue';
import _IconEnterKey from './icon-enter-key.vue';

const IconEnterKey = Object.assign(_IconEnterKey, {
  install: (app: App) => {
    app.component(_IconEnterKey.name, _IconEnterKey);
  }
});

export default IconEnterKey;
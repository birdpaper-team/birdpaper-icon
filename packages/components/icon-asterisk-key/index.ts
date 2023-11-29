import type { App } from 'vue';
import _IconAsteriskKey from './icon-asterisk-key.vue';

const IconAsteriskKey = Object.assign(_IconAsteriskKey, {
  install: (app: App) => {
    app.component(_IconAsteriskKey.name, _IconAsteriskKey);
  }
});

export default IconAsteriskKey;
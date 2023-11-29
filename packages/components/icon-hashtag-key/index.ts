import type { App } from 'vue';
import _IconHashtagKey from './icon-hashtag-key.vue';

const IconHashtagKey = Object.assign(_IconHashtagKey, {
  install: (app: App) => {
    app.component(_IconHashtagKey.name, _IconHashtagKey);
  }
});

export default IconHashtagKey;
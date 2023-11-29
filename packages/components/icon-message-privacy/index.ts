import type { App } from 'vue';
import _IconMessagePrivacy from './icon-message-privacy.vue';

const IconMessagePrivacy = Object.assign(_IconMessagePrivacy, {
  install: (app: App) => {
    app.component(_IconMessagePrivacy.name, _IconMessagePrivacy);
  }
});

export default IconMessagePrivacy;
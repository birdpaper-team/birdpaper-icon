import type { App } from 'vue';
import _IconPersonalPrivacy from './icon-personal-privacy.vue';

const IconPersonalPrivacy = Object.assign(_IconPersonalPrivacy, {
  install: (app: App) => {
    app.component(_IconPersonalPrivacy.name, _IconPersonalPrivacy);
  }
});

export default IconPersonalPrivacy;
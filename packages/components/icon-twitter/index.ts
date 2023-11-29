import type { App } from 'vue';
import _IconTwitter from './icon-twitter.vue';

const IconTwitter = Object.assign(_IconTwitter, {
  install: (app: App) => {
    app.component(_IconTwitter.name, _IconTwitter);
  }
});

export default IconTwitter;
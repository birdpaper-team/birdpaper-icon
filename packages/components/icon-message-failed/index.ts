import type { App } from 'vue';
import _IconMessageFailed from './icon-message-failed.vue';

const IconMessageFailed = Object.assign(_IconMessageFailed, {
  install: (app: App) => {
    app.component(_IconMessageFailed.name, _IconMessageFailed);
  }
});

export default IconMessageFailed;
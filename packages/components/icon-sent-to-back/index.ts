import type { App } from 'vue';
import _IconSentToBack from './icon-sent-to-back.vue';

const IconSentToBack = Object.assign(_IconSentToBack, {
  install: (app: App) => {
    app.component(_IconSentToBack.name, _IconSentToBack);
  }
});

export default IconSentToBack;
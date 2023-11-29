import type { App } from 'vue';
import _IconSpamFill from './icon-spam-fill.vue';

const IconSpamFill = Object.assign(_IconSpamFill, {
  install: (app: App) => {
    app.component(_IconSpamFill.name, _IconSpamFill);
  }
});

export default IconSpamFill;
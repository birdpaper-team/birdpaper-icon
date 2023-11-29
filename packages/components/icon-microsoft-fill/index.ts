import type { App } from 'vue';
import _IconMicrosoftFill from './icon-microsoft-fill.vue';

const IconMicrosoftFill = Object.assign(_IconMicrosoftFill, {
  install: (app: App) => {
    app.component(_IconMicrosoftFill.name, _IconMicrosoftFill);
  }
});

export default IconMicrosoftFill;
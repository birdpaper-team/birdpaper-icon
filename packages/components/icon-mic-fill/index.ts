import type { App } from 'vue';
import _IconMicFill from './icon-mic-fill.vue';

const IconMicFill = Object.assign(_IconMicFill, {
  install: (app: App) => {
    app.component(_IconMicFill.name, _IconMicFill);
  }
});

export default IconMicFill;
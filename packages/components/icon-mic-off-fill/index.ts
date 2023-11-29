import type { App } from 'vue';
import _IconMicOffFill from './icon-mic-off-fill.vue';

const IconMicOffFill = Object.assign(_IconMicOffFill, {
  install: (app: App) => {
    app.component(_IconMicOffFill.name, _IconMicOffFill);
  }
});

export default IconMicOffFill;
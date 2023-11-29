import type { App } from 'vue';
import _IconMicrosoftLoopFill from './icon-microsoft-loop-fill.vue';

const IconMicrosoftLoopFill = Object.assign(_IconMicrosoftLoopFill, {
  install: (app: App) => {
    app.component(_IconMicrosoftLoopFill.name, _IconMicrosoftLoopFill);
  }
});

export default IconMicrosoftLoopFill;
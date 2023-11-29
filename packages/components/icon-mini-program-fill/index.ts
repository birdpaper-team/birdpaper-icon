import type { App } from 'vue';
import _IconMiniProgramFill from './icon-mini-program-fill.vue';

const IconMiniProgramFill = Object.assign(_IconMiniProgramFill, {
  install: (app: App) => {
    app.component(_IconMiniProgramFill.name, _IconMiniProgramFill);
  }
});

export default IconMiniProgramFill;
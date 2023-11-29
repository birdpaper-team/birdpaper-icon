import type { App } from 'vue';
import _IconSuperscript from './icon-superscript.vue';

const IconSuperscript = Object.assign(_IconSuperscript, {
  install: (app: App) => {
    app.component(_IconSuperscript.name, _IconSuperscript);
  }
});

export default IconSuperscript;
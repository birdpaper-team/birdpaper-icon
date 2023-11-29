import type { App } from 'vue';
import _IconSuperscript2 from './icon-superscript-2.vue';

const IconSuperscript2 = Object.assign(_IconSuperscript2, {
  install: (app: App) => {
    app.component(_IconSuperscript2.name, _IconSuperscript2);
  }
});

export default IconSuperscript2;
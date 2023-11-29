import type { App } from 'vue';
import _IconCodeSSlashFill from './icon-code-s-slash-fill.vue';

const IconCodeSSlashFill = Object.assign(_IconCodeSSlashFill, {
  install: (app: App) => {
    app.component(_IconCodeSSlashFill.name, _IconCodeSSlashFill);
  }
});

export default IconCodeSSlashFill;
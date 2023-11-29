import type { App } from 'vue';
import _IconFileDamageFill from './icon-file-damage-fill.vue';

const IconFileDamageFill = Object.assign(_IconFileDamageFill, {
  install: (app: App) => {
    app.component(_IconFileDamageFill.name, _IconFileDamageFill);
  }
});

export default IconFileDamageFill;
import type { App } from 'vue';
import _IconSoundModuleFill from './icon-sound-module-fill.vue';

const IconSoundModuleFill = Object.assign(_IconSoundModuleFill, {
  install: (app: App) => {
    app.component(_IconSoundModuleFill.name, _IconSoundModuleFill);
  }
});

export default IconSoundModuleFill;
import type { App } from 'vue';
import _IconSurroundSoundFill from './icon-surround-sound-fill.vue';

const IconSurroundSoundFill = Object.assign(_IconSurroundSoundFill, {
  install: (app: App) => {
    app.component(_IconSurroundSoundFill.name, _IconSurroundSoundFill);
  }
});

export default IconSurroundSoundFill;
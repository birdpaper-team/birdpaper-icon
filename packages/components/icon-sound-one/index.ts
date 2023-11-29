import type { App } from 'vue';
import _IconSoundOne from './icon-sound-one.vue';

const IconSoundOne = Object.assign(_IconSoundOne, {
  install: (app: App) => {
    app.component(_IconSoundOne.name, _IconSoundOne);
  }
});

export default IconSoundOne;
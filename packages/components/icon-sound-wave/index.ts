import type { App } from 'vue';
import _IconSoundWave from './icon-sound-wave.vue';

const IconSoundWave = Object.assign(_IconSoundWave, {
  install: (app: App) => {
    app.component(_IconSoundWave.name, _IconSoundWave);
  }
});

export default IconSoundWave;
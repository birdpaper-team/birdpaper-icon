import type { App } from 'vue';
import _IconSurroundSoundLine from './icon-surround-sound-line.vue';

const IconSurroundSoundLine = Object.assign(_IconSurroundSoundLine, {
  install: (app: App) => {
    app.component(_IconSurroundSoundLine.name, _IconSurroundSoundLine);
  }
});

export default IconSurroundSoundLine;
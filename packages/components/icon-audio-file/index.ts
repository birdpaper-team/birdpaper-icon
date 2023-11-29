import type { App } from 'vue';
import _IconAudioFile from './icon-audio-file.vue';

const IconAudioFile = Object.assign(_IconAudioFile, {
  install: (app: App) => {
    app.component(_IconAudioFile.name, _IconAudioFile);
  }
});

export default IconAudioFile;
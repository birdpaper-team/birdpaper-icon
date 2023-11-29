import type { App } from 'vue';
import _IconVoice from './icon-voice.vue';

const IconVoice = Object.assign(_IconVoice, {
  install: (app: App) => {
    app.component(_IconVoice.name, _IconVoice);
  }
});

export default IconVoice;
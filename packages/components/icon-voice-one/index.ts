import type { App } from 'vue';
import _IconVoiceOne from './icon-voice-one.vue';

const IconVoiceOne = Object.assign(_IconVoiceOne, {
  install: (app: App) => {
    app.component(_IconVoiceOne.name, _IconVoiceOne);
  }
});

export default IconVoiceOne;
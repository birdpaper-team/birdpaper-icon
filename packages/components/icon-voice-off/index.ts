import type { App } from 'vue';
import _IconVoiceOff from './icon-voice-off.vue';

const IconVoiceOff = Object.assign(_IconVoiceOff, {
  install: (app: App) => {
    app.component(_IconVoiceOff.name, _IconVoiceOff);
  }
});

export default IconVoiceOff;
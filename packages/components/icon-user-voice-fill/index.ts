import type { App } from 'vue';
import _IconUserVoiceFill from './icon-user-voice-fill.vue';

const IconUserVoiceFill = Object.assign(_IconUserVoiceFill, {
  install: (app: App) => {
    app.component(_IconUserVoiceFill.name, _IconUserVoiceFill);
  }
});

export default IconUserVoiceFill;
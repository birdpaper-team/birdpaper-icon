import type { App } from 'vue';
import _IconUserVoiceLine from './icon-user-voice-line.vue';

const IconUserVoiceLine = Object.assign(_IconUserVoiceLine, {
  install: (app: App) => {
    app.component(_IconUserVoiceLine.name, _IconUserVoiceLine);
  }
});

export default IconUserVoiceLine;
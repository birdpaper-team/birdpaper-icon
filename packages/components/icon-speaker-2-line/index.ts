import type { App } from 'vue';
import _IconSpeaker2Line from './icon-speaker-2-line.vue';

const IconSpeaker2Line = Object.assign(_IconSpeaker2Line, {
  install: (app: App) => {
    app.component(_IconSpeaker2Line.name, _IconSpeaker2Line);
  }
});

export default IconSpeaker2Line;
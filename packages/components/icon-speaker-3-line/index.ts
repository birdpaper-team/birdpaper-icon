import type { App } from 'vue';
import _IconSpeaker3Line from './icon-speaker-3-line.vue';

const IconSpeaker3Line = Object.assign(_IconSpeaker3Line, {
  install: (app: App) => {
    app.component(_IconSpeaker3Line.name, _IconSpeaker3Line);
  }
});

export default IconSpeaker3Line;
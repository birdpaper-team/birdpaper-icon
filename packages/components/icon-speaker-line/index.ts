import type { App } from 'vue';
import _IconSpeakerLine from './icon-speaker-line.vue';

const IconSpeakerLine = Object.assign(_IconSpeakerLine, {
  install: (app: App) => {
    app.component(_IconSpeakerLine.name, _IconSpeakerLine);
  }
});

export default IconSpeakerLine;
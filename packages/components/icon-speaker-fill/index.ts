import type { App } from 'vue';
import _IconSpeakerFill from './icon-speaker-fill.vue';

const IconSpeakerFill = Object.assign(_IconSpeakerFill, {
  install: (app: App) => {
    app.component(_IconSpeakerFill.name, _IconSpeakerFill);
  }
});

export default IconSpeakerFill;
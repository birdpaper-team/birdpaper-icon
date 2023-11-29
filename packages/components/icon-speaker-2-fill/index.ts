import type { App } from 'vue';
import _IconSpeaker2Fill from './icon-speaker-2-fill.vue';

const IconSpeaker2Fill = Object.assign(_IconSpeaker2Fill, {
  install: (app: App) => {
    app.component(_IconSpeaker2Fill.name, _IconSpeaker2Fill);
  }
});

export default IconSpeaker2Fill;
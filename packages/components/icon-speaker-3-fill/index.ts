import type { App } from 'vue';
import _IconSpeaker3Fill from './icon-speaker-3-fill.vue';

const IconSpeaker3Fill = Object.assign(_IconSpeaker3Fill, {
  install: (app: App) => {
    app.component(_IconSpeaker3Fill.name, _IconSpeaker3Fill);
  }
});

export default IconSpeaker3Fill;
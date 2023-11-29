import type { App } from 'vue';
import _IconSpeaker from './icon-speaker.vue';

const IconSpeaker = Object.assign(_IconSpeaker, {
  install: (app: App) => {
    app.component(_IconSpeaker.name, _IconSpeaker);
  }
});

export default IconSpeaker;
import type { App } from 'vue';
import _IconSpeakFill from './icon-speak-fill.vue';

const IconSpeakFill = Object.assign(_IconSpeakFill, {
  install: (app: App) => {
    app.component(_IconSpeakFill.name, _IconSpeakFill);
  }
});

export default IconSpeakFill;
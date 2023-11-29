import type { App } from 'vue';
import _IconSpeakLine from './icon-speak-line.vue';

const IconSpeakLine = Object.assign(_IconSpeakLine, {
  install: (app: App) => {
    app.component(_IconSpeakLine.name, _IconSpeakLine);
  }
});

export default IconSpeakLine;
import type { App } from 'vue';
import _IconVoiceprintLine from './icon-voiceprint-line.vue';

const IconVoiceprintLine = Object.assign(_IconVoiceprintLine, {
  install: (app: App) => {
    app.component(_IconVoiceprintLine.name, _IconVoiceprintLine);
  }
});

export default IconVoiceprintLine;
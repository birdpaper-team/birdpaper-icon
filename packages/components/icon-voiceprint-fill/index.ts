import type { App } from 'vue';
import _IconVoiceprintFill from './icon-voiceprint-fill.vue';

const IconVoiceprintFill = Object.assign(_IconVoiceprintFill, {
  install: (app: App) => {
    app.component(_IconVoiceprintFill.name, _IconVoiceprintFill);
  }
});

export default IconVoiceprintFill;
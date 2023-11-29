import type { App } from 'vue';
import _IconRoundDistortion from './icon-round-distortion.vue';

const IconRoundDistortion = Object.assign(_IconRoundDistortion, {
  install: (app: App) => {
    app.component(_IconRoundDistortion.name, _IconRoundDistortion);
  }
});

export default IconRoundDistortion;
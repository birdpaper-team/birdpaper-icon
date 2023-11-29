import type { App } from 'vue';
import _IconHairClip from './icon-hair-clip.vue';

const IconHairClip = Object.assign(_IconHairClip, {
  install: (app: App) => {
    app.component(_IconHairClip.name, _IconHairClip);
  }
});

export default IconHairClip;
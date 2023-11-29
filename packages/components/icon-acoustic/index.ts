import type { App } from 'vue';
import _IconAcoustic from './icon-acoustic.vue';

const IconAcoustic = Object.assign(_IconAcoustic, {
  install: (app: App) => {
    app.component(_IconAcoustic.name, _IconAcoustic);
  }
});

export default IconAcoustic;
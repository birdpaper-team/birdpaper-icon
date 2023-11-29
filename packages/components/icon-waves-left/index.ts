import type { App } from 'vue';
import _IconWavesLeft from './icon-waves-left.vue';

const IconWavesLeft = Object.assign(_IconWavesLeft, {
  install: (app: App) => {
    app.component(_IconWavesLeft.name, _IconWavesLeft);
  }
});

export default IconWavesLeft;
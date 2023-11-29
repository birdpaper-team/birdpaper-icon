import type { App } from 'vue';
import _IconFerrisWheel from './icon-ferris-wheel.vue';

const IconFerrisWheel = Object.assign(_IconFerrisWheel, {
  install: (app: App) => {
    app.component(_IconFerrisWheel.name, _IconFerrisWheel);
  }
});

export default IconFerrisWheel;
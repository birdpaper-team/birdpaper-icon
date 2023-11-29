import type { App } from 'vue';
import _IconSpeedMiniFill from './icon-speed-mini-fill.vue';

const IconSpeedMiniFill = Object.assign(_IconSpeedMiniFill, {
  install: (app: App) => {
    app.component(_IconSpeedMiniFill.name, _IconSpeedMiniFill);
  }
});

export default IconSpeedMiniFill;
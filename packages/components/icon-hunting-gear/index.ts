import type { App } from 'vue';
import _IconHuntingGear from './icon-hunting-gear.vue';

const IconHuntingGear = Object.assign(_IconHuntingGear, {
  install: (app: App) => {
    app.component(_IconHuntingGear.name, _IconHuntingGear);
  }
});

export default IconHuntingGear;
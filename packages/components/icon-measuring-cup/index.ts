import type { App } from 'vue';
import _IconMeasuringCup from './icon-measuring-cup.vue';

const IconMeasuringCup = Object.assign(_IconMeasuringCup, {
  install: (app: App) => {
    app.component(_IconMeasuringCup.name, _IconMeasuringCup);
  }
});

export default IconMeasuringCup;
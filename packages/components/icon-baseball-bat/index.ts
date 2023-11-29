import type { App } from 'vue';
import _IconBaseballBat from './icon-baseball-bat.vue';

const IconBaseballBat = Object.assign(_IconBaseballBat, {
  install: (app: App) => {
    app.component(_IconBaseballBat.name, _IconBaseballBat);
  }
});

export default IconBaseballBat;
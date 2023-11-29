import type { App } from 'vue';
import _IconKoalaBear from './icon-koala-bear.vue';

const IconKoalaBear = Object.assign(_IconKoalaBear, {
  install: (app: App) => {
    app.component(_IconKoalaBear.name, _IconKoalaBear);
  }
});

export default IconKoalaBear;
import type { App } from 'vue';
import _IconWomenCoat from './icon-women-coat.vue';

const IconWomenCoat = Object.assign(_IconWomenCoat, {
  install: (app: App) => {
    app.component(_IconWomenCoat.name, _IconWomenCoat);
  }
});

export default IconWomenCoat;
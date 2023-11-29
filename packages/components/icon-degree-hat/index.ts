import type { App } from 'vue';
import _IconDegreeHat from './icon-degree-hat.vue';

const IconDegreeHat = Object.assign(_IconDegreeHat, {
  install: (app: App) => {
    app.component(_IconDegreeHat.name, _IconDegreeHat);
  }
});

export default IconDegreeHat;
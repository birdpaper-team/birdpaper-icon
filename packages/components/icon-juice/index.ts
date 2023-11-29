import type { App } from 'vue';
import _IconJuice from './icon-juice.vue';

const IconJuice = Object.assign(_IconJuice, {
  install: (app: App) => {
    app.component(_IconJuice.name, _IconJuice);
  }
});

export default IconJuice;
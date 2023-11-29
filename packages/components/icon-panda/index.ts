import type { App } from 'vue';
import _IconPanda from './icon-panda.vue';

const IconPanda = Object.assign(_IconPanda, {
  install: (app: App) => {
    app.component(_IconPanda.name, _IconPanda);
  }
});

export default IconPanda;
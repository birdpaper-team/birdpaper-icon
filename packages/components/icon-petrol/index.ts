import type { App } from 'vue';
import _IconPetrol from './icon-petrol.vue';

const IconPetrol = Object.assign(_IconPetrol, {
  install: (app: App) => {
    app.component(_IconPetrol.name, _IconPetrol);
  }
});

export default IconPetrol;
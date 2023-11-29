import type { App } from 'vue';
import _IconPokeballOne from './icon-pokeball-one.vue';

const IconPokeballOne = Object.assign(_IconPokeballOne, {
  install: (app: App) => {
    app.component(_IconPokeballOne.name, _IconPokeballOne);
  }
});

export default IconPokeballOne;
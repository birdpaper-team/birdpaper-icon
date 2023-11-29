import type { App } from 'vue';
import _IconLiqueur from './icon-liqueur.vue';

const IconLiqueur = Object.assign(_IconLiqueur, {
  install: (app: App) => {
    app.component(_IconLiqueur.name, _IconLiqueur);
  }
});

export default IconLiqueur;
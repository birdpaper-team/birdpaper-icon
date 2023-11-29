import type { App } from 'vue';
import _IconBeachUmbrella from './icon-beach-umbrella.vue';

const IconBeachUmbrella = Object.assign(_IconBeachUmbrella, {
  install: (app: App) => {
    app.component(_IconBeachUmbrella.name, _IconBeachUmbrella);
  }
});

export default IconBeachUmbrella;
import type { App } from 'vue';
import _IconUmbrella from './icon-umbrella.vue';

const IconUmbrella = Object.assign(_IconUmbrella, {
  install: (app: App) => {
    app.component(_IconUmbrella.name, _IconUmbrella);
  }
});

export default IconUmbrella;
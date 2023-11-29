import type { App } from 'vue';
import _IconBanana from './icon-banana.vue';

const IconBanana = Object.assign(_IconBanana, {
  install: (app: App) => {
    app.component(_IconBanana.name, _IconBanana);
  }
});

export default IconBanana;
import type { App } from 'vue';
import _IconTomato from './icon-tomato.vue';

const IconTomato = Object.assign(_IconTomato, {
  install: (app: App) => {
    app.component(_IconTomato.name, _IconTomato);
  }
});

export default IconTomato;
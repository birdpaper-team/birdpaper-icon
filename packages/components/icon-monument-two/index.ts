import type { App } from 'vue';
import _IconMonumentTwo from './icon-monument-two.vue';

const IconMonumentTwo = Object.assign(_IconMonumentTwo, {
  install: (app: App) => {
    app.component(_IconMonumentTwo.name, _IconMonumentTwo);
  }
});

export default IconMonumentTwo;
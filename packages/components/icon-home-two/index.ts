import type { App } from 'vue';
import _IconHomeTwo from './icon-home-two.vue';

const IconHomeTwo = Object.assign(_IconHomeTwo, {
  install: (app: App) => {
    app.component(_IconHomeTwo.name, _IconHomeTwo);
  }
});

export default IconHomeTwo;
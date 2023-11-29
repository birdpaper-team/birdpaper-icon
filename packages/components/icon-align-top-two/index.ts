import type { App } from 'vue';
import _IconAlignTopTwo from './icon-align-top-two.vue';

const IconAlignTopTwo = Object.assign(_IconAlignTopTwo, {
  install: (app: App) => {
    app.component(_IconAlignTopTwo.name, _IconAlignTopTwo);
  }
});

export default IconAlignTopTwo;
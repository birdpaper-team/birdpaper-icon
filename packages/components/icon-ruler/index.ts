import type { App } from 'vue';
import _IconRuler from './icon-ruler.vue';

const IconRuler = Object.assign(_IconRuler, {
  install: (app: App) => {
    app.component(_IconRuler.name, _IconRuler);
  }
});

export default IconRuler;
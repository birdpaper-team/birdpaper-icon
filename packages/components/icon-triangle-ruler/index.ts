import type { App } from 'vue';
import _IconTriangleRuler from './icon-triangle-ruler.vue';

const IconTriangleRuler = Object.assign(_IconTriangleRuler, {
  install: (app: App) => {
    app.component(_IconTriangleRuler.name, _IconTriangleRuler);
  }
});

export default IconTriangleRuler;
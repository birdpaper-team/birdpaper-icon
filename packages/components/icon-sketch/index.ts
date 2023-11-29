import type { App } from 'vue';
import _IconSketch from './icon-sketch.vue';

const IconSketch = Object.assign(_IconSketch, {
  install: (app: App) => {
    app.component(_IconSketch.name, _IconSketch);
  }
});

export default IconSketch;
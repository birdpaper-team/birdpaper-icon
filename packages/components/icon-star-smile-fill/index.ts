import type { App } from 'vue';
import _IconStarSmileFill from './icon-star-smile-fill.vue';

const IconStarSmileFill = Object.assign(_IconStarSmileFill, {
  install: (app: App) => {
    app.component(_IconStarSmileFill.name, _IconStarSmileFill);
  }
});

export default IconStarSmileFill;
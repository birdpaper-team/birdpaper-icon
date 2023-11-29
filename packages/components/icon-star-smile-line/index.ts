import type { App } from 'vue';
import _IconStarSmileLine from './icon-star-smile-line.vue';

const IconStarSmileLine = Object.assign(_IconStarSmileLine, {
  install: (app: App) => {
    app.component(_IconStarSmileLine.name, _IconStarSmileLine);
  }
});

export default IconStarSmileLine;
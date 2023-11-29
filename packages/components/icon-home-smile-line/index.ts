import type { App } from 'vue';
import _IconHomeSmileLine from './icon-home-smile-line.vue';

const IconHomeSmileLine = Object.assign(_IconHomeSmileLine, {
  install: (app: App) => {
    app.component(_IconHomeSmileLine.name, _IconHomeSmileLine);
  }
});

export default IconHomeSmileLine;
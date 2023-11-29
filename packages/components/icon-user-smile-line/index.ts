import type { App } from 'vue';
import _IconUserSmileLine from './icon-user-smile-line.vue';

const IconUserSmileLine = Object.assign(_IconUserSmileLine, {
  install: (app: App) => {
    app.component(_IconUserSmileLine.name, _IconUserSmileLine);
  }
});

export default IconUserSmileLine;
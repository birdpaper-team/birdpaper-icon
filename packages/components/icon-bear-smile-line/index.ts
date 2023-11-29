import type { App } from 'vue';
import _IconBearSmileLine from './icon-bear-smile-line.vue';

const IconBearSmileLine = Object.assign(_IconBearSmileLine, {
  install: (app: App) => {
    app.component(_IconBearSmileLine.name, _IconBearSmileLine);
  }
});

export default IconBearSmileLine;
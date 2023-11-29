import type { App } from 'vue';
import _IconBearSmileFill from './icon-bear-smile-fill.vue';

const IconBearSmileFill = Object.assign(_IconBearSmileFill, {
  install: (app: App) => {
    app.component(_IconBearSmileFill.name, _IconBearSmileFill);
  }
});

export default IconBearSmileFill;
import type { App } from 'vue';
import _IconVidicon2Fill from './icon-vidicon-2-fill.vue';

const IconVidicon2Fill = Object.assign(_IconVidicon2Fill, {
  install: (app: App) => {
    app.component(_IconVidicon2Fill.name, _IconVidicon2Fill);
  }
});

export default IconVidicon2Fill;
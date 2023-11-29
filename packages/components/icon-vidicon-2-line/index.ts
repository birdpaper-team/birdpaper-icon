import type { App } from 'vue';
import _IconVidicon2Line from './icon-vidicon-2-line.vue';

const IconVidicon2Line = Object.assign(_IconVidicon2Line, {
  install: (app: App) => {
    app.component(_IconVidicon2Line.name, _IconVidicon2Line);
  }
});

export default IconVidicon2Line;
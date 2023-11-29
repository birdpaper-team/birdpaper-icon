import type { App } from 'vue';
import _IconTv2Line from './icon-tv-2-line.vue';

const IconTv2Line = Object.assign(_IconTv2Line, {
  install: (app: App) => {
    app.component(_IconTv2Line.name, _IconTv2Line);
  }
});

export default IconTv2Line;
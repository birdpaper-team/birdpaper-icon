import type { App } from 'vue';
import _IconProhibited2Line from './icon-prohibited-2-line.vue';

const IconProhibited2Line = Object.assign(_IconProhibited2Line, {
  install: (app: App) => {
    app.component(_IconProhibited2Line.name, _IconProhibited2Line);
  }
});

export default IconProhibited2Line;
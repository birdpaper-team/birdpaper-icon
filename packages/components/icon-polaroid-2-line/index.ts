import type { App } from 'vue';
import _IconPolaroid2Line from './icon-polaroid-2-line.vue';

const IconPolaroid2Line = Object.assign(_IconPolaroid2Line, {
  install: (app: App) => {
    app.component(_IconPolaroid2Line.name, _IconPolaroid2Line);
  }
});

export default IconPolaroid2Line;
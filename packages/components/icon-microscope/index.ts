import type { App } from 'vue';
import _IconMicroscope from './icon-microscope.vue';

const IconMicroscope = Object.assign(_IconMicroscope, {
  install: (app: App) => {
    app.component(_IconMicroscope.name, _IconMicroscope);
  }
});

export default IconMicroscope;
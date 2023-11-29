import type { App } from 'vue';
import _IconSkipForwardFill from './icon-skip-forward-fill.vue';

const IconSkipForwardFill = Object.assign(_IconSkipForwardFill, {
  install: (app: App) => {
    app.component(_IconSkipForwardFill.name, _IconSkipForwardFill);
  }
});

export default IconSkipForwardFill;
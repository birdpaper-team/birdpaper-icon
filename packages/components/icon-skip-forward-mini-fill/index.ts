import type { App } from 'vue';
import _IconSkipForwardMiniFill from './icon-skip-forward-mini-fill.vue';

const IconSkipForwardMiniFill = Object.assign(_IconSkipForwardMiniFill, {
  install: (app: App) => {
    app.component(_IconSkipForwardMiniFill.name, _IconSkipForwardMiniFill);
  }
});

export default IconSkipForwardMiniFill;
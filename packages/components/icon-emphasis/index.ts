import type { App } from 'vue';
import _IconEmphasis from './icon-emphasis.vue';

const IconEmphasis = Object.assign(_IconEmphasis, {
  install: (app: App) => {
    app.component(_IconEmphasis.name, _IconEmphasis);
  }
});

export default IconEmphasis;
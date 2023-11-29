import type { App } from 'vue';
import _IconHonourFill from './icon-honour-fill.vue';

const IconHonourFill = Object.assign(_IconHonourFill, {
  install: (app: App) => {
    app.component(_IconHonourFill.name, _IconHonourFill);
  }
});

export default IconHonourFill;
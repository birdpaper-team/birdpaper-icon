import type { App } from 'vue';
import _IconChip from './icon-chip.vue';

const IconChip = Object.assign(_IconChip, {
  install: (app: App) => {
    app.component(_IconChip.name, _IconChip);
  }
});

export default IconChip;
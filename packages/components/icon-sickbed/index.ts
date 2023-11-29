import type { App } from 'vue';
import _IconSickbed from './icon-sickbed.vue';

const IconSickbed = Object.assign(_IconSickbed, {
  install: (app: App) => {
    app.component(_IconSickbed.name, _IconSickbed);
  }
});

export default IconSickbed;
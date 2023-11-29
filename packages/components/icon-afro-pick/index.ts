import type { App } from 'vue';
import _IconAfroPick from './icon-afro-pick.vue';

const IconAfroPick = Object.assign(_IconAfroPick, {
  install: (app: App) => {
    app.component(_IconAfroPick.name, _IconAfroPick);
  }
});

export default IconAfroPick;
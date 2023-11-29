import type { App } from 'vue';
import _IconSurgicalMaskLine from './icon-surgical-mask-line.vue';

const IconSurgicalMaskLine = Object.assign(_IconSurgicalMaskLine, {
  install: (app: App) => {
    app.component(_IconSurgicalMaskLine.name, _IconSurgicalMaskLine);
  }
});

export default IconSurgicalMaskLine;
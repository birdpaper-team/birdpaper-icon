import type { App } from 'vue';
import _IconSvelteLine from './icon-svelte-line.vue';

const IconSvelteLine = Object.assign(_IconSvelteLine, {
  install: (app: App) => {
    app.component(_IconSvelteLine.name, _IconSvelteLine);
  }
});

export default IconSvelteLine;
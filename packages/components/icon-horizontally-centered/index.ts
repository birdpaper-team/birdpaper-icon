import type { App } from 'vue';
import _IconHorizontallyCentered from './icon-horizontally-centered.vue';

const IconHorizontallyCentered = Object.assign(_IconHorizontallyCentered, {
  install: (app: App) => {
    app.component(_IconHorizontallyCentered.name, _IconHorizontallyCentered);
  }
});

export default IconHorizontallyCentered;
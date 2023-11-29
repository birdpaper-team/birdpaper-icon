import type { App } from 'vue';
import _IconVerticallyCentered from './icon-vertically-centered.vue';

const IconVerticallyCentered = Object.assign(_IconVerticallyCentered, {
  install: (app: App) => {
    app.component(_IconVerticallyCentered.name, _IconVerticallyCentered);
  }
});

export default IconVerticallyCentered;
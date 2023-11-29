import type { App } from 'vue';
import _IconOffScreen from './icon-off-screen.vue';

const IconOffScreen = Object.assign(_IconOffScreen, {
  install: (app: App) => {
    app.component(_IconOffScreen.name, _IconOffScreen);
  }
});

export default IconOffScreen;
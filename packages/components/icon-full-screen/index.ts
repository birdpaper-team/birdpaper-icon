import type { App } from 'vue';
import _IconFullScreen from './icon-full-screen.vue';

const IconFullScreen = Object.assign(_IconFullScreen, {
  install: (app: App) => {
    app.component(_IconFullScreen.name, _IconFullScreen);
  }
});

export default IconFullScreen;
import type { App } from 'vue';
import _IconBrowser from './icon-browser.vue';

const IconBrowser = Object.assign(_IconBrowser, {
  install: (app: App) => {
    app.component(_IconBrowser.name, _IconBrowser);
  }
});

export default IconBrowser;
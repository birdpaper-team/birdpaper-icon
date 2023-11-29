import type { App } from 'vue';
import _IconBrowserSafari from './icon-browser-safari.vue';

const IconBrowserSafari = Object.assign(_IconBrowserSafari, {
  install: (app: App) => {
    app.component(_IconBrowserSafari.name, _IconBrowserSafari);
  }
});

export default IconBrowserSafari;
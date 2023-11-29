import type { App } from 'vue';
import _IconComponent from './icon-component.vue';

const IconComponent = Object.assign(_IconComponent, {
  install: (app: App) => {
    app.component(_IconComponent.name, _IconComponent);
  }
});

export default IconComponent;
import type { App } from 'vue';
import _IconGraphicDesignTwo from './icon-graphic-design-two.vue';

const IconGraphicDesignTwo = Object.assign(_IconGraphicDesignTwo, {
  install: (app: App) => {
    app.component(_IconGraphicDesignTwo.name, _IconGraphicDesignTwo);
  }
});

export default IconGraphicDesignTwo;
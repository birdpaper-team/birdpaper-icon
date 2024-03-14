import type { App } from 'vue';
import _IconSnowflakeFill from './icon-snowflake-fill.vue';

const IconSnowflakeFill = Object.assign(_IconSnowflakeFill, {
  install: (app: App) => {
    app.component(_IconSnowflakeFill.name, _IconSnowflakeFill);
  }
});

export default IconSnowflakeFill;
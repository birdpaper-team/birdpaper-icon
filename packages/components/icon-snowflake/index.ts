import type { App } from 'vue';
import _IconSnowflake from './icon-snowflake.vue';

const IconSnowflake = Object.assign(_IconSnowflake, {
  install: (app: App) => {
    app.component(_IconSnowflake.name, _IconSnowflake);
  }
});

export default IconSnowflake;
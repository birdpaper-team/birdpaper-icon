import type { App, Component } from "vue";

export const installer = (components: Component[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => {
      if (c.name) {
        app.component(c.name, c);
      }
    });
  };

  return {
    version: "1.0.0",
    install,
  };
};

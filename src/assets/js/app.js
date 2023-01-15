import { router } from "./router";

const mountView = (app, view) => {
  router[view].template(app);
};

export const createApp = () => {
  console.log("App created");
  const app = document.querySelector("#app");

  document.addEventListener("switch-view", (evt) => {
    mountView(app, evt);
  });
};

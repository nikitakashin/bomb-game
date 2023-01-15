import { router } from "./router";

const mountView = (app, view) => {
  app.innerHTML = router[view].template();
};

export const createApp = () => {
  console.log("App created");
  const app = document.querySelector("#app");

  document.addEventListener("switch-view", (evt) => {
    mountView(app, evt);
  });
};

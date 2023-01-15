import mainMenu from "./views/mainMenu";
import gameField from "./views/gameField";
import scoreTable from "./views/gameField";

export const router = {
  mainMenu: {
    template: (app) => {
      return mainMenu(app);
    },
  },
  scoreTable: {
    template: (app) => {
      return scoreTable(app);
    },
  },
  gameField: {
    template: (app) => {
      return gameField(app);
    },
  },
};

export const goTo = (view) => {
  document.dispatchEvent("switch-view", view);
};

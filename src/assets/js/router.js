import mainMenu from "./views/mainMenu";
import gameField from "./views/gameField";
import scoreTable from "./views/gameField";

export const router = {
  mainMenu: {
    template: () => {
      return mainMenu();
    },
  },
  scoreTable: {
    template: () => {
      return scoreTable();
    },
  },
  gameField: {
    template: () => {
      return gameField();
    },
  },
};

export const goTo = (view) => {
  document.dispatchEvent("switch-view", view);
};

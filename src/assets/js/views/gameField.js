import { mdiBomb } from "@mdi/js";
import BaseIcon from "../components/BaseIcon";

const iconBomb = BaseIcon({
  icon: mdiBomb,
  size: 48,
});

let template = html` ${iconBomb} `;

export default function (app) {
  app.innerHTML = template;
}

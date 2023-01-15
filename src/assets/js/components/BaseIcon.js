export default function (props) {
  const icon = props.icon || "";
  const size = props.size || 24;
  const color = props.color || "black";

  return html`
    <svg
      class="base-icon"
      style="vertical-align: bottom;"
      xmlns="http://www.w3.org/2000/svg"
      width="${size}"
      height="${size}"
      viewBox="0 0 24 24"
    >
      <g fill="${color}">
        <path :d="${icon}" />
      </g>
    </svg>
  `;
}

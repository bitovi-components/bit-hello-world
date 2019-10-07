import { StacheElement } from "//unpkg.com/can@6/core.mjs";

export default class HelloWorld extends StacheElement {
  static view = `<h1>{{greeting}} world!</h1>`;

  static props = {
    greeting: { default: "Hello" }
  };
}

customElements.define("hello-world", HelloWorld);

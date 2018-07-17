import {Component} from "//unpkg.com/can@5/core.mjs";

export default Component.extend({
    tag: "hello-world",
    view: `<h1>{{greeting}} world!</h1>`,
    ViewModel: {
        greeting: {default: "Hello"}
    }
});

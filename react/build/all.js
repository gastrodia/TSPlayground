var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log(null);
define("src/T", ["require", "exports", 'react', 'react-dom'], function (require, exports, React, ReactDOM) {
    "use strict";
    var HelloMessage = (function (_super) {
        __extends(HelloMessage, _super);
        function HelloMessage() {
            _super.apply(this, arguments);
        }
        HelloMessage.prototype.render = function () {
            return React.createElement("div", null, "Hello ", this.props.name);
        };
        return HelloMessage;
    }(React.Component));
    ReactDOM.render(React.createElement(HelloMessage, {name: "John"}), document.getElementById('app'));
});
define("src/TodoTextInput", ["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    var TodoTextInput = (function (_super) {
        __extends(TodoTextInput, _super);
        function TodoTextInput() {
            _super.apply(this, arguments);
        }
        TodoTextInput.prototype.render = function () {
            return React.createElement("div", null, "Hello");
        };
        return TodoTextInput;
    }(React.Component));
});

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
        function HelloMessage(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.state = {
                items: [
                    {
                        url: 'http://owenyang0.github.io/images/mocha.png',
                        caption: 'Mocha'
                    }
                ]
            };
            setInterval(function () {
                _this.state.items.push({
                    url: 'http://owenyang0.github.io/images/mocha.png',
                    caption: 'Mocha' + Math.random()
                });
                console.log(_this.state.items);
                _this.forceUpdate();
            }, 100);
        }
        HelloMessage.prototype.render = function () {
            var photos = [];
            this.state.items.map(function (photo) {
                photos.push(React.createElement("img", {src: photo.url, caption: photo.caption, key: photo.caption}));
            });
            return (React.createElement("div", {className: 'photo-gallery'}, photos));
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

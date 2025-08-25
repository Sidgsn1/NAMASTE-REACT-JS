const parent = React.createElement(
    "div",
    {
        id: "parent",
    },
    [
        React.createElement(
            "div",
            {
                id: "child1",
            },
            [
                React.createElement("h1", {}, "hello world from react!"),
                React.createElement("h2", {}, "hello world from react!"),
            ]
        ),
        React.createElement(
            "div",
            {
                id: "child2"
            },
            [
                React.createElement("h1", {}, "hello world from react2"),
                React.createElement("h2", {}, "hello world from react2")
            ]
        )
    ]
);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world by React!"
// );
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);

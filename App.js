const parent = React.createElement("dev", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "Hello from h1 tag"),
        React.createElement("h2",{},"hello from h2 tag"),
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "Hello from h1 tag"),
        React.createElement("h2",{},"hello from h3 tag")
    ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// Task - 1 display "Hello Namaste React!"" in h1 element having id as "heading-1" in green color using React

//way - 1
//var heading_element = React.createElement("h1", {id: "heading-1", style: { color: "green" }}, "Hello Namaste React!");

//way - 2 (using external css file)
// const heading_element = React.createElement("h1", { id: "heading-1", className: "heading-class" }, "Hello Namaste React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading_element);

// Task - 2 create a structure like 
{/* <div id="parent">
    <div id="child">
        <h1>Hello</h1>
    </div>
</div> */}

//way - 1
// const h1 = React.createElement("h1", {}, "Hello");
// const child = React.createElement("div", { id: "child" }, h1);
// const parent = React.createElement("div", { id: "parent" }, child);


//way - 2
// const parent = React.createElement(
//     "div", 
//     { id: "parent" }, 
//     React.createElement(
//         "div", 
//         { id: "child" }, 
//         React.createElement(
//             "h1", 
//             {}, 
//             "Hello"
//         )
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// Task - 3 create a structure like 
{/* <div id="parent">
    <div id="child">
        <h1>Hello</h1>
        <h3>Hello 3</h3>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1",
                {},
                "Hello"
            ),
            React.createElement(
                "h3",
                {},
                "Hello 3"
            )
        ]
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
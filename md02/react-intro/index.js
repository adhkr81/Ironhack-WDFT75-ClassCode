// Sem React

// const root = document.getElementById("root");
// const title = document.createElement("h1");
// title.innerText = "Hello world!";

// root.appendChild(title);

// Com React

const root = document.getElementById("root");

const element2 = React.createElement("p", {
  children: ["La la la la la la la la la"],
});

const element = React.createElement("h1", {
  className: "title",
  children: ["Hello!", element2],
});

ReactDOM.createRoot(root).render(element);

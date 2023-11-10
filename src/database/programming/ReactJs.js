import image from "../../assets/code.png";
import react1c from "../../assets/articleimg/react1c.png"
import author from "../../assets/authors/jachike.png"
export const ReactJs = {
  id: "react1",
  title: "Basics of REACT JS",
  category: "coding",
  section: "p",
  coverimg: react1c,
  description: "fundamental concept of REACT JS",
  author: "Jachike Victor",
  authorimg: author,
  link: "/article",
  date: "Feb 12, 2023",
  duration: "7 min read",
  intro: {
    header: "intro",
    content: "this will cover the basic of react only",
    list: [],
    note: {
      header: "NOTE:",
      text: "you need a proir knowledge of html, css and javascript to continue with this course, check out our other courses if not familiar",
    },
    img: [],
  },
  table: {
    header: "Table of content",
    list: [
      { name: "REACT JS", link: "#sec1" },
      { name: "Basic and features of react", link: "#sec2" },
      { name: "Props and state in react", link: "#sec3" },
      { name: "Conditional rendering", link: "#sec4" },
      { name: "Hooks", link: "#sec5" },
      { name: "Conclusion", link: "#sec6" },
    ],
  },
  sections: [
    // sec1
    {
      id: "sec1",
      header: "REACT JS",
      content:
        "React (also known as React.js or ReactJS ) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It can also be described as a declarative, efficient, and flexible JavaScript library for building user interfaces. You need to know HTML, CSS and most important; JavaScript before embarking on React",
      list: [
        "Initial release date: 29 May 2013",

        "Platform: Web platform",

        "Developer(s): Meta and community",

        "Original author(s): Jordan Walke",
      ],
      note: { header: null, text: null },
      img: [],
      // subsections
      subsection: [
        // subsec11
        {
          id: "subsec11",
          header: "The main purpose of REACT",
          content:
            "One of the main benefits of using React JS is its potential to reuse components and essentially used for building interactive user interfaces and web applications quickly and efficiently ",
          note: { header: "", text: "" },
          list: [],
          img: [],
          innersection: [],
        },
        // subsec12
        {
          id: "subsec12",
          header:
            "Ways to add react to an application or application of react:",
          content: "there are several ways to add react to an application",
          list: [],
          note: { header: "", text: "" },
          img: [],
          innersection: [
            {
              id: "insec121",
              header: "Add React to a Website",
              content:
                "You don’t have to build your whole website with React. Adding React to HTML doesn’t require installation, it means that you have an already existing website and will now create a component React library for it. Steps:",
              list: [
                "Step 1; Add a root HTML tag",

                "Step 2; Add the script tags",

                "Step 3; Create a React component",

                "Step 4; Add your React component to the page",

                " Step 5; Minify JavaScript for production",
              ],
              note: { header: "", text: "" },
              img: [],
              subheader: [],
            },
            {
              id: "insec122",
              header: "Create a new React App",
              content:
                "This is more like a tool to create a react application, it provides a comfortable environment for practicing React, and is a unique way to start building a new application in React. This automatically creates a JavaScript library on which your application depends on, your workspace is located in one of the folders called src which includes js files and another folder public which equally holds your html file to display the website. It sets up your development environment so that you can use the latest JavaScript features, and provides a nice developer experience. You’ll need to have Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run this on your terminal:",
              list: [
                "npx create-react-app my-app(name of app)",

                "cd my-app",

                "npm start",
              ],
              note: {},
              img: [],
              subheader: [],
            },
          ],
        },
      ],
    },
    //sec2
    {
      id: "sec2",
      header: "Basic features and concepts of React",
      content: "",
      list: [],
      note: {},
      img: [],
      // subsections
      subsection: [
        // subsec21
        {
          id: "subsec21",
          header: "React Element",
          content:
            "It is the basic building block in a react application, it is an object representation of a virtual DOM node.An element describes what you want to see on the screen. Syntax:",
          list: ["const element = <h1 > Hello, world</ h1 >;"],
          note: {},
          img: [],
          innersection: [],
        },
        // subsec22
        {
          id: "subsec22",
          header: "React component",
          content:
            "It is independent and reusable. It returns the virtual DOM of the element. One may or may not pass any parameter while creating a component. Basically, a react component is either a function or class that returns JSX, now JSX stands for JavaScript XML. JSX allows us to write HTML in React, and JSX makes it easier to write and add HTML in React. A component can be further described into ",
          list: ["functional components", "class components"],
          note: {},
          img: [],
          innersection: [
            {
              id: "innersec221",
              header: "Functional component",
              content:
                "A React functional component is a simple JavaScript function that accepts props and returns a React element. This component is defined as a function and makes use of a hook since it can not make use of a state. Syntax:",
              list: ["function name (){", "return", "(<div>Hi<div>)", "}"],
              note: {},
              img: [],
              subheader: [],
            },
            {
              id: "innersec222",
              header: "Class component",
              content:
                "this kind of component is defined as a class and is able to make use of state. Syntax:",
              list: [
                "class Hello extends React. Component",
                "render () {",
                "}",
                "}",
              ],
              note: {},
              img: [],
              subheader: [],
            },
          ],
        },
      ],
    },
    //sec3
    {
      id: "sec3",
      header: "Props and state in React:",
      content: "",
      list: [],
      note: {},
      img: [],
      // subection
      subsection: [
        // subsec31
        {
          id: "subsec31",
          header: "Props",
          content:
            " How we can modify a component by props(properties): This means that you can alter the properties of a component in other words, it's used to change the value of the properties of a component by the keyword props. Syntax:",
          list: [
            "Function app(props){",
            "return {",
            " <p>(Props.name)</p>",
            "]",
            "]",
            "//When rendered, it takes any value it's given;",
            '<app name=("jachx")>',
          ],
          note: {},
          img: [],
          innersection: [],
        },
        // subsec32
        {
          id: "subsec32",
          header: "State in React",
          content:
            "the state is an instance of react component class that can be defined as an object of a set of observable properties that control the behavior of the component. it is also a built-in react object that is used to contain data or information about the class component.Syntax:",
          list: [
            "class Car extends React. Component",
            "//Specify the state object in the constructor method:",
            "constructor ( props ) {",
            "super( props)",
            'this.state = { brand: "Ford" };',
            "}",
            "render () {",
            "return (",
            "< div >",
            "< h1 > My Car </ h1 >",
            "//Using the state Object",
            "//Refer to the state object anywhere in the component by using the",
            "//this.state. propertyname",
            "//syntax:",
            "< h1 > My { this.state.brand}<h1/>",
            "< p >It is a { this.state.color },{ this.state.model}from { this.state.year } .</ p >",
            "</ div > );",
            "     }",
            "}",
          ],
          note: {},
          img: [],
          innersection: [
            {
              id: "innersec321",
              header: "Changing the state Object;",
              content:
                "When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s). Always use the setState() method to change the state object, it will ensure that the component knows it's been updated and calls the render() method (and all the other lifecycle methods).Example: Add a button with an onClick event that will change the color property; syntax:",
              list: [
                "class Car extends React. Component",

                "constructor ( props ) {",

                "super( props);",

                "this . state = {",

                'brand : "Ford" ,',

                'model : "Mustang" ,',

                'color : "red" ,',

                "year : 1964",

                "};",

                " } ",

                "changeColor = () => {",

                'this.setState ({ color: "blue" }',

                "}",

                "render () {",

                "return (",

                " < div > ",

                "< h1 > My {this.state.brand} <h1/>",

                "< p > It is a { this.state.color},{ this.state.model}from { this.state.year } .</ p > ",

                '< button type =" button" onClick={this.changeColor} > Change color </ button >',

                "</ div >); ",

                "}",

                "}",
              ],
              note: {},
              img: [],
              subheader: [],
            },
          ],
        },
        //subsec33
        {
          id: "subsec33",
          header: "difference between props and state",
          content:
            "Props are immutable i.e. once set the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each changes States can be used in Class Components, and Functional components with the use of React Hooks (useState and other methods) while Props don’t have this limitation",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    // sec4
    {
      id: "sec4",
      header: "Conditional rendering in React",
      content:
        'The concept of conditional rendering says that you can render a particular JSX or element based on conditions, there are several ways to archive this such as using the if conditional statement just like in JavaScript and using the logical operator "&&" which will only be shown below. Syntax:',
      list: [
        "//A react element",

        "<P>welcome</p>",

        "//A variable above the return function",

        "const login =false; ",

        " //We now create a conditional rendering in the return method",

        "{Login && <p>welcome</p>} ",

        ' //This message will only display if login is set to "true" ',
      ],
      note: {},
      img: [],
      // subsections
      subsection: [
        // subsec41
        {
          id: "subsec41",
          header: "Keys",
          content:
            "A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists. Syntax:",
          list: [
            "const numbers = [ 1, 2, 3, 4, 5]",

            "//An error will occur in our console because a key is not added",

            "numbers.map(items=><li>{number}</li> ); ",

            "//By adding a key, every item is now unique",

            "numbers.map(items=><li key = {index}>{number}</li>);",
          ],
          note: {},
          img: [],
          // innersections
          innersection: [
            // innersec411
            {
              id: "innersec411",
              header: null,
              content:
                "Assuming we have two identical items in the list, this will equally return an error in our console, so we go further by applying another unique key Syntax:",
              list: [
                "const numbers = [ 1,1, 2, 3, 4, 5]",

                " numbers.map(items=><li key = {'numbers-&(index)}>{number} </li>);",
              ],
              note: {},
              img: [],
              subheader: [],
            },
          ],
        },
      ],
    },
    // sec5
    {
      id: "sec5",
      header: "Hooks",
      content:
        "React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side effects. Creating a usestatehook:",
      list: [
        "const (variable, setvariable)=usestate(value)",

        "Details:",

        "Variable=the variable that holds the value/data",

        "Setvariable=function that update the value taken in or to manage states",

        "Syntax:",

        "function Example() {",

        '// Declare a new state variable, which we\'ll call "count"',

        "const [ count, setCount ] = useState (0 );",

        "return (",

        "< div >",

        "< p > You clicked { count} times</ p >",

        "< button onClick={() =>setCount (count + 1 )}> Click me</ button > ",

        "</ div > ",

        "); ",

        "}",
      ],
      note: {
        header: "NOTE:",
        text: "There are many useful hooks in react that you will still like to learn about like: useEffect, useContext e.t.c ",
      },
      img: [],
      subsection: [],
    },
    //sec6
    {
      id: "sec6",
      header: "Conclusion",
      content:
        "React Js offers several benefits including fast performance, scalability, and ease of learning, which is why most people prefer to React over other JavaScript libraries. These only cover the fundamentals of React js partially, there's still more to learn.",
      list: [],
      note: {},
      img: [],
      // subsections
      subsection: [
        // subsec61
        {
          id: "subsec61",
          header: "",
          content:
            "A React application to help you understand more about React.js Hosted application:",
          list: [
            "jachvictor.github.io/Todo-list-react-app",

            "github repository: ",

            "https://github.com/jachvictor/Todo-list-react-app.git",
          ],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
  ],
};

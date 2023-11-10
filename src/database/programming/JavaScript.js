import image from "../../assets/code.png";
import js1c from "../../assets/articleimg/js1c.png";
import author from "../../assets/authors/jachike.png";


import js2c from "../../assets/articleimg/js2c.png";
import author2 from "../../assets/authors/tobby.png";
export const JavaScript = {
  id: "javascript1",
  title: "Introduction to JavaScript",
  category: "coding",
  section: "fr",
  coverimg: js1c,
  description: "Introduction to JavaScript: Basics of JavaScript",
  author: "Chukwu Jachike Victor",
  authorimg: author,
  link: "/article",
  date: "Dec 4, 2022",
  duration: "7 min read",
  intro: {
    header: "",
    content: "",
    list: [],
    note: {},
    img: [],
  },
  table: {
    header: "Table of content",
    list: [
      { name: "Javascript definition", link: "#sec1" },
      { name: "Fundamentals of javascript", link: "#sec2" },
      { name: "Operators", link: "#sec3" },
      { name: "Flow control", link: "#sec4" },
      { name: "Loops", link: "#sec5" },
      { name: "Function", link: "sec6" },
      { name: "Conclusion", link: "#sec7" },
    ],
  },
  resources: [{ header: "", text: "text", link: "" }],
  sections: [
    //sec1 JavaScript
    {
      id: "sec1",
      header: "JavaScript definitions",
      content:
        "JavaScript (JS) is a prototype base, high level, interpreted, multi-paradigm, single-threaded dynamic. To break all this down, JavaScript being prototype base means it allows machine of object without first defining its classes. It has lots of abstraction so you don't have to deal with memory management and co as a high-level language, by interpreted language it means it runs without compilation and can be written as either an object oriented or functional programming as a multi paradigm language. JavaScript also runs only one line of code at any given time as a single threaded language and finally, as a dynamic language; the interpreter assigns a type of variable at runtime based on the variable value at that time",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec11 uses of JavaScript
        {
          id: "subsec12",
          header: "uses of JavaScript",
          content:
            "Developers use JavaScript to build complex interactive websites and browser games, and to connect servers to websites and web applications. Because of this versatility, it's easy to see why this language is the most commonly used programming language in the world, so basically we can use JS for; Web development, Web applications, Mobile applications, Game, Presentation, Server applications, Web servers e.t.c .",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
        //subsec12 History of JavaScript
        {
          id: "subsec12",
          header: "History of JavaScript",
          content:
            "JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for Firefox browser. Mozilla's latest version was 1.8",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    }, //sec2 Fundamentals of JavaScript
    {
      id: "sec2",
      header: "Fundamentals of JavaScript",
      content:
        "In order to know and use JavaScript, you need to master its syntax. This fundamentals comprises of; variables, datatypes, operators, flow control, loops and functions",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec21 variables
        {
          id: "subsec21",
          header: "variables",
          content:
            "In every programming language, variables are used to store data(values) temporally in the computer's memory, it is also a pointer to a data stored in the computer's memory. There are three keywords for declaring variables in JavaScript; the var, let and const keyword.",
          list: [],
          note: {},
          img: [],
          innersection: [
            //innersec211
            {
              id: "innersec211",
              header: "Difference between var, let and const",
              content:
                "Let and const keywords came the new edition of JavaScript, so var was already there. Speaking about their difference; var variables are function-scoped, while let and const variables are block-scoped. Also, a const variable can't be redeclared",
              list: [
                "sample code:",
                'Var variable1="hello world";',

                'Let variable2="hello world"; ',

                'Const variable3="hello world";',

                "Console.log(variable1, variable2, variable3)",

                "*Output: hello world hello world hello world",

                "We have what is called concatenation in JS, it's for outputting a massage and various variable at once using the plus sign(+) Example:  ",

                'Const name = "John";',

                "Const age =34;",

                'Console.log("my name is "+name+", and I am"+age+" years old")',

                "*There is also what is called commenting in JS, when you comment, it means the interpreter will skip the code. We have single line and multiple line comments, the double forward slashes(//) is for single line while the forward slash and asterisk (/..../) is multiple line. This also help in code readability",
                "example:",
                "single line coment: //i know javascript!",
                "multiple line commrent: /*everyone likes javascript!*/",
              ],
              note: {
                header: "Note:",
                text: " console.log(...) Is used for outputting our code result and every line of code should end with a semicolon (;).",
              },
              img: [],
              subheader: [],
            },
          ],
        },
        //subsec22 datatypes
        {
          id: "subsec22",
          header: "datatypes",
          content:
            "Datatypes determines the type of data to held by our variables, it is a classification of data which tells the interpreter how the programmer Intends to use the data. We have the primitive and none primitive datatypes",
          list: [],
          note: {},
          img: [],
          innersection: [
            //innrsec221
            {
              id: "innrsec221",
              header: "primitive datatypes",
              content:
                "In JS, a primitive (primitive value and datatypes) is data that is not an object and has no methods or properties. We have the following under the primitive datatypes;string",
              list: [],
              note: {},
              img: [],
              subheader: [
                //subhead2211
                {
                  id: "subhead2211",
                  header: "string",
                  content:
                    "A string is a sequence of one or more characters that may consist of letters, numbers, or symbols",
                  list: ["code sample", 'Let name = "ifedili";'],
                  note: {
                    header: "Note:",
                    text: 'string values are written with double quotes ("")',
                  },
                  img: [],
                  subsection: [],
                },
                //subhead2212 number datatype
                {
                  id: "subhead2212",
                  header: "number datatype",
                  content:
                    "This is made of both integers and floating point numbers, it stores numbers in particular",
                  list: ["Code sample", "Let numbers= 12345;"],
                  note: {},
                  img: [],
                  subsection: [],
                },
                //subhead2213
                {
                  id: "subhead2213",
                  header: "boolean",
                  content:
                    'In JavaScript, a boolean holds a value that can either be TRUE or FALSE. If you need to know "yes" or"no" about something, then you would want to use the boolean function',
                  list: ["code sample", "Let answer= true;"],
                  note: {},
                  img: [],
                  subsection: [],
                },
                //subhead2214
                {
                  id: "subhead2214",
                  header: "undefined",
                  content:
                    "This deals with empty values, a variable that has not been assigned a value is of type undefined. A function also returns undefined if a value was not returned.",
                  list: [
                    "code sample :",

                    "Let emptyvalue=",

                    ",Or",

                    "Let emptyvalue=undefined",
                  ],
                  note: {},
                  img: [],
                  subsection: [],
                },
              ],
            },
            //innersec222 non-primitive datatypes
            {
              id: "innersec222",
              header: "non-primitive datatypes",
              content:
                "Non-primitive datatypes are also called reference datatypes or object references as they reference a memory location where data is stored. This consist of arrays and objects e.t.c",
              list: [],
              note: {},
              img: [],
              subheader: [
                //subheader2221 Objects
                {
                  id: "subheader2221",
                  header: "Objects",
                  content:
                    "An object is a standalone entity, with properties and type . We use objects to hold a group of data(key as the variable and value)",
                  list: [
                    'Code sample: Const person={ name: "John" age: 34 istall: true address:( Street: no 4 genesys city: Enugu ) }',

                    "//To output the values of keys",

                    'console.log(pesorn["name"])',

                    "//To get the value of a sub object",

                    'console.log(person"address"]["city"]) //or;',

                    "console.log(person_address.city) We can have sub object in an object such as address in the above code.",
                  ],
                  note: {},
                  img: [],
                  subsection: [],
                },
              ],
            },
          ],
        },
      ],
    },
    //sec3 oparetors
    {
      id: "sec3",
      header: "operators in javascript",
      content:
        "Operators is a special symbol used to perform operation on operands (values and variable)",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec31 arithmetic operators
        {
          id: "subsec31",
          header: "arithmetic operators",
          content:
            "This operators are used for performing arithmetic operation like addition and subtraction:",
          list: [
            "Addition; +",

            "Subtraction; - ",

            "Multiplication; *",

            "Division; /",

            "Modules; %",

            "Exponential; **",

            "Code sample:",

            "Console.log(1+23*4/5)",
          ],
          note: {},
          img: [],
          innersection: [],
        },
        //subsec32 comparison operators
        {
          id: "subsec32",
          header: "comparison operators",
          content: "",
          list: [
            "Greater than;>",

            "Less than; <",

            "Greater than or equal to; >=",

            "Less than or equal to; <=",

            "Equal to; ==",

            "Not equal to; !=",

            "Code sample:",

            "console.log(2<3, 4==5)",
          ],
          note: {},
          img: [],
          innersection: [],
        },
        //subsec33 logical operators
        {
          id: "subsec33",
          header: "logical operators",
          content: "",
          list: [
            "Not; !",

            "And; &&",

            "Or; ||",

            "Null coalescing; ??",

            "Code sample:",

            "console.log(1>2 && 3=2",
          ],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec4 flow controll
    {
      id: "sec4",
      header: "flow control",
      content:
        "This is a way to control the flow of codes and telling the program to do this if a particular condition is true/false. To do this, we use the following functions:",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec41
        {
          id: "subsec31",
          header: "if else conditional statement",
          content:
            "The if else conditional statement takes in conditions to control our code.",
          list: [
            "Code sample:",
            'Let i=0 If(ii//condition){ console.log("hello") }else{ console.log("no compliment")//this will run If non of the condition is true }',
          ],
          note: {
            header: "Note:",
            text: 'the "else" serves as default if none of the conditions are true',
          },
          img: [],
          innersection: [],
        },
        //subsec42 Switch
        {
          id: "subsec32",
          header: "Switch",
          content:
            "This different from if else, this takes a parameter and compares the parameter with each case (it's made up of cases)",
          list: [
            "Code sample:",

            "Const dayoftheweek=4;",
            "Switch (dayoftheweek){",
            "Case 1: console.log (week day); break;",
            " default: console.log(weekend);",
          ],
          note: {
            header: "Note:",
            text: ' the "default" will run if none of the cases are true.',
          },
          img: [],
          innersection: [],
        },
      ],
    },
    //sec5 loops
    {
      id: "sec5",
      header: "loops",
      content:
        "In every programming language, loops are used to print a code multiple times, there are three stages in a loop; the initialization, condition and increment/decrement",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec51 for loop
        {
          id: "subsec51",
          header: "for loop",
          content:
            "This is most common loop in programming language, like I said earlier it comprises of initialization, condition and increment/decrement.",
          list: [
            "Code sample:",
            "For(let i=0//initialization;",
            "i<3//condition;",
            "i++//increment/decrement)",
            "{ Code to loop }",
            "just like this;",
            "For(let i=0;i<3;i++)",
            "{ Console.log(i) }",
          ],
          note: {},
          img: [],
          innersection: [],
        },
        //subsc52 while loop
        {
          id: "subsc2",
          header: "while loop",
          content:
            "The while loop serves the same function as the for loop but has segments",
          list: [
            "Code sample:",
            "Let i=0",

            "While (I<3//condition),{",
            'console.log("hi")//code to loop }',
          ],
          note: {
            header: "Note:",
            text: "code to run follows the condition and this will determine how many times the code will appear.We also have other loops but this is the basic ones.",
          },
          img: [],
          innersection: [],
        },
      ],
    },
    //sec6 functions
    {
      id: "sec6",
      header: "function",
      content:
        "This is last we are going to be treating, it is a block of code that takes in an input and returns an output. A function in js is noted by the function keyword followed by brackets where our parameters (variables to be used in our function) will be and a braces where our code will be Code sample: Function add (x, y){ return x+y }",
      list: [],
      note: {
        header: "Note",
        text: '"add" is our function variable name and we are to return a value using the keyword "return".',
      },
      img: [],
      subsection: [
        //subsec61 arrow function
        {
          id: "subsec51",
          header: "Arrow function",
          content:
            "This is just like a shortcut for writing function in js it's called the arrow function because it comes with \"=>\" and doesn't have the function keyword.",
          list: [
            "Code sample:",

            "const add (x,y)=>{return x+ y} console.log(add)",
          ],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec7 conclusion
    {
      id: "sec7",
      header: "conclusion",
      content:
        "This are the fundamentals of JavaScript with this you can get started with JS. JavaScript comprises of a lot, you need to go further in order to master JavaScript very well",
      list: [],
      note: {},
      img: [],
      subsection: [],
    },
  ],
};


export const VarInJs = {
  id: "javascript2",
  title: "Variable declaration in JavaScript",
  category: "coding",
  section: "fr",
  coverimg: js2c,
  description:
    "Variable declaration in JavaScript-the difference between var, let and const ",
  author: "Ike Tobenna",
  authorimg: author2,
  link: "",
  date: "Dec 4, 2022",
  duration: "6 min read",
  intro: {
    header: "Introduction",
    content:
      "First of all, a variable is a pointer to a data stored in a memory, we use variables to store data temporally in the computer's memory. Thera are three ways to declare a variable, by the use of the keywords; var, let and const. Before let and const, there was already var. One of the features that came with the newJavaScript edition (ES6) is the addition of let and const , which can be used for variable declaration. In this article, we'll discuss the difference between var ,let and const with respect to their scope, use, and hoisting.",
    list: [],
    note: {
      header: "NOTE:",
      text: "To understand this course better, you need to be familiar with javascript",
    },
    img: [{ title: "", link: "" }],
  },
  table: {
    header: "Table of content",
    list: [
      { name: "Var", link: "#sec1" },
      { name: "Let", link: "#sec2" },
      { name: "Const", link: "#sec3" },
      { name: "Conclusion", link: "#sec4" },
    ],
  },
  resources: [{ header: "", text: "text", link: "" }],
  sections: [
    //sec1 Var
    {
      id: "sec1",
      header: "Var",
      content:
        "Var has some limitations, There are issues associated with variables declared with var. That is why it was necessary for new ways to declare variables to emerge. Let's look into the features of var.",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec11
        {
          id: "subsec11",
          header: "Scope of var",
          content:
            "Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped. The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window. var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function. example :",
          list: [
            'var compliment = "hey hi"; function newFunction() { var hello = "hello"; }',

            "Here, compliment is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function. Example:",

            'var greet = "hey hi";',

            'function newFunction() { var hello = "hello"; } console.log(hello); // error:',

            "We'll get an error which is as a result of hello not being available outside the function. ",

            "var variables can be re-declared and updated",
            'This means that we can do this within the same scope and won\'t get an error. var greet= "hey hi"; ',

            'var greeter = "say Hello instead"',

            "and this also means",

            'var greeter = "hey hi"; greeter = "say Hello instead";',
          ],
          note: {},
          img: [],
          innersection: [],
        },
        //subsec12 hoisting of var
        {
          id: "subsec12",
          header: "Hoisting of var",
          content:
            "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Example:",
          list: [
            "console.log (greeter);",

            'var greeter = "say hello"',

            "it is interpreted as this:",

            "var greeter;",

            "console.log(greeter);",

            '// greet greeter = "say hello"',

            "So var variables are hoisted to the top of their scope and initialized with a value of undefined . Problem with var There's a weakness that comes with var. Example: ",

            'var greeter = "hey hi";',

            "var times = 4;",

            'if (times > 3) { var greeter = "say Hello i }',

            "console.log(greeter)",

            '// "say Hi"',

            'So, since times > 3 returns true, greeter is redefined to "say Hello instead" . While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before. If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary.',
          ],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec2 let
    {
      id: "sec2",
      header: "Let",
      content:
        "let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec21 scope of var
        {
          id: "subsec21",
          header: "scope of let",
          content:
            "let is block scoped A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. So a variable declared in a block with let is only available for use within that block. Example:",
          list: [
            'let greeting = "say Hi";',

            "let times = 4;",

            'if (times > 3) { let hello = "say Hello instead"; console.log(hello);  }',

            "console.log(hello) // hello",

            "We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .",

            "let can be updated but not re-declared.",

            'Just like var , a variable declared with let can be updated within its scope. Unlike var , a let variable cannot be re-declared within its scope. Example : let greeting = "say Hi";',

            'greeting = "say Hello instead"',

            "this will return an error:",

            'let greeting = "say Hi";',

            'let greeting = "say Hello instead"',

            "However, if the same variable is defined in different scopes, there will be no error:",

            'let greeting = "say Hi";',

            'if (true) { let greeting = "say Hello" console.log(greeting); // }',

            "console.log(greeting); ",
            "Why is there no error? This is because both instances are treated as different variables since they have different scopes. This fact makes let a better choice than var . When using let , you don't have to bother if you have used a name for a variable before as a variable exists only within its scope. Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not happen.",
          ],
          note: {},
          img: [],
          innersection: [],
        },
        //subsec22 hoisting of let
        {
          id: "subsec22",
          header: "Hoisting of let",
          content:
            "Just like var , let declarations are hoisted to the top. Unlike var which is initialized as undefined , the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error .",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec3 const
    {
      id: "sec3",
      header: "Const",
      content:
        "Variables declared with the const maintain constant values. const declarations share some similarities with let declarations. const declarations are block scoped",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec31
        {
          id: "subsec31",
          header: "Scope of const",
          content:
            "Like let declarations, const declarations can only be accessed within the block they were declared.const cannot be updated or re-declared This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const , we can neither do this. Example:",
          list: [
            'const greeting = "say Hi";',

            'greeting = "say Hello instead";',

            "nor this:",

            'const greeting = "say Hi";',

            'const greeting = "say Hello instead"',

            'Every const declaration, therefore, must be initialized at the time of declaration. This behavior is somehow different when it comes to objects declared with const . While a const object cannot be updated, the properties of this objects can be updated. Example : const greeting = { message: "say Hi", times: 4 }',

            "while we cannot do this:",

            'greeting = { words: "Hello", number: "five" } // error: Assignment to const',

            "we can do this:",

            'greeting.message = "say Hello"',

            "This will update the value of greeting.message without returning errors.",
          ],
          note: {},
          img: [],
          innersection: [],
        },
        //subsec32 hoisting of const
        {
          id: "subsec32",
          header: "Hoisting of const",
          content:
            "Just like let , const declarations are hoisted to the top but are not initialized.",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec4 conclusion
    {
      id: "sec4",
      header: "Conclusion",
      content:
        "So just in case you missed the differences, here they are: var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope. But while var variables are initialized with undefined , let and const variables are not initialized. While var and let can be declared without being initialized, const must be initialized during declaration.",
      list: [],
      note: {},
      img: [],
      subsection: [],
    },
  ],
};

/*



 {
        id:"",
        header: "",
        content: "",
        list: [],
        note: {},
        img: [],
        subsection: []
 }

*/

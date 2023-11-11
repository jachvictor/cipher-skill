// import image from "../../assets/code.png";
import uml1c from "../../assets/articleimg/uml1c.png";
import uml1sec31 from "../../assets/articleimg/uml1sec31.png";
import uml1sec32 from "../../assets/articleimg/uml1sec32.png";
import author from "../../assets/authors/tobby.png";

export const Uml = {
  id: "uml1",
  title: "UML versions and modelling tools/software",
  category: "coding",
  section: "f",
  coverimg: uml1c,
  description:
    "UML versions and modelling tools/software- uml version 2.5 and uml tool- draw.io",
  author: "Ike Tobenna",
  authorimg: author,
  link: "",
  date: "Dec 10, 2022",
  duration: "2 min read",
  intro: {
    header: "",
    content: "",
    list: [],
    note: {},
    img: [{ title: "", link: "" }],
  },
  table: {
    header: "Table of content",
    list: [
      { name: "Uml", link: "#sec1" },
      { name: "Uml version", link: "#sec2" },
      { name: "Usml modelling tool", link: "#sec3" },
    ],
  },
  resources: [{ header: "", text: "text", link: "" }],
  sections: [
    //sec1
    {
      id: "sec1",
      header: "UML",
      content:
        "Uml which stands for unified modeling language, is specification defining a graphical language for visualizing, specifying, constructing, and documenting the artifacts of distributed object systems. Also, the Unified Modeling Language (UML) is a general-purpose, developmental modeling language in the field of software engineering that is intended to provide a standard way to visualize the design of a system",
      list: [],
      note: {},
      img: [],
      subsection: [],
    },
    //sec2
    {
      id: "sec2",
      header: "Uml versions",
      content:
        "In 2005, the International Organization for Standardization approved UML as an ISO standard. It is used in various industries for creating object-oriented models. They are verious UML version but the latest UML version is 2.5 which I will go for.",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec21
        {
          id: "subsec21",
          header: "UML version 2.5- why this version is recommended",
          content:
            "UML 2.4.1 was revised with minor changes which resulted to the new UML version 2.5. UML was made simple than it was before. Rapid functioning and the generation of more effective models were introduced. Outdated features were eliminated. Models, templates were eliminated as auxiliary constructs which now made it easier to use.",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec3
    {
      id: "sec3",
      header: "UML modeling tools",
      content:
        "The UML modeling tool lets you model the structure of system by modeling its classes, their attributes and operations in a UML class diagram. There are various uml tool such as: Edraw Max, Moqups, Visio, ConceptDraw, StarUML, Umbrello, UML Designer Tool, Diagram.net (formerly called Draw.oi), Lucidchart. Among All this, I prefer diagram.net",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec31
        {
          id: "subsec31",
          header: "Diagram.net-why this UML tool is recommended",
          content:
            "diagrams.net (previously draw.io) is a free and open source cross-platform graph drawing software developed in HTML5 and JavaScript. Its interface can be used to create diagrams such as flowcharts, wireframes, UML diagrams, organizational charts, and Network diagrams Draw.io leaves plenty of shapes and templates at your disposal for fast builds . Functionality isn't sacrificed, either. Import and export several file types like . xml and image formats, and track changes and share your work without trouble.Features: Works with your team on any device across various platforms.",
          list: ["diagram.net(draw.io) uml diagram samples"],
          note: {},
          img: [
            { title: "", link: uml1sec31 },
            { title: "", link: uml1sec32 },
          ],
          innersection: [],
        },
      ],
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

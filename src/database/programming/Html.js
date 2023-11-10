import image from "../../assets/code.png";
import htmt1c from "../../assets/articleimg/html1c.png"
import htmt1sec31 from "../../assets/articleimg/html1sec31.png"
export const HtmlSemantics = {
  id: "html1",
  title: "HTML semantics",
  category: "coding",
  section: "n",
  coverimg: null,
  description: "HTML semantic elements and structure",
  author: "Chukwu Jachike Victor",
  authorimg: null,
  link: "",
  date: "Dec 18, 2022",
  duration: "3 min read",
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
      { name: "Html semantics", link: "#sec1" },
      { name: "Html semantic elements", link: "#sec2" },
      { name: " HTML Semantic Tag Structure", link: "#sec3" },
      { name: "Conclusion", link: "#sec4" },
    ],
  },
  resources: [{ header: "", text: "text", link: "" }],
  sections: [
    //sec1 html semantics
    {
      id: "sec1",
      header: "Html semantics",
      content:
        "The HTML semantics refers to the tags that gives adequate meaning to a HTML page rather than just presentation. It makes HTML more comprehensible and communicative by describing the various sections and layout of web pages. The main attributes of a semantic element is that it clearly defines the content of web pages to both the browser and the developer.",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec11 beneft of html sem
        {
          id: "subsec11",
          header: "Benefits of Using Semantic HTML",
          content:
            "Main purpose of writing semantic HTML is the desire to comunicate. More over, There are several merits of using semantics tags in HTML:The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. We use semantic elements to make web pages much easier to read It provides additional information about a html document, which aids in communication.",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec2 html sem elements
    {
      id: "sec2",
      header: "HTML semantic elements",
      content:
        "These Semantics tags are use to define the communicative nature of a page . HTML Semantic Elements Tags:",
      list: [
        "<article>",

        "<aside>",

        "<details>",

        "<footer>",

        "<header>",

        "<main>",

        "<mark>",

        "<nav>",

        "<section>",

        "<summary>",

        "<time>",
      ],
      note: {},
      img: [],
      subsection: [
        //subsec21 uses of the above tags

        {
          id: "subsec21",
          header: "Uses of the above tags",
          content: "",
          list: [
            "The <article>",

            "This tag specifies independent, self contained content. An article should make sense on its own and it should be possible to distribute it independently from the rest of the site",

            "The <aside>",

            "The <aside> tag defines some content apart from the content it is placed in. This tag content should be indirectly related to the surrounding content.",

            "The <details>",

            "Based on semantics, it states clearly, the additional details that a user can open and close on demand. The <details> tag is often used to create an interactive widget that the user can open and close.",

            "The <footer>",

            "The <footer> tag in html is used to define a footer of html document. It contains the footer information (author information, carriers, etc).",

            "The <header>",

            "This html tag is used to differentiate the headings (h1) and sub-headings (h2-h6) of a page from the rest of the content. These tags are also known to webmasters as header tags.",

            "The <main>",

            "This tag is used to store the essential information of a document. The content inside the <main> element should be unique.",

            "The <nav>",

            "The <nav> tag is used for declaring the navigational section in html documents. Website ls typically have sections dedicated to navigational links which enables users to navigate the site.",

            "The <section>",

            "Section tag defines the section r parts of documents such as chapters, headers, footers or any other sections. The section tag divides the content into section and subsections.",

            "The <summary>",

            "The<summary> html element specified a summary, caption, or legend for a <details> element's disclosure box.",

            "The <time>",

            "This defines a specific time (or datetime).",
          ],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec3 HTML Semantic Tag Structure
    {
      id: "sec3",
      header: "HTML Semantic Tag Structure",
      content:
        "For a page to be meaningful and communicative, it should follow the html semantic structure using the following html sementic element tags to break your page into identified parts:",
      list: [
        "<header>: it defines a header for a web page.",

        "<nav>: It defines a container for navigation links.",

        "<main>: the main tag holds the main content of our web page",

        "<section>: This defines a section in a web page.",

        "<article>: This element contains the main part, containing information about the web page.",

        "<aside>: The <aside> content is often placed as a sidebar in a document.",

        "<footer>: It defines a footer for a document or a section.",

        "Sample",
      ],
      note: {},
      img: [{ title: "html semantic sample", link: htmt1sec31 }],
      subsection: [],
    },
    //sec4
    {
      id: "sec4",
      header: "Conclusion",
      content:
        "In this article, we discussed what HTML semantic tags are and what the several advantages of using it are. This guide was created to offer a thorough understanding of how semantics in HTML can improve the structure of web pages.",
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

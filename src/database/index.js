import { ReactJs } from "./programming/ReactJs";
import { HtmlSemantics } from "./programming/Html";
import React from "react";
// import { ReactJs } from "./programming/ReactJs";
import { VersionControl } from "./programming/VersionControl";
import { Uml } from "./programming/Uml";
import { JavaScript, VarInJs } from "./programming/JavaScript";
import { JavaForBeginners } from "./programming/Java";



import image from "../assets/code.png";

export const Article = [
  { content: ReactJs },
  { content: VersionControl },
  { content: JavaScript },
  { content: VarInJs },
  { content: HtmlSemantics },
  { content: Uml },
  { content: JavaForBeginners },
];

export const sample = {
  id: null,
  title: "",
  category: "",
  section: "",
  coverimg: image,
  description: "",
  author: "",
  authorimg: "",
  link: "",
  date: "",
  duration: "",
  intro: {
    header: "",
    content: "",
    list: [],
    note: { header: "NOTE:", text: "" },
    img: [{ title: "", link: "" }],
  },
  table: {
    header: "",
    list: [{ name: "", link: "" }],
  },
  resources: [{ header: "", text: "text", link: "" }],
  sections: [],
};

/*



 {
        id:"",
        header: "",
        content: "",
        list: [],
        note: { header: "NOTE:", text: "" },
        img: [{ title: "", link: "" }],
        subsection: []
 }

*/

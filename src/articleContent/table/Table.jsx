import React from "react";
import "./Table.css";

function Table({head, night,list }) {
  return (
    <main className={night === true ? "table-contain night" : "table-contain section"}>
      <h2>{head}</h2>
      <ul>
        {list.map((items,index) => {
          return (
            <div key={index}>
              <a key={index} href={items.link}>
                <li>*{items.name}</li>
              </a>
            </div>
          );
        })}
      </ul>
    </main>
  );
}

export default Table;

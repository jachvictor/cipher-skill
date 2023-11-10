import React from "react";
import "./Table.css";

function Table({ children, head, night, item, list }) {
  return (
    <main className={night === true ? "table-contain night" : "table-contain section"}>
      <h2>{head}</h2>
      {/* <div>{children}</div> */}
      <ul>
        {list.map((items) => {
          return (
            <>
              <a href={items.link}>
                <li>*{items.name}</li>
              </a>
            </>
          );
        })}
      </ul>
    </main>
  );
}

export default Table;

// single selection
// multiple selection

import { useState } from "react"
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentKey) => {
    setSelected(currentKey === selected ? null : currentKey);
  }

  return (
    <div className="wrapper">
      <div className="accrodian">
        {
          data && data.length > 0 ?
            data.map(dataItem => (
              <div className="item" key={dataItem.key}>
                <div className="title" onClick={() => handleSingleSelection(dataItem.key)}>
                  <p>{dataItem.label}</p>
                  <span>+</span>
                </div>
                {
                  selected === dataItem.key && <div className="content">{dataItem.children}</div>
                }
              </div>
            ))
            : <div>No data</div>
        }
      </div>
    </div>
  )
}
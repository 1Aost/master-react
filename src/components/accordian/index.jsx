// single selection
// multiple selection

import { useState } from "react"
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  // single selection
  const handleSingleSelection = (currentKey) => {
    setSelected(currentKey === selected ? null : currentKey);
  }

  // multi selection
  const handleMultiSelection = (currentKey) => {
    let cpyMultiple = [...multiple];
    let index = cpyMultiple.indexOf(currentKey);

    if (index === -1) cpyMultiple.push(currentKey);
    else cpyMultiple.splice(index, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accrodian">
        {
          data && data.length > 0 ?
            data.map(dataItem => (
              <div className="item" key={dataItem.key}>
                <div className="title" onClick={
                  !enableMultiSelection ?
                    () => handleSingleSelection(dataItem.key) :
                    () => handleMultiSelection(dataItem.key)}>
                  <p>{dataItem.label}</p>
                  <span>+</span>
                </div>
                {
                  enableMultiSelection ? (
                    multiple.indexOf(dataItem.key) !== -1 && <div className="content">{dataItem.children}</div>
                  ) :
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
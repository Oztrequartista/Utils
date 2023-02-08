import "./styles.css";
import { useRef, useState } from "react";
import useOutClicked from "./useOutclicked";

export default function App() {
  const boxRef = useRef(null);
  const logNana = () => {
    setOpen(false);
  };
  const openBox = () => {
    console.log("open");
    if (open) return;
    setOpen(true);
  };

  useOutClicked(boxRef, logNana);
  const [open, setOpen] = useState(false);
  const [optionsList, setOptionsList] = useState([
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ]);
  const [selectValue, setSelectedValue] = useState({});

  return (
    <div className="App">
      <h1>{selectValue.label}</h1>
      <div ref={boxRef}>
        <div>
          <button onClick={openBox}>DisplayList</button>
        </div>
        {open && (
          <div style={{ border: "1px solid red" }}>
            {optionsList.map((item) => {
              return (
                <p
                  onClick={() => {
                    setSelectedValue(item);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

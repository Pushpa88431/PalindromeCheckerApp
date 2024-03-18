import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");

  function searchHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
  }

  function palindrome(): string {
    let string: string = searchValue.toLowerCase().replace(/\s/g, "");
    let reverseString: string = string.split("").reverse().join("");
    if (searchValue === "") {
      return "";
    } else if (string === reverseString) {
      return "This is palindrome";
    } else {
      return "It is not a palindrome";
    }
  }

  return (
    <>
      <center className="container">
        <div className="inputValue">
          <h1>Check the Palindrome App</h1>
          <input
            id="search"
            type="text"
            value={searchValue}
            placeholder="Enter word"
            onChange={searchHandler}
          />
          <p>{palindrome()}</p>
        </div>
      </center>
    </>
  );
}

export default App;

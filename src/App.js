import "./styles.css";
import { useState } from "react";
const suggestions = [
  "abacus",
  "device",
  "ant",
  "logo",
  "topple",
  "green",
  "rest",
  "api"
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

    setFilteredSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div>
      <div>
        <label>Search</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
      <ul>
        {filteredSuggestions.map((suggestion) => (
          <li
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

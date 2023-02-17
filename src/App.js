import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const suggestions = [
  "abacus",
  "device",
  "ant",
  "logo",
  "topple",
  "green",
  "rest",
  "api",
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    const filteredSuggestions = data.filter(
      (suggestion) =>
        suggestion.email.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

    setFilteredSuggestions(filteredSuggestions);
    console.log(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.email);
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
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


import React from "react";

export default function Question(props) {
  const { question, options, onSelect } = props;

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input type="radio" name="answer" value={option} onChange={() => onSelect(option)} />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

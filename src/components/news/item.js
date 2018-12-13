import React from "react";

export default function NewsCategoryItem({ data: { name, id }, selected, onToggle }) {
  return (
    <div>
      <li onClick={() => onToggle(id)}>
        {name} - {String(selected)}
      </li>
    </div>
  );
}

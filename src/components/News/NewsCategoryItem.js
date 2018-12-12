import React from "react";

export default function NewsCategoryItem({
  subCategoryItem: { subCategoryName, categoryName, selected },
  onToggle
}) {
  return (
    <div>
      <li
        onClick={() =>
          onToggle({
            subCategoryName: subCategoryName,
            categoryName: categoryName
          })
        }
      >
        {subCategoryName} - {String(selected)}
      </li>
    </div>
  );
}

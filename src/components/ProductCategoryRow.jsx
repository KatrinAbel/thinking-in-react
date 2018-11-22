import React from 'react'

export default function ProductCategoryRow({category}) {
  return (
    <tr className="ProductCategoryRow">
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

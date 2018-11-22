import React from 'react'

export default function ProductRow({name,price,stocked}) {
  let style = {}
  if (!stocked) style.color = "red"
  
  return (
    <tr className="ProductRow">
      <td style={style}>
        {name}
      </td>
      <td style={{textAlign: "right"}}>
        {price}
      </td>
    </tr>
  )
}


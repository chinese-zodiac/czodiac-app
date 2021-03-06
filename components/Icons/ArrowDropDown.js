import * as React from "react"

function SvgArrowDropDown(props) {
  return (
    <svg width={25} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.21 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.91c-.89 0-1.33 1.08-.7 1.71z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgArrowDropDown

import * as React from "react"

function SvgTarget(props) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#target_svg__clip0)" fill="currentColor">
        <path d="M23.217 11.217h-1.083c-.382-4.985-4.366-8.969-9.351-9.351V.783a.782.782 0 10-1.566 0v1.083c-4.985.382-8.969 4.366-9.351 9.351H.783a.782.782 0 100 1.566h1.083c.382 4.985 4.366 8.969 9.351 9.351v1.083a.782.782 0 101.566 0v-1.083c4.985-.382 8.97-4.366 9.351-9.351h1.084a.783.783 0 000-1.566zM12.783 3.431a8.618 8.618 0 017.786 7.786h-1.572a7.054 7.054 0 00-6.214-6.214V3.43zm-1.566 0v1.572a7.053 7.053 0 00-6.214 6.214H3.43a8.618 8.618 0 017.786-7.786zm0 17.138a8.618 8.618 0 01-7.786-7.786h1.572a7.053 7.053 0 006.214 6.214v1.572zM12 15.913a.783.783 0 00-.783.783v.72a5.482 5.482 0 01-4.633-4.633h.72a.782.782 0 100-1.566h-.72a5.482 5.482 0 014.633-4.633v.72a.782.782 0 101.566 0v-.72a5.482 5.482 0 014.633 4.633h-.72a.783.783 0 00-.783.783c0 .432.35.777.783.777h.72a5.487 5.487 0 01-4.633 4.639v-.72a.783.783 0 00-.783-.783zm.783 4.656v-1.572a7.059 7.059 0 006.214-6.22h1.572c-.374 4.123-3.664 7.418-7.786 7.792z" />
        <path d="M12 9.652A2.35 2.35 0 009.652 12 2.35 2.35 0 0012 14.348 2.35 2.35 0 0014.348 12 2.35 2.35 0 0012 9.652z" />
      </g>
      <defs>
        <clipPath id="target_svg__clip0">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgTarget
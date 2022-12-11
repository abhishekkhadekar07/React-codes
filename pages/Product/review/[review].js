import React from 'react'
import {useRouter} from 'next/router'

function Liger() {
    const router =useRouter()
    const{review,productId}=router.query
  return (
    <>
<h1>This is first name {review} .This is second name {productId} </h1>
    </>
  )
}

export default Liger
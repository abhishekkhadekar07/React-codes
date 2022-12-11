import React from 'react'
import {useRouter} from 'next/router'
// http://localhost:3000/Product/hi
function Newfunc() {
    const router=useRouter();
        const abhishek=router.query.productId

  return (
    <>
<h1>
    hey this is new string which is passed {abhishek}.
</h1>
    </>
  )
}

export default Newfunc
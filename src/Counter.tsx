import React, { FunctionComponent, useState } from 'react'
import Button from 'antd/es/button';

const Counter:FunctionComponent<{initial?: number}> = ({initial = 0}) => {
  const [click, setClick] = useState(initial)
  return (<>
    <p>{click}</p>
    <Button type="primary" onClick={() => setClick(click-1)}>+</Button>
    <Button type="primary" onClick={() => setClick(click+1)}>-</Button>
  </>)
}

export default Counter
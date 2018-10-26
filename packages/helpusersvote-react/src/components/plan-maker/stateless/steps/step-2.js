import React from 'react'
import Button from '../../../polling-place-finder/stateless/button'

export function Step2({ onSelect }) {
  const onClickSelect = key => () => onSelect(key)

  return (
    <div>
      <Button classes="mr3" blue={false} onClick={onClickSelect('morning')}>
        Morning
      </Button>
      <Button classes="mr3" blue={false} onClick={onClickSelect('afternoon')}>
        Afternoon
      </Button>
      <Button blue={false} onClick={onClickSelect('evening')}>
        Evening
      </Button>
    </div>
  )
}

export default Step2

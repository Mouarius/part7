import { useState } from 'react'

export const useField = (type, fieldValue) => {
  const [value, setValue] = useState(fieldValue || '')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  const params = {
    type,
    value,
    onChange,
  }

  return {
    params,
    reset,
  }
}

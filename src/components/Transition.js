import { useState, useEffect, useRef } from 'react'

const Transition = ({ children, timeout, isActive }) => {
  const [activeClassName, setActiveClassName] = useState(null)
  const timer = useRef(null)

  useEffect(() => {
    if (!activeClassName && isActive) {
      setActiveClassName('init')
      timer.current && clearTimeout(timer.current)
      timer.current = null

      setTimeout(() => {
        setActiveClassName('enter')
      }, 10)
    } else if (activeClassName && !isActive && !timer.current) {
      setActiveClassName('exit')
      timer.current = setTimeout(() => {
        setActiveClassName(null)
      }, timeout)
    }
  }, [isActive, timeout, activeClassName])

  return activeClassName ? children(activeClassName) : null
}

export default Transition
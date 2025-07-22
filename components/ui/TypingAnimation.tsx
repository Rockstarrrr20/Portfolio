"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  roles: string[]
}

export default function TypingAnimation({ roles }: TypingAnimationProps) {
  const [typedText, setTypedText] = useState("")
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const currentText = roles[currentRole]
    let index = 0
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentRole, roles])

  return (
    <>
      <span className="typing-text">{typedText}</span>
      <span className="cursor">|</span>
    </>
  )
}

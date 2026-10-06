import { useEffect } from 'react'

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title
    const tag = document.querySelector('meta[name="description"]')
    if (tag) tag.setAttribute('content', description)
  }, [title, description])
  return null
}
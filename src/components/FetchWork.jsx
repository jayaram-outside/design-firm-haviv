import { useEffect, useState } from 'react'

function FetchWork({ fetchURL, children }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    let isMounted = true

    async function fetchWork() {
      try {
        const res = await fetch(fetchURL)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (isMounted) setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        if (isMounted) setError(e.message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchWork()
    return () => {
      isMounted = false
    }
  }, [fetchURL])

  return children({ loading, error, items })
}

export default FetchWork

import { useEffect, useState } from 'react'
import './App.css'
import WorkItem from './components/WorkItem'
function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [items, setItems] = useState([])
  useEffect(() => {
    let isMounted = true
    async function fetchWork() {
      try {
        const res = await fetch('https://bpcghheadless.wpenginepowered.com/wp-json/cgh/work/?total=-1&type=logo')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (isMounted) setItems(Array.isArray(data) ? data : [])

      } catch (e) {
        if (isMounted) setError(e.message)

      } finally {
        if (isMounted) setLoading(false)

      }
    }

    fetchWork();
    return () => {
      isMounted = false
    }
  }, []);

  return (
    <>
      <section className="pageContent--workThumbnails">
        {loading && (
          <div className='pageContent--loadingState'>
            Loading data...
          </div>
        )}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && (
          <>
            <div className='workThumbnails-grid'>
              {items.map((item, index) => (
                <WorkItem key={item.id || item.slug} item={item} index={index} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default App

import { useState, useMemo } from 'react'
import WorkItem from './components/WorkItem'
import FetchWork from './components/FetchWork'

// Filter component
function Filter({ currentFilter, onFilterChange }) {
  const filters = [
    { key: 'curated', label: 'Curated' },
    { key: 'a-z', label: 'A-Z' },
    { key: 'newest', label: 'Newest' }
  ];

  return (
    <div className="filters">
      {filters.map(filter => (
        <button 
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={currentFilter === filter.key ? 'active' : ''}
          style={{
            color: currentFilter === filter.key ? '#000' : '#888'
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

function WorkContent({ loading, error, items }) {
  const [filter, setFilter] = useState('curated')

  const sortedItems = useMemo(() => {
    let sorted = [...items];
    if (filter === 'a-z') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter === 'newest') {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filter === 'curated') {
      sorted.sort((a, b) => (a.order || 0) - (b.order || 0));
    }
    return sorted;
  }, [items, filter]);

  // Show loading state without header
  if (loading) {
    return (
      <div className='pageContent--loadingState'>
        Loading data...
      </div>
    )
  }

  // Show error state without header
  if (error) {
    return (
      <div style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>
        Error: {error}
      </div>
    )
  }

  return (
    <>
      <div className='work-header'>
        <div className='work-header-title'>Logos</div>
        <Filter currentFilter={filter} onFilterChange={setFilter} />
      </div>
      <section className="pageContent pageContent--workThumbnails">
        <div className='workThumbnails-grid'>
          {sortedItems.map((item, index) => (
            <WorkItem key={item.id || item.slug} item={item} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}

function Work() {
  return (
    <FetchWork fetchURL="https://bpcghheadless.wpenginepowered.com/wp-json/cgh/work/?total=-1&type=logo">
      {({ loading, error, items }) => (
        <WorkContent loading={loading} error={error} items={items} />
      )}
    </FetchWork>
  )
}

export default Work

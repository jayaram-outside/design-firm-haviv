function WorkItem({ item, index }) {
  const useReverse = index % 2 === 0; // true for even indices (0, 2, 4...)
  const imageUrl = useReverse
    ? item.thumbnailReverse?.sizes?.[0]?.[0]
    : item.thumbnail?.sizes?.[0]?.[0];
  return (
    <div className="workThumbnail">
        <a href='#' className="workThumbnail-link">
          <div className="workThumbnail--thumbnail">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={item.title}
                className={useReverse ? 'reverse' : ''}
              />
            )}
          </div>
          <span className='workThumbnail--projectInformation hasSubtitle'>
            <span className='workThumbnail--title'>{item.title} - </span>
            <span className='workThumbnail-subtitle'>{item.subtitle}</span>
          </span>
        </a>
    </div>
  )
}
export default WorkItem

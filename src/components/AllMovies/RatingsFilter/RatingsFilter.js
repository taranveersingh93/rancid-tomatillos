import './RatingsFilter.css'

const RatingsFilter = () => {
  return (
    <div className='ratings-container'>
      <div class="ratings-dropdown">
        <button class="dropdown">Filter Movies By Rating</button>
        <div class="all-ratings">
          <a href="#">1+/10</a>
          <a href="#">2+/10</a>
          <a href="#">3+/10</a>
        </div>
      </div>
    </div>
  )
}
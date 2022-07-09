import React from 'react'

const QuoteContainer = ({data, searchAuthor, searchTag}) => {
  return (
    <div className="quote-container">
        <div className="quote-text">
            {`"${data.content}"`}
        </div>
        <div className='quote-author'>
            <p className='author' onClick={() => searchAuthor(data.authorSlug)}>
              {data.author}
            </p>
            <p className='author-title'>
            {
                data.tags.map(tag => (<span key={tag} onClick={() => searchTag(tag)}>{tag} </span>))
            }
            </p>
        </div>
    </div>
  )
}

export default QuoteContainer
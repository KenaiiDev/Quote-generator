import React from 'react'
import useFetch from '../hooks/useFetch'
import { URL } from '../utils'

const TagQuoteContainer = ({ tag }) => {

  const { data, loading, error } = useFetch(`${URL}/quotes?tag=${tag}`);
  console.log(data);
  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(data !== null) {
    return (
      <>
      <h2 className='title'>Tag: {tag}</h2>
      <div className='list-quotes'>
        {
          data.results.map(quote => (
            <div className="quote-text" key={quote._id}>
              {`"${quote.content}"`}
            </div>
          )
        )}
      </div>
      </>
    )
  }
}

export default TagQuoteContainer
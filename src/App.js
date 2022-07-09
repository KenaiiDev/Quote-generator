import './reset.css'
import './style.css'
import QuoteContainer from './components/QuoteContainer';
import AuthorQuoteContainer from './components/AuthorQuoteContainer';
import TagQuoteContainer from './components/TagQuoteContainer';
import React, {useState,} from 'react'
import useFetch from './hooks/useFetch';
import { URL } from './utils';

function App() {


  const { data, loading, error } = useFetch(`${URL}/random`);
  const [author, setAuthor] = useState('');
  const [tag, setTag] = useState('');


  const handleRandom = () => {
    window.location.reload();
  }

  const searchAuthor = (author) => {
    setAuthor(author);
  }
  
  const searchTag = (tag) => {
    setTag(tag);
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  if (data!==null) {
    return (
      <div className="app">
        <div className='button-container'>
          <button className='random-button' onClick={() => {handleRandom()}}>Random</button>
        </div>
        {
          //if tag is not empty, render TagQuoteContainer, if author is not empty, render AuthorQuoteContainer, if both are empty, render QuoteContainer
          tag !== '' ? <TagQuoteContainer tag={tag} /> :
          author !== '' ? <AuthorQuoteContainer author={author} /> :
          <QuoteContainer data={data} searchAuthor={searchAuthor} searchTag={searchTag} />
        }
        <footer className='footer'>
          Developed by Lucas Villanueva - devChallenge.io
        </footer>
      </div>
    );
  }
}

export default App;

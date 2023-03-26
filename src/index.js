import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { books } from './books';

/* Global Variables */

/* BookList Component */

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            {...book}
          ></Book>
        );
      })}
    </section>
  );
}

/* Book Component */

const Book = (props) => {
  const { img, title, author } = props;

  const clickHandler = () => {
    alert('Hello');
  };

  return (
    <article className='book'>
      <img
        src={img}
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button
        type='button'
        onClick={clickHandler}
      ></button>
    </article>
  );
};

const root = createRoot(
  document.getElementById('root')
);
root.render(<BookList />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

/* Global Variables */

const books = [
  {
    id: 1,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/41cqBP3CKoL._AC_SX368_.jpg',
    title: 'The Indian Metropolis',
    author: 'Feroze Varun Gandhi',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY344_BO1,204,203,200_.jpg',
    title: 'Atomic Habits',
    author: 'James Clear',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY436_FMwebp_QL65_.jpg',
    title: 'Ikigai',
    author: 'Hector Garcia',
  },
];

/* BookList Component */

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // return (<Book key={book.id} {...book}></Book>);
        return Book(book);
      })}
    </section>
  );
}

/* Book Component */

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img
        src={img}
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = createRoot(
  document.getElementById('root')
);
root.render(<BookList />);

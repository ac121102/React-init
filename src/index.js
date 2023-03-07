import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

/* Setup Global Variables */

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/41cqBP3CKoL._AC_SX368_.jpg',
  title: 'The Indian Metropolis',
  author: 'Feroze Varun Gandhi',
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY344_BO1,204,203,200_.jpg',
  title: 'Atomic Habits',
  author: 'James Clear',
};

const thirdBook = {
  img: 'https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY436_FMwebp_QL65_.jpg',
  title: 'Ikigai',
  author: 'Hector Garcia',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
}

/* Book Component */

const Book = (props) => {
  return (
    <article className='book'>
      <img
        src={props.img}
        alt=''
      />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<BookList />);

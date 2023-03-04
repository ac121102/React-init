import React from "react";
import reactDom from "react-dom";
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

/* Book Component */
const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

/* Image Component */
const Image = () => {
  return (
    <img
      src="https://images-eu.ssl-images-amazon.com/images/I/41ka4efHjBL._AC_SX368_.jpg"
      alt=""
    />
  );
};

/* Title Component */
const Title = () => {
  return <h1>8 Rules of Love : How to Find it, Keep it, and Let it Go</h1>;
};

/* Author Component */
const Author = () => {
  return <h4 style={{}}>Jay Shetty</h4>;
};

reactDom.render(<BookList />, document.getElementById("root"));

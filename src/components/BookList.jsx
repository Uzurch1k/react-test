// src/components/BookList.jsx

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

const BookList = () => {
  return (
    <ul>
      {favouriteBooks.map(book => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </ul>
  );
};

export default BookList;

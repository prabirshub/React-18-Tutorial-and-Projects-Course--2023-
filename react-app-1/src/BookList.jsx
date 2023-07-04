import { books } from './Books'
import Book from './Book'

const BookList = () => {
  return (
    <div>
      <h1 className='main-title'>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </div>
  )
}

export default BookList

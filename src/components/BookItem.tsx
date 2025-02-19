import { useNavigate } from "react-router-dom"
import { BookInfoWrapper, BookTitle, ItemWrapper } from "../styles/BookItem"

interface IBookInfo {
    [key: string]: string | number
}

const BookItem = (book: IBookInfo) => {

    const navigate = useNavigate();

    const handleBookClick = () => {
        navigate(`/detail/${book.id}`, {state: {book}});
    }
    return (
        <ItemWrapper>
            <img src="https://dummyimage.com/240x2:1" alt="book image"/>
            <BookInfoWrapper>
                <BookTitle onClick={handleBookClick}>{book.title}</BookTitle>
                <span>{book.author} 저 | {book.price}원</span>
                <span>재고: {book.stock} | 판매수량: {book.sold}</span>
            </BookInfoWrapper>
        </ItemWrapper>
    )
}

export default BookItem;
import { useLocation } from "react-router-dom";
import { BookInfoWrapper, BookTitle } from "../../styles/BookItem";
import { CommonLayout } from "../../styles/Layout";

interface IBookInfo {
    id: string,
    title: string,
    author: string,
    price: number,
    stock: number,
    sold: number,
    detail: string,
}

export default function Detail() {
    const location = useLocation();
    const book: IBookInfo = location.state.book;
    console.log(book);
    

    return (
        <CommonLayout style={{flexDirection: "row", alignItems: "flex-start"}}>
            <img src="https://dummyimage.com/300" alt="book image" style={{marginRight: 50}}/>
            <BookInfoWrapper>
                <BookTitle style={{cursor:"default"}}>{book.title}</BookTitle>
                <span>{book.author} 저 | {book.price}원</span>
                <span>재고: {book.stock} | 판매수량: {book.sold}</span>
                <p>상세 설명</p>
                <span>{book.detail}</span>
            </BookInfoWrapper>
        </CommonLayout>
    )
}


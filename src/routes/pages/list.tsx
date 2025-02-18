import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BookItem from "../../components/BookItem"
import { SearchBox, SearchSelect, SerachInput, StoreName } from "../../styles/List"
import { useState } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { ListWrapper } from "../../styles/BookItem"
import { CommonLayout } from "../../styles/Layout"

interface IBookInfo {
    id: string,
    title: string,
    author: string,
    price: number,
    stock: number,
    sold: number,
    detail: string
}

export default function List() {
    const options = [{value: "title", label: "제목"}, {value: "author", label: "저자"}]
    const [searchKey, setSearchKey] = useState(options[0].value)
    const handleSelect = (e: { target: { value: string } }) => {
        setSearchKey(e.target.value);
    }
    const books: IBookInfo[] = [
        {
            id: "1",
            title: "test1",
            author: "test1",
            price: 10000,
            stock: 10,
            sold: 10,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "2",
            title: "test2",
            author: "test2",
            price: 20000,
            stock: 20,
            sold: 20,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "3",
            title: "test3",
            author: "test3",
            price: 30000,
            stock: 30,
            sold: 30,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "4",
            title: "test4",
            author: "test4",
            price: 40000,
            stock: 40,
            sold: 40,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "5",
            title: "test5",
            author: "test5",
            price: 50000,
            stock: 50,
            sold: 50,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "3",
            title: "test3",
            author: "test3",
            price: 30000,
            stock: 30,
            sold: 30,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "1",
            title: "test1",
            author: "test1",
            price: 10000,
            stock: 10,
            sold: 10,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "2",
            title: "test2",
            author: "test2",
            price: 20000,
            stock: 20,
            sold: 20,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "3",
            title: "test3",
            author: "test3",
            price: 30000,
            stock: 30,
            sold: 30,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "1",
            title: "test1",
            author: "test1",
            price: 10000,
            stock: 10,
            sold: 10,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "2",
            title: "test2",
            author: "test2",
            price: 20000,
            stock: 20,
            sold: 20,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "3",
            title: "test3",
            author: "test3",
            price: 30000,
            stock: 30,
            sold: 30,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "1",
            title: "test1",
            author: "test1",
            price: 10000,
            stock: 10,
            sold: 10,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "2",
            title: "test2",
            author: "test2",
            price: 20000,
            stock: 20,
            sold: 20,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "3",
            title: "test3",
            author: "test3",
            price: 30000,
            stock: 30,
            sold: 30,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "1",
            title: "test1",
            author: "test1",
            price: 10000,
            stock: 10,
            sold: 10,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "2",
            title: "test2",
            author: "test2",
            price: 20000,
            stock: 20,
            sold: 20,
            detail: "detaildetaildetaildetaildetail",
        },
        {
            id: "3",
            title: "test3",
            author: "test3",
            price: 30000,
            stock: 30,
            sold: 30,
            detail: "detaildetaildetaildetaildetail",
        }
    ]
    return (
        <CommonLayout>
            <StoreName>Book Store</StoreName>
            <SearchBox>
                <SearchSelect value={searchKey} onChange={handleSelect}>
                    {options.map((option, index) => {
                        return <option key={index} value={option.value}>{option.label}</option>
                    })}
                </SearchSelect>
                <SerachInput />
                <FontAwesomeIcon icon={faSearch} />
            </SearchBox>
            
            <ListWrapper>
            {books.map((book: IBookInfo, index) => {
                return <BookItem {...book} key={index}/>
            })}
            </ListWrapper>
        </CommonLayout>
    )
}
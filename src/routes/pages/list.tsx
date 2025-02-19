import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BookItem from "../../components/BookItem"
// import ReactPaginate from 'react-paginate';
import { SearchBox, SearchSelect, SerachInput, StoreName } from "../../styles/List"
import { useEffect, useState } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { ListWrapper } from "../../styles/BookItem"
import { CommonLayout } from "../../styles/Layout"

interface IBookInfo {
    [key: string]: string | number
}

export default function List() {
   
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
    ];

     const [listBooks, setListBooks] = useState(books);

    const options = [{value: "title", label: "제목"}, {value: "author", label: "저자"}]
    const [searchKey, setSearchKey] = useState(options[0].value)
    const [queryString, setQueryString] = useState("");
    const itemsPerPage = 10;
    const [page, setPage] = useState(1);
    const pageHandler = (page: number) => setPage(page);
    const [slicedList, setSlicedList] = useState(books);
    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const pageCount = Math.ceil(listBooks.length / itemsPerPage);


    useEffect(() => {
        setSlicedList(listBooks.slice(indexOfFirstItem, indexOfLastItem));
    }, [page, listBooks])

    const handleSelect = (e: { target: { value: string } }) => {
        setSearchKey(e.target.value);
    }

    const handleChange = (e: { target: { value: string } }) => {
        setQueryString(e.target.value);
        if(e.target.value === "") { 
            setListBooks(books);
        }
    }

    const handleEnter = (e: { key: string }) => {
        if(e.key === "Enter") {
            searchBooks();
        }
    }

    const searchBooks = () => {
        const filtered = books.filter((book) => book[searchKey].toString().includes(queryString));
        setListBooks(filtered)
    }

    return (
        <CommonLayout>
            <StoreName>Book Store</StoreName>
            <SearchBox>
                <SearchSelect value={searchKey} onChange={handleSelect}>
                    {options.map((option, index) => {
                        return <option key={index} value={option.value}>{option.label}</option>
                    })}
                </SearchSelect>
                <SerachInput onChange={handleChange} onKeyDown={handleEnter} value={queryString}/>
                <FontAwesomeIcon icon={faSearch} />
            </SearchBox>
            
            <ListWrapper>
            {slicedList.map((book: IBookInfo, index) => {
                return <BookItem {...book} key={index}/>
            })}
            </ListWrapper>
           {/*<ReactPaginate 
                breakLabel="..."
                nextLabel="next >"
                onPageChange={pageHandler}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />*/}
        </CommonLayout>
    )
}
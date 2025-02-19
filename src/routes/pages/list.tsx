import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BookItem from "../../components/BookItem"
import { SearchBox, SearchSelect, SerachInput, StoreName } from "../../styles/List"
import { useEffect, useState } from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { ListWrapper } from "../../styles/BookItem"
import { CommonLayout } from "../../styles/Layout"
import { StyledPagination } from "../../styles/pagination"
import Pagination from "react-js-pagination"
import api from "../axios"

interface IBookInfo {
    [key: string]: string | number
}

export default function List() {

    const [books, setBooks] = useState<IBookInfo[]>([{title: " ", author: " "}]);

    function fetchBooks() {
        api.get("/api/books").then((response) => {
            console.log(response.data);
            setBooks(response.data)
            setListBooks(response.data)
        })
    }
    
    useEffect(() => {
        fetchBooks();
    }, [])
   
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


    useEffect(() => {
        pageHandler(page);
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
            <StyledPagination>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={listBooks.length}
                    pageRangeDisplayed={5}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={pageHandler}
                />
            </StyledPagination>
        </CommonLayout>
    )
}
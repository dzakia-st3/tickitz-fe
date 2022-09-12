import React, { useEffect, useRef, useState } from 'react'
import { Container, SearchInput } from './style'
import search from "../img/search.png";

const SearchBar = () => {
    const targetRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const showSearchInput = isHovered || isFocused;

    useEffect(() => {
        targetRef.current.value = '';
    }, [showSearchInput])

    return (
        <Container
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            hover={showSearchInput}
        >
            <SearchInput placeholder='Search Movie..' ref={targetRef} showSearchInput={showSearchInput} />
            <img className='icon' src={search} />
        </Container>
    )
}

export default SearchBar
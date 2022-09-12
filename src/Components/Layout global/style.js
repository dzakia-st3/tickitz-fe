import styled, {css} from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 50px;
	border: 2px solid #fff;
    padding: 5px;
    background: #fff;
	transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 8%;

    ${({hover}) => 
        hover && 
        css`
        width: 100%;
        box-shadow: 0px 0px 3px grey;
        `
    }
`;

export const SearchInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;
    height: 42px;
    line-height: 30px;
    outline: 0;
    border: 0;
    font-size: 16px;
    border-radius: 20px;
    padding: 0 20px;
    padding-left: 50px;
    margin: 0;
    -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;

    display: ${(props) => (props.showSearchInput ? 'block' : 'none')}
`;

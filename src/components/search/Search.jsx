import React from "react";
import debounce from "lodash.debounce";

import {SearchContext} from "../../App"

import styles from "./Search.module.scss"


const Search = () => {

    const {setValueForSearch} = React.useContext(SearchContext);
    const [localValue, setLocalValue] = React.useState("");
    const inputRef = React.useRef();




    const clearSearch = () => {
        setValueForSearch("");
        setLocalValue("");
        inputRef.current.focus();
    }



    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onChangeGlobalInput = React.useCallback(
        debounce((str) => {
            setValueForSearch(str);
        }, 500),
        []
    )

    const onChangeLocalInput = (event) => {
        setLocalValue(event.target.value);
        onChangeGlobalInput(event.target.value)
    }


    return (
        <div className={styles.searchContainer}>
            <svg
                className={styles.iconSearch}
                id="Icons"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path className="cls-1"
                      d="M18.856,14.624a10.022,10.022,0,1,0-4.234,4.234l4.254,4.255a2.994,2.994,0,1,0,4.239-4.23ZM2,10a8,8,0,1,1,8,8A8.009,8.009,0,0,1,2,10ZM21.7,21.708a1,1,0,0,1-1.4,0l-3.967-3.968a10.092,10.092,0,0,0,1.4-1.406L21.705,20.3a.976.976,0,0,1-.009,1.407Z"/>
                <path className="cls-1" d="M10,4a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0,4,4,0,0,1,4-4,1,1,0,0,0,0-2Z"/>
            </svg>
            <input
                ref={inputRef}
                value={localValue}
                onChange={onChangeLocalInput}
                className={styles.input}
                placeholder="Ведите название..."/>
            {localValue &&
                <svg
                    onClick={() => clearSearch()}
                    className={styles.iconClose}
                    height="512px"
                    id="Layer_1"
                    viewBox="0 0 512 512"
                    width="512px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
                </svg>
            }
        </div>
    )
}


export default Search;

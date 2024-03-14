import React from "react";
import Pagination from '@mui/material/Pagination';

import styles from "./PaginationBlock.module.scss"






const PaginationBlock = ({handleClick}) => {
    return (
        <Pagination
            className={styles.mainBlock}
            count={3}
            onClick={(event) => handleClick(+event.target.innerText)}
        />
    )
}

export default PaginationBlock;

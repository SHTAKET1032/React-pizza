import React from "react";

import styles from "./index.module.scss"


const index = () => {
    return(
        <div className={styles.root}>
            <h1>Ничего не найдено</h1>
            <span>Данная страница отсутствует на сайте</span>
        </div>
    )
}

export default index;

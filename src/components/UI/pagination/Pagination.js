import React from 'react';
import { getPagesArray } from '../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {//нужно получать номер текущий страницы и массив на основание из которого надо отрисовывать элементы

    let pagesArray = getPagesArray(totalPages) 

    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span 
                    onClick={() => changePage(p)} //передаем номер страницы который нажал пользователь
                    key={p} 
                    className={page === p//если страница равна текущей иттерации
                        ? 'page page__current' 
                        : 'page'} //
                    >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;
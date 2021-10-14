import React from 'react'

const Pagination = ({totalPosts, postPerPage, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++ ) {
        pageNumbers.push(i);
    }
    
    


    return (
        <nav>
            <ul className="pagination" >
                {pageNumbers.map(numbers => (
                    <li className="page-item" key={numbers}> 
                                <a   href="#" className="page-link" onClick = {() => paginate(numbers)}>
                            {numbers}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;

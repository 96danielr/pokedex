import React from 'react';

const Pagination = ({postsPerPage, totalPosts}) => {

    const PageNumbers = []
    for (let i=1;i<= Math.ceil(totalPosts/postsPerPage);i++){

        PageNumbers.push(i);
    }
    return (
        <div>
            <ul className="pagination">
                {PageNumbers.map(number=>(

                    <li key={number} className="page-item">

                        <a href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
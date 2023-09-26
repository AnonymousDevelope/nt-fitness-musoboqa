import React from 'react'
import { PaginationLeft, PaginationRight } from '../../../assets/react-icons'

const index = ({className,children,item1,item2,item3,}) => {
    return (
        <div className={className}>
            <h4 className='pagination__soni'> {children}</h4>
            <div className='card__pagination'>
                <PaginationLeft />
                <div className='pagination__item'>{item1}</div>
                <div className='pagination__item'>{item2}</div>
                <div className='pagination__item'>{item3}</div>
                <PaginationRight />
            </div>
        </div>
    )
}

export default index
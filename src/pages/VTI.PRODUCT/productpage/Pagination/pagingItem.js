import './paging.css'

function PagingItem({ page, isActive, onPageClick }) {
    if (isActive) {
        return (
            <h1>
                <li className="page-item"><a className="page-link active" onClick={() => onPageClick(page)}>{page}</a></li>
            </h1>
            
            )
    } else {
        return (
            <h1>
                <li className="page-item"><a className="page-link" onClick={() => onPageClick(page)}>{page}</a></li>
            </h1>
            
        )
    }
}
export default PagingItem;
import './category-preview.styles.scss'
import ProductCard from '../productCard/productCard.component'
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, product }) => {
return (
    <div className='category-preview-container'>
        <h2>
            <Link className='title' to={title}>{title.toUpperCase()}</Link>
            <div className='preview'>
                {product
                    .filter((_, index) => index < 4)
                    .map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                    }
            </div>
        </h2>
    </div>
)}

export default CategoryPreview
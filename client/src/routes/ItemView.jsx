import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactLoading from 'react-loading';
import Item from '../components/Item/Item';

const ProductView = (props) => {
    const param = useParams()
    const [ item, setItem ] = useState()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get("https://shema-backend.vercel.app/api/items")
            .then(res => {
                setItem(res.data.filter((item) => item._id === param.id))
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [param.id])
    
    return (
            <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
                {loading && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto'/>}
                {item && <Item item={item[0]}/>}
            </div>
     );
}
 
export default ProductView;
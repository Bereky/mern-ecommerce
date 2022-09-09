import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactLoading from 'react-loading';
import Category from '../components/Category/Category';

const CategoryView = () => {
    const param = useParams()
    const [ menItems, setMenItems ] = useState()
    const [ womenItems, setWomenItems ] = useState()
    const [ kidsItems, setKidsItems ] = useState()
    const [ loading , setLoading ] = useState(true) 

    useEffect(() => {
        axios.get("https://shema-ecommerce.herokuapp.com/api/items")
            .then(res => {
                setMenItems(res.data.filter((item) => item.category === "men"))
                setKidsItems(res.data.filter((item) => item.category === "kids" ))
                setWomenItems(res.data.filter((item) => item.category === "women")) 
                setLoading(false)
            })
            .catch(err => console.log(err))

        window.scrollTo(0, 0)
    }, [param.id])
    
    return ( 
        <div className='d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto'>
            {loading && <ReactLoading type="balls" color='#FFE26E' height={100} width={100} className='m-auto'/>}
            { menItems && param.id === 'men' && <Category name="Men's Fashion" items={menItems} category="men"/>}
            { womenItems && param.id === 'kids' && <Category name="Kids Fashion" items={kidsItems} category="kids"/>}
            { kidsItems && param.id === 'women' && <Category name="Women's Fashion" items={womenItems} category="women"/>}
        </div>
     );
}
 
export default CategoryView;
import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import l1 from '../assets/l1.jpg'
import l2 from '../assets/l2.jpg'
import l3 from '../assets/l3.jpg'
import w1 from '../assets/w1.jpg'
import w2 from '../assets/w2.jpg'
import w3 from '../assets/w3.jpg'
import w4 from '../assets/w4.jpg'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

//dispatch update krta hai redux state ko
// kul mila ke bat ye hai ki ye data bhejega redux me
const products = [
    {
        name: 'apple mac pro12',
        price: '142599',
        id: 'fgiuytg32bnkj666hnmkuytf',
        pic: l2
    },
    {
        name: 'titne watch',
        price: '98765',
        id: 'fgiuytgbw3sxnkjhnmkuytf',
        pic: w3
    },
    {
        name: 'apple mobile',
        price: '7090',
        id: 'gfdsfgbvd2swer',
        pic: pic2
    },
    {
        name: 'hp laptop PC1019234',
        price: '75999',
        id: 'fgiuytg32bn667kjhnmkuytf',
        pic: l3
    },
    {
        name: 'watch 43221 xolo',
        price: '3405075',
        id: 'fgiuytg32bnkjhnmkuytf',
        pic: w4
    },
    {
        name: 'gucci shoes',
        price: '4297',
        id: 'fgiu1mk5uytf',
        pic: pic1
    },
    {
        name: 'lenevo laptop 6425pc',
        price: '30505',
        id: 'fgiuytg32b65nkjhnmkuytf',
        pic: l1
    },
    {
        name: 'fancy watch',
        price: '300',
        id: 'fgiuytgbn4kjhnmkuytf',
        pic: w1
    },
    {
        name: 'nike shoes',
        price: '1400',
        id: 'fgiuyt7gbnmkuytf',
        pic: s1
    },
    {
        name: 'adidas shoes',
        price: '999',
        id: 'fgiuyt11gsdfghbnmkuytf',
        pic: s2
    },
    {
        name: 'smart watch',
        price: '6544',
        id: 'fgiuysdftgb01nkjhnmkuytf',
        pic: w2
    },
    {
        name: 'rebbok shoes',
        price: '1140',
        id: 'fgiuytwertygbnmkuytf',
        pic: s3
    }
]



const Home = () => {
    const dispatch = useDispatch();
    const addToCart = (options) => {
        dispatch({ type: "addToCart", payload: options });
        dispatch({ type: "calculatePrice" });
        toast.success('Added in bag successfully !')
    }


    return (

        <>

            <div className='heading'>Select Your Favorat Items -</div>
            <div className='home'>

                {
                    products.map((e) => (
                        <Producutinfo
                            key={e.id}
                            name={e.name}
                            id={e.id}
                            price={e.price}
                            pic={e.pic}
                            handler={addToCart}
                        />
                    ))
                }
            </div>
        </>
    )
}
const Producutinfo = ({ name, id, price, handler, pic }) => (
    <div className="productCart">
        <img src={pic} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button
            onClick={() =>
                handler({
                    name,
                    price,
                    id,
                    quantity: 1,
                    pic
                })
            }
        >Add in bag
        </button>
    </div>

);

export default Home
import React from 'react'
import './HomeProduct.css'
import { Link} from 'react-router-dom'


const HomeProduct = () => {
    const productData = [
        {
            id: 1,
            image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 150,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
            title: 'Kaushalam kalash Copper Pot',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 130,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 5,
            image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 150,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 6,
            image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
            title: 'Kaushalam kalash Copper Pot',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 7,
            image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 130,
            trendingProductName: 'Featured',
            quantity: 1,
        },
        {
            id: 8,
            image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
            title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
            desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
            price: 120,
            trendingProductName: 'Featured',
            quantity: 1,
        }
    ]
  return (
    <div className='px-3 HomeProducts'>
        <h2>Our Best-Selling Products</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                productData.map((product)=>{
                    let{title, image, price, id} = product
                    return (
                        <Link className="col text-decoration-none" key={id} to={`/productDetail/${id}`}>
                        <div className="card h-100">
                          <img src={image} className="card-img-top" alt={title}/>
                          <div className="card-body">
                            <p className='logoname text-secondary'>URBAN-HIVE</p>
                            <h5 className="card-title">{title.substring(0, 25)}</h5>
                            <p className="card-text  fs-3"><span className='' style={{fontWeight:'900'}}>₹  </span>{price} /-</p>
                            <button className='btn btn-sm w-100 bluebtn'> Add To Cart </button>
                          </div>
                        </div>
                      </Link>
                    )
                })
            }

  
</div>
    </div>
  )
}

export default HomeProduct
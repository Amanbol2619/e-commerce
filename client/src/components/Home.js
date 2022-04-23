
import React, { useEffect } from 'react';
import { showLoadingMsg } from '../helper/message';
import Card from './Card';
import { getNewArrivals } from '../redux/actions/filterActions';
import { getProductsByCount } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () =>{
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNewArrivals());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getProductsByCount());
	}, [dispatch]);

	const { newArrivals } = useSelector(state => state.filters);
	const { products } = useSelector(state => state.products);
	const { loading } = useSelector(state => state.loading);
return (
    <section className='home-page'>
			
			<div id="demo" className="carousel slide" data-bs-ride="carousel">

 
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
 
  <div className="carousel-inner">
    <div className="carousel-active ">
      
    </div>
    <div className="carousel-item  ">
      
    </div>
    <div className="carousel"></div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>


			<hr/>
			
			 {loading ? (
				<div className='text-center'>{showLoadingMsg()}</div>
			) : (
				<>
					<div className='container'>
						<hr className='py-4' />
						<h3 className='py-4'>Шинээр нэмэгдсэн</h3>
						<div className='row'>
							{newArrivals &&
								newArrivals.map(newArrival => (
									<Card
										key={newArrival._id}
										product={newArrival}
										homePage={true}
									/>
								))}
						</div>

						<hr className='py-4' />
						<h3 className='py-4'>Menu</h3>
						<div className='row'>
							{products &&
								products.map(product => (
									<Card
										key={product._id}
										product={product}
										homePage={true}
									/>
								))}
						</div>
					</div>
				</>
			)} 
		</section>
);
}
export default Home;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';
import {useParams } from 'react-router-dom'

const Product = ( props) => {
    const navigate = useNavigate();
	const { productId } = useParams(props);
	console.log(productId, '---------df-d--');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(productId));
	}, [dispatch, productId]);

	const { product } = useSelector(state => state.products);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	const handleGoBackBtn = () => {
		navigate('/shop');
	};

	return (
		<section className='product-page m-4'>
			<button
				to='/shop'
				className='btn btn-light text-primary mb-4'
				onClick={handleGoBackBtn}
			>
				Буцах
			</button>
			{product && (
				<div className='row'>
					<div className='col-md-6'>
						<img
							className='img-fluid w-100 mb-4'
							src={`/uploads/${product.fileName}`}
							alt='product'
						/>
					</div>
					<div className='col-md-5'>
						<h3 className='mb-4'>{product.productName}</h3>
						<p className='text-muted border-top py-2'>
							Үнэ:{' '}
							{product.productPrice.toLocaleString('en-US', {
								style: 'currency',
								currency: 'MNT',
							})}
						</p>
						<p className='text-muted border-top py-2'>
							Төлөв:{' '}
							{product.productQty <= 0
								? 'Дууссан'
								: 'Нөөцөд байгаа'}
						</p>
						<p className='text-muted border-top py-2'>
							Тайлбар: {product.productDesc}
						</p>
						<button
							className='btn btn-dark btn-large btn-block mb-5 py-2'
							disabled={product.productQty <= 0}
							onClick={handleAddToCart}
						>
							Захиалах
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Product;
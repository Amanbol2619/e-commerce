import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_TO_CART } from '../redux/constants/cartConstants';
import { deleteFromCart } from '../redux/actions/cartActions';
// import { useNavigate } from 'react-router-dom';

const Cart = () => {
    // const navigate = useNavigate();
	const { cart } = useSelector(state => state.cart);

	const dispatch = useDispatch();

	// const handleGoBackBtn = () => {
	// 	navigate.goBack('/shop');
	// };

	const handleQtyChange = (e, product) => {
		const cart = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [];

		cart.forEach(cartItem => {
			if (cartItem._id === product._id) {
				cartItem.count = e.target.value;
			}
		});

		localStorage.setItem('cart', JSON.stringify(cart));

		dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});
	};

	return (
		<section className='cart-page m-4'>
			{cart.length <= 0 ? (
				<div className='mt-4 p-5 '>
					<h1 className='display-4'>
						 Таны захиалга хоосон байна{' '}
						<button
							className='btn btn-light text-primary ml-4'
							
						>
						<Link to='/shop'>Буцах</Link>	
						</button>
					</h1>
				</div>
			) : (
				<>
					<div className='mt-4 p-5 '>
						<h1 className='display-4'>Захиалгын хэсэг</h1>
					</div>
					<div className='row'>
						<div className='col-md-8'>
							<table className='table'>
								<thead>
									<tr>
										<th scope='col'></th>
										<th scope='col'>Хоол</th>
										<th scope='col'>Үнэ</th>
										<th scope='col'>Тоо/ширхэг</th>
										<th scope='col'>Устгах</th>
									</tr>
								</thead>
								<tbody>
									{cart.map(product => (
										<tr key={product._id}>
											<th scope='row'>
												{' '}
												<img
													style={{
														maxWidth: '110px',
													}}
													className='img-fluid w-100 img-thumbnail'
													src={`/uploads/${product.fileName}`}
													alt='product'
												/>
											</th>
											<td>
												{' '}
												<Link
													to={`/product/${product._id}`}
												>
													{product.productName}
												</Link>
											</td>
											<td>
												{' '}
												{product.productPrice.toLocaleString(
													'en-US',
													{
														style: 'currency',
														currency: 'USD',
													}
												)}
											</td>
											<td>
												<input
													type='number'
													min='1'
													max={product.productQty}
													value={product.count}
													onChange={e =>
														handleQtyChange(
															e,
															product
														)
													}
												/>
											</td>
											<td>
												{' '}
												<button
													type='button'
													className='btn btn-danger btn-sm'
													onClick={() =>
														dispatch(
															deleteFromCart(
																product
															)
														)
													}
												>
													<i className='far fa-trash-alt pr-1'></i>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className='col-md-4 border-left pl-4'>
							<h2>Захиалга</h2>
							<p className='font-weight-light text-muted border-bottom'>
								{cart.length === 1
									? '(1) Төрөл'
									: `(${cart.length}) Төрөл`}
							</p>
							<p className='font-weight-bold'>
								Нийт: ₮
								{cart
									.reduce(
										(currentSum, currentCartItem) =>
											currentSum +
											currentCartItem.count *
												currentCartItem.productPrice,
										0
									)
									.toFixed(2)}
							</p>
							<button className='btn btn-dark btn-large btn-block mb-5 py-2'>
							  <Link to='/signin'>Захиалах </Link>
							</button>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Cart;
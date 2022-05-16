import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { getCategories } from '../redux/actions/categoryActions';
import { useParams } from 'react-router-dom';

const AdminEditProduct = ( props ) => {
	
	 let navigate = useNavigate();
	const  { productId } = useParams( props);

	
	const dispatch = useDispatch();
	const { product } = useSelector(state => state.products);
	const { categories } = useSelector(state => state.categories);

	
	const [productImage, setProductImage] = useState(null);
	const [productName, setProductName] = useState('');
	const [productDesc, setProductDesc] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productCategory, setProductCategory] = useState('');
	const [productQty, setProductQty] = useState('');

	
	useEffect(() => {
		if (!product) {
			dispatch(getProduct(productId));
			dispatch(getCategories());
		} else {
			setProductImage(product.fileName);
			setProductName(product.productName);
			setProductDesc(product.productDesc);
			setProductPrice(product.productPrice);
			setProductCategory(product.productCategory);
			setProductQty(product.productQty);
		}
	}, [dispatch, productId, product]);

	
	const handleImageUpload = e => {
		const image = e.target.files[0];
		setProductImage(image);
	};

	const handleProductSubmit = async e => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('productImage', productImage);
		formData.append('productName', productName);
		formData.append('productDesc', productDesc);
		formData.append('productPrice', productPrice);
		formData.append('productCategory', productCategory);
		formData.append('productQty', productQty);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		await axios
			.put(`/api/product/${productId}`, formData, config)
			.then(res => {
				navigate('/admin/dashboard');
			})
			.catch(err => {
				console.log(err);
			});
	};

	
	return (
		<Fragment>
			<AdminHeader />
			<div className='container my-3'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<Link to='/admin/dashboard'>
							<span className='fas fa-arrow-left'>Буцах</span>
						</Link>
						<div>
							<br />
							<div className='modal-content'>
								<form onSubmit={handleProductSubmit}>
									<div className='modal-header bg-warning text-white'>
										<h5 className='modal-title'>
											Шинэчлэх
										</h5>
									</div>
									<div className='modal-body my-2'>
										<Fragment>
											<label className='btn btn-dark mr-4'>
												Файл сонгох
												<input
													type='file'
													name='productImage'
													accept='images/*'
													hidden
													onChange={handleImageUpload}
												/>
											</label>
											{productImage &&
											productImage.name ? (
												<span className='badge badge-secondary'>
													{productImage.name}
												</span>
											) : productImage ? (
												<img
													className='img-thumbnail'
													style={{
														width: '120px',
														height: '80px',
													}}
													src={`/uploads/${productImage}`}
													alt='product'
												/>
											) : null}

											<div className='form-group'>
												<label className='text-secondary'>
													Нэр
												</label>
												<input
													type='text'
													className='form-control'
													name='productName'
													value={productName}
													onChange={e =>
														setProductName(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													Тайлбар
												</label>
												<textarea
													className='form-control'
													rows='3'
													name='productDesc'
													value={productDesc}
													onChange={e =>
														setProductDesc(
															e.target.value
														)
													}
												></textarea>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													Үнэ
												</label>
												<input
													type='text'
													className='form-control'
													name='productPrice'
													value={productPrice}
													onChange={e =>
														setProductPrice(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-row'>
												<div className='form-group col-md-6'>
													<label className='text-secondary '>
														Категори
													</label>
													<select
														className='custom-select mx-2 mt-2 mb-2'
														name='productCategory'
														value={productCategory}
														onChange={e =>
															setProductCategory(
																e.target.value
															)
														}
													>
														<option value=''>
															 сонгох...
														</option>
														{categories &&
															categories.map(
																c => (
																	<option
																		key={
																			c._id
																		}
																		value={
																			c._id
																		}
																	>
																		{
																			c.category
																		}
																	</option>
																)
															)}
													</select>
												</div>

												<div className='form-group col-md-6'>
													<label className='text-secondary'>
														Тоо
													</label>
													<input
														type='number'
														className='form-control'
														min='0'
														max='1000'
														name='productQty'
														value={productQty}
														onChange={e =>
															setProductQty(
																e.target.value
															)
														}
													/>
												</div>
											</div>
										</Fragment>
									</div>
									<div className='modal-footer'>
										<button
											type='submit'
											className='btn btn-warning text-white'
										>
											дарах
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default AdminEditProduct;
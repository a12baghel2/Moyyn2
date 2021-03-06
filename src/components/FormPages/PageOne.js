import React from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { sendRequest } from '../../util/helpers/helper-methods';
import '../../Svg/FormImage1';
import { pageOneValidation as validationSchema } from '../../util/validation/form-validation';
import {
	Grid,
	Link,
	Typography,
	Box,
	Button,
	useMediaQuery
} from '@material-ui/core'
import TextField from '../FormElements/TextFieldForm';
import Checkbox from '../FormElements/CheckboxForm';
import './../../static/language.css'
import FormImage1 from '../../Svg/FormImage1';
import Switch from '../FormElements/SwitchForm';

const PageOne = ({ initialValues, handleFormChange }) => {

	const history = useHistory();
	const screenAtSmall = useMediaQuery("(max-width:600px)");

	const handleSubmit = (values, { setErrors }) => {
		sendRequest('/application', 'POST', { email: values.email })
			.then(data => {
				if (data.success) {
					handleFormChange(values, 0, 'cv')
				} else setErrors({ email: '*Email address already in use' });
			})
	}

	return (
		<React.Fragment>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{
					({ values }) => {

						return (
							<>
								<div className="flex flex-row-l self-start flex-row-m flex-column">
									<div className="flex flex-1 mt2-m mt2 mt2-l" >
										<div className="tc">
											<p className='f3-l f4-m f6 tc gray'>The journey to your next job starts here</p>
											<FormImage1/>
											<p className='f5-l f6-m f7 tc gray'>Join  our talent pool for free and let our AI find you the perfect job</p>
										</div>
										<hr className='vh-75-l vh-50-m ml5' style={{ border: "1px solid rgb(249, 246, 246)" }} />
									</div>

									<div className='flex-1 flex-2-m flex-2-mo bg-white br2 pb6-l pb4-m pb4 pt1-l pt1-m pt2'>
										<Form>
											<Grid className="lsv-pp" container spacing={4} item xs={12} style={{margin:"0", padding: "1rem", paddingTop:"0"}} >
												<Grid item xs={12}>
													<Box width='100%' display='flex' justifyContent='center'>
														<Box width={screenAtSmall ? '100%' : '90%'} display='flex' justifyContent='center'>
															<Grid container spacing={3}>
																<Grid item xs={12}>
																	<TextField
																		name='email'
																		placeholder="Email"
																	/>
																</Grid>

															<Grid item xs={12}>
																<TextField 
																	name='password'
																	placeholder='Password'
																	type="password"
																/>
															</Grid>

															<Grid item xs={12}>
																<TextField 
																	name='confirmpassword'
																	placeholder='Confirm Password'
																	type="password"
																/>
															</Grid>

																<Grid item xs={12} md={6}>
																	<TextField
																		name='firstname'
																		placeholder='First Name'
																	/>
																</Grid>
																<Grid item xs={12} md={6}>
																	<TextField
																		name="lastname"
																		placeholder="Last Name"
																	/>
																</Grid>

																<Grid item xs={12}>
																	<div className="switchclr">
																		<Switch 
																			name="activeJobSeeking"
																			label="Currently Looking For a Job"
																			variant='body1'
																		/>
																	</div>
																</Grid>

																<Grid item xs={12}>
																	<Checkbox
																		name='termsAndPrivacyFlag'
																		label={
																			<React.Fragment>
																				By submitting the application I confirm I have read
																			and agreed to the{" "}
																				<Link
																					href="https://moyyn.com/terms-and-conditions-2/"
																					rel="noopener"
																					target="_blank"
																					style={{ cursor: "pointer", color:"#6EB6FF" }}
																				>
																					Terms of Use
																			</Link>{" "}
																				and{" "}
																				<Link
																					href="https://moyyn.com/privacy/"
																					rel="noopener"
																					target="_blank"
																					style={{ cursor: "pointer", color:"#6EB6FF" }}
																				>
																					Privacy Policy
																			</Link>
																			.{" "}
																			</React.Fragment>
																		}
																	/>
																</Grid>
															</Grid>
														</Box>
													</Box>
												</Grid>
												<Grid item xs={12}>
													<Box display='flex' justifyContent='center'>
														<Button type='submit' className='moyynButton--main'>
															Next
														</Button>
													</Box>
												</Grid>
												<Grid item xs={12}>
													<Typography variant='subtitle2' align="center">
														Already submitted an application? Check application status{" "}
														<Link
															onClick={() => history.push('/candidate')}
															style={{ cursor: "pointer" , color:"#6EB6FF" }}
														>
															{" "}
													here
												</Link>
													</Typography>
												</Grid>
											</Grid>
										</Form>
									</div>
								</div>
							</>
						)
					}
				}
			</Formik>
		</React.Fragment>
	)
}

export default PageOne;
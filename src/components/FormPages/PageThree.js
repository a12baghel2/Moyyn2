import React from 'react';
import { Formik, Form } from 'formik';
import { pageThreeValidation as validationSchema } from '../../util/validation/form-validation';
import { countriesArray, citiesArray, visaOptions } from '../../util/data/static-data';
import { Grid } from '@material-ui/core';
import TextField from '../FormElements/TextFieldForm'; 
import Checkbox from '../FormElements/CheckboxForm';
import Autocomplete from '../FormElements/AutocompleteForm';
import SelectMenu from '../FormElements/SelectMenuForm';
import PhoneNumber from '../FormElements/PhoneNumberForm';
import DateForm from '../FormElements/DateForm';
import Buttons from '../FormElements/Buttons';

const PageThree = ({ initialValues, handleFormChange }) => {

	const handleSubmit = (values) => {
		handleFormChange(values, 2, 'preferences')
	}
	
	return(
		<React.Fragment>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
					{
						({ values }) => {

							return(
								<div className='bg-white c-shadow'>
										<Form>
										<Grid container spacing={5} style={{padding:"2rem"}}>
											{}
											{/*Left*/}
											<Grid item xs={12} lg={6} >
												<Grid container spacing={5}>
													<Grid item xs={12} className="lsv">
														<Autocomplete freeSolo={false}
															options={countriesArray}
															optionLabel="name"
															name="country"
															placeholder="Country of Residence"
														/>
													</Grid>
													<Grid item xs={12}>
														<SelectMenu
															name="visaType"
															label="Visa Status"
															options={visaOptions}
														/>
													</Grid>
													<Grid item xs={12}>
													{}
														<Checkbox
															name="currentlyEmployedFlag"
															label="Currently Employed"
															variant='body1'
														/>
													</Grid>
													<Grid item xs={12} className="lsv-pp">
														<PhoneNumber name="contactNumber" />
													</Grid>
												</Grid>
											</Grid>
											{/*Right*/}
											<Grid item xs={12} lg={6}>
												<Grid container spacing={5}>
													<Grid item xs={12} className="lsv">
														<Autocomplete 
															options={citiesArray}
															optionLabel="city"
															name="city"
															placeholder="City of Residence"
														/>
													</Grid>
													<Grid item xs={12}>
														<DateForm
															name="earliestJoiningDate"
															label="Earliest Joining Date"
														/>
													</Grid>
													<Grid item xs={12}>
													{}
														<Checkbox
															name="drivingPermitFlag"
															label="EU Driver's License"
															variant='body1'
														/>
													</Grid>
													<Grid item xs={12} className="lsv-pp">
														{/*eslint-disable-next-line*/}
														<TextField
															name="noticePeriod"
															label="Notice Period (In Months)"
															type="number"
															placeholder="Notice Period (In Months)"
															// eslint-disable-next-line
															disabled={!values.currentlyEmployedFlag}
														/>
													</Grid>
												</Grid>
											</Grid>
											<Grid item xs={12}>
												<Buttons back={() => handleFormChange(values, 2, 'cv', false)} />
											</Grid>
										</Grid>
									</Form>
									</div>
							)
						}
					}
			</Formik>
		</React.Fragment>
	)
}

export default PageThree;
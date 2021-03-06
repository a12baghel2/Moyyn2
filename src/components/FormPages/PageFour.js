import React from 'react';
import { Formik, Form } from 'formik';
import { pageFourValidation as validationSchema } from '../../util/validation/form-validation';
import { europeanCountries, europeanCities } from '../../util/data/static-data'; 
import { Grid } from '@material-ui/core'
import Checkbox from '../FormElements/CheckboxForm';
import DesiredEmployment from '../FormElements/DesiredEmployment';
import AutocompleteChips from '../FormElements/AutocompleteChipsForm';
import ProfilePicker from '../FormElements/ProfilePicker';
import Buttons from '../FormElements/Buttons';

const PageFour = ({ initialValues, handleFormChange }) => {

	const handleSubmit = (values) => {
		handleFormChange(values, 3, 'career')
	}

	const onKeyDown = (keyEvent) => {
		if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
			keyEvent.preventDefault();
		}
	}

	return(
		<React.Fragment>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
					{
						({ values }) => {
							
							return(
								<div className='bg-white c-shadow'>
										<Form onKeyDown={onKeyDown}>
									<Grid container spacing={5} style={{padding:"2rem"}}>
										<Grid item xs={12}>
											<Checkbox
												name='relocationWillingnes'
												label='I am willing to relocate'
												variant='body1'
											/>
										</Grid>
										{
											values.relocationWillingnes && (
												<React.Fragment>
													<Grid item xs={12}>
														<AutocompleteChips
															name="countryPreferences"
															label="Countries of preference"
															placeholder="Countries of preference"
															options={europeanCountries}
														/>
													</Grid>
													<Grid item xs={12}>
														<AutocompleteChips
															name="cityPreferences"
															label="Cities of preference"
															placeholder="Cities of Preference"
															options={europeanCities}
														/>
													</Grid>
												</React.Fragment>
											)
										}


										<Grid item xs={12}>
											<DesiredEmployment />
										</Grid>
										<Grid item xs={12}>
											<ProfilePicker  />
										</Grid>
										<Grid item xs={12}>
											<Buttons back={() => handleFormChange(values, 3, 'information', false)} />
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

export default PageFour;
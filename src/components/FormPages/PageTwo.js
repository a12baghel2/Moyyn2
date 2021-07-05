import React from 'react';
import { Formik, Form } from 'formik';
import { pageTwoValidation as validationSchema } from '../../util/validation/form-validation';
import { Grid, Typography } from '@material-ui/core';
import ResumeUpload from '../FormElements/ResumeUpload';
import Buttons from '../FormElements/Buttons';
import AutocompleteChips from '../FormElements/AutocompleteChipsForm';
import ResumeUploadGer from '../FormElements/ResumeUploadGer';
import { AvailableJobs } from '../../util/data/AvailableJobs';


const PageTwo = ({ initialValues, handleFormChange, editform }) => {

	const handleSubmit = (values) => {
		handleFormChange(values, 1, 'information')
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
							<div className='bg-white c-shadow'>
								<Form>
									<Grid container spacing={3} xs={12} style={{ padding: "2rem" }}>
										{}
										<div className='flex'>
											<div className='mr4 flex-1'><ResumeUpload editform={editform} /></div>
											<div className='flex-1'><ResumeUploadGer editform={editform}/></div>
										</div>
										<Grid item={true} xs={12}>
											<Typography
												variant="h6"
												style={{ marginBottom: "1rem" }}
												align="center"
												color='textSecondary'
												className="f4-l f5-m f6"
											>
												Positions applying for
													</Typography>

											<Grid item={true} xs={12} className='lsv'>
												<AutocompleteChips
													name="desiredPositions"
													placeholder="Desired Positions"
													options={AvailableJobs}
												/>
											</Grid>

										</Grid>
										<Grid item={true} xs={12}>
											<Buttons editform={editform} back={() => handleFormChange(values, 1, true, false)} />
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

export default PageTwo;
import React from "react";
import { Field } from "formik";
import {
	Grid,
	Typography,
	Checkbox,
	FormControlLabel,
} from "@material-ui/core";
import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon';
import FormError from './FormError';

const DesiredEmployment = () => {
	const neonStyles = useNeonCheckboxStyles();

	return(
		<Field name="desiredEmployment">
 			{({ form, meta, field }) => {

 				return(
					<Grid container>
						<Grid item xs={12}>
							<Typography
								color="textSecondary"
								variant="h6"
								style={{ fontSize: "1rem", marginBottom: '0.5rem' }}
							>
								Type of desired employment:
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControlLabel
								style={{ color: "#6c757d" }}
								label="Full Time"
								{...field}
								name="desiredEmployment.fulltime"
								control={
									<Checkbox
										checked={
											form.values.desiredEmployment.fulltime
										}
										color="primary"
										disableRipple
						            classes={neonStyles}
						            checkedIcon={<span />}
						            icon={<span />}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControlLabel
								style={{ color: "#6c757d" }}
								label="Part Time"
								{...field}
								name="desiredEmployment.partTime"
								control={
									<Checkbox
										checked={
											form.values.desiredEmployment.partTime
										}
										color="primary"
										disableRipple
						            classes={neonStyles}
						            checkedIcon={<span />}
						            icon={<span />}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControlLabel
								style={{ color: "#6c757d" }}
								label="Remote"
								{...field}
								name="desiredEmployment.remote"
								control={
									<Checkbox
										checked={
											form.values.desiredEmployment.remote
										}
										color="primary"
										disableRipple
						            classes={neonStyles}
						            checkedIcon={<span />}
						            icon={<span />}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<FormControlLabel
								style={{ color: "#6c757d" }}
								label="Freelancer"
								{...field}
								name="desiredEmployment.freelance"
								control={
									<Checkbox
										checked={
											form.values.desiredEmployment.freelance
										}
										color="primary"
										disableRipple
						            classes={neonStyles}
						            checkedIcon={<span />}
						            icon={<span />}
									/>
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormError name="desiredEmployment" />
						</Grid>
					</Grid>
				)}
			}
		</Field>
	);
}

export default DesiredEmployment;

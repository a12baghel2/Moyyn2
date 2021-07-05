import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import FormError from './FormError';

const FormikAutocomplete = ({ name, label, options, optionLabel, freeSolo = true,placeholder=null }) => {

	return (
		<React.Fragment>
			<Field name={name}>
				{({ form, field, meta }) => {


					return (
						<Autocomplete
							options={options}
							getOptionLabel={(option) => option.name}
							fullWidth
							freeSolo={freeSolo}
							onChange={(e,v)=>form.setFieldValue(name, v.name)}
							inputValue={form.values[name]}
							renderInput={(params) => (
								<TextField
									placeholder={placeholder}
									{...params}
									{...field}
									variant="outlined"
								/>
							)}
						/>
					);
				}}
			</Field>
			<FormError name={name} />
		</React.Fragment>
	);
};

export default FormikAutocomplete;

import React, { useState } from "react";
import { Field } from "formik";
import '../../static/language.css';
import {
	Grid,
	TextField,
	Button,
	Typography,
	Snackbar,
	ListItem,
	ListItemText,
	Link,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const options = [
	'Platform',
	"LinkedIn",
	"Stackoverflow",
	"Github",
	"Xing",
	"Dribbble",
	"Behance",
	"Other",
];

const ProfilePicker = () => {
	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
	const [selectorValue, setSelectorValue] = useState("Platform");
	const [inputValue, setInputValue] = useState("");
	const [error, seterror] = useState(false);
	// eslint-disable-next-line
	const [toggleRender, setToggleRender] = useState(true);

	const handleSelectorChange = (e) => {
		setSelectorValue(e.target.value);
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleToggleRender = () => {
		setToggleRender((prevState) => (prevState ? false : true));
	};

	return (
		<Field name="onlineProfiles">
			{({ form, field, meta }) => {
				const profilesArray = Object.keys(
					form.values.onlineProfiles
				).map((key) => [key, form.values.onlineProfiles[key]]);

				const handleAddItem = () => {
					if (inputValue.length > 0 && selectorValue !== 'Platform') {
						form.values.onlineProfiles[selectorValue] = inputValue;
						seterror(false);
						setInputValue("");
						setIsSnackbarOpen(true);
						setSelectorValue('Platform')
					}
					else{
						seterror(true);
					}
				};

				const handleRemoveItem = (key) => {
					form.values.onlineProfiles[key] = "";
					handleToggleRender();
				};

				const handleKeyDown = (event) => {
					if (event.key === 'Enter') {
						handleAddItem();
					}
				}

				return (
					<Grid container spacing={3} xs={12}>
						<Grid item={true} xs={12}>
							<Typography
								color='textSecondary'
								variant="h6"
								style={{ fontSize: "1rem" }}
							>
								Online Profiles:
							</Typography>
						</Grid>
						<Grid item={true} xs={12} md={3}>
							<TextField
								fullWidth
								select
								SelectProps={{
									native: true,
								}}
								variant="outlined"
								value={selectorValue}
								onChange={handleSelectorChange}
							>
								{options.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</TextField>
						</Grid>
						<Grid item={true} xs={12} md={6}>
							<TextField
								fullWidth
								className="lsv-pp"
								variant="outlined"
								value={inputValue}
								onChange={handleInputChange}
								placeholder={"Paste URL here"}
								onKeyDown={handleKeyDown }
							/>
						</Grid>
						<Grid item={true} xs={12} md={3} style={{ display: "flex", alignItems: "center" }}>
							<Button
								startIcon={<AddIcon />}
								fullWidth
								style={{ margin: "0",backgroundColor:"#6EB6FF", color:"white" }}
								onClick={handleAddItem}
								className="dim"
							>Add</Button>
						</Grid>
						<Grid item={true} xs={12}>
							{
								// eslint-disable-next-line
								profilesArray.map((profile, i) => {
								if (profile[1].length > 0) {
									return (
										<ListItem key={i} button divider>
											<ListItemText
												primary={
													<React.Fragment>
														<Typography
															component="span"
															variant="subtitle2"
															color="textPrimary"
														>
															{profile[0]}:{" "}
															<Link
																href={profile[1].includes('http') ? profile[1] : 'http://' + profile[1]}
																rel="noopener"
																target="_blank"
															>
																{profile[1]}
															</Link>
														</Typography>
													</React.Fragment>
												}
											/>
											<HighlightOffIcon
												onClick={() => handleRemoveItem(profile[0])}
											/>
										</ListItem>
									);
								}
							})}
						</Grid>
						<Snackbar
							open={isSnackbarOpen || error}
							autoHideDuration={3000}
							onClose={() => {
								setIsSnackbarOpen(false);
								seterror(false);
							}}
						>
							<MuiAlert
								elevation={6}
								variant="filled"
								onClose={() => {
									seterror(false);
									setIsSnackbarOpen(false);
								}}
								severity={error?'error':'success'}
							>
								{error?'Please pick the platform':'Profile Added'}
							</MuiAlert>
						</Snackbar>
					</Grid>
				);
			}}
		</Field>
	);
};

export default ProfilePicker;

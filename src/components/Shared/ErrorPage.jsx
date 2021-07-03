import React from 'react';
import { 
	Typography,
	Button,
} from '@material-ui/core';

const ErrorPage = ({ setError, logged=false }) => {

	const handleClick = () => {
		setError(false);
		window.location.href = 'https://moyyn.com/maintenance/' ;
	}

	if(logged){
		return (
			<React.Fragment>
			<Typography align="center" className="w-80" color='textSecondary'>
				There has been an issue while loading your application. 
				Please click 'Next' to go back to dashboard.
				<br/><br/>
					<Button
					onClick={setError}
					variant="outlined"
					style={{backgroundColor:"#6EB6FF",color:"white",paddingBottom:"2px"}}
					className="c-shadow dim w-20"
				>
					<Typography>Next</Typography>
				</Button>{" "}
			</Typography>
		</React.Fragment>
	
		)
	}

	return(
		<React.Fragment>
			<Typography align="center" className="w-80" color='textSecondary'>
				Thank you for your interest in applying to our Talent Pool. There has been an issue while submitting your application. 
				Please click 'Next' to get a new application form.
				<br/><br/>
					<Button
					onClick={handleClick}
					variant="outlined"
					style={{backgroundColor:"#6EB6FF",color:"white",paddingBottom:"2px"}}
					className="c-shadow dim w-20"
				>
					<Typography>Next</Typography>
				</Button>{" "}
			</Typography>
		</React.Fragment>
	)
}

export default ErrorPage;

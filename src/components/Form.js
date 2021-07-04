import React, { useState, useEffect } from 'react';
import { checkFormComplete } from '../util/helpers/helper-methods';
import { url } from '../util/data/base-url';
import {Switch,Route,Redirect,useRouteMatch,useHistory,NavLink} from 'react-router-dom';
import { initialValues } from '../util/data/initial-values';
import PageOne from './FormPages/PageOne';
import PageTwo from './FormPages/PageTwo';
import PageThree from './FormPages/PageThree';
import PageFour from './FormPages/PageFour';
import PageFive from './FormPages/PageFive';
import ErrorPage from './Shared/ErrorPage';
import Loading from './Shared/Loading';
import '../static/CandidatesForm.scss'
import 'tachyons';
import '../static/toggle.css';
import Footer from './Footer'
import FormImage2 from '../Svg/FormImage2';
import FormImage3 from '../Svg/FormImage3';
import FormImage4 from '../Svg/FormImage4';
import FormImage5 from '../Svg/FormImage5';

const Form = ({ setEmail ,setid, editform=false, initialdata, setloggedin}) => {

	const [formValues, setFormValues] = useState(initialValues)
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const { path } = useRouteMatch();
	const history = useHistory();

	const [submitTrigger, setSubmitTrigger] = useState(false);

	useEffect(() => {
		//console.log('checking connection')
		if(editform) {
			history.push('editprofile/cv');
			setFormValues(initialdata);
		}// eslint-disable-next-line 
	},[initialdata]);

	const moveToPage = (page) => {
		history.push(`/${editform?'editprofile':'application'}/${page}`);
	}

	const handleFormChange = (values, part, next = false, complete = true, submit = false) => {
		if (complete) {
			setFormValues(prevState => {
				let newState = [...prevState];
				newState[part] = {...values, Complete: true};
				return newState;
			});	
		} else {
			setFormValues(prevState => {
				let newState = [...prevState];
				newState[part] = {...values};
				
				return newState;
			});	
		}

		if(!!next) {
			moveToPage(next)
		}

		if (submit) {
			setSubmitTrigger(true);
		}
	}

	const submitForm = () => {
		let form = [...formValues];
		
		const fileName = `${form[0].email}`;
		let file = null;
		let file2 = null;

		if(form[1].cvEnglish.length > 0) file = form[1].cvEnglish[0].data.replace(/^data:application\/pdf;base64,/,"");
		if(form[1].cvGerman.length > 0) file2 = form[1].cvGerman[0].data.replace(/^data:application\/pdf;base64,/,"");
		form[1].cvEnglish = {data:file,fileName:fileName + '_english.pdf'};
		form[1].cvGerman = {data:file2,fileName:fileName + '_german.pdf'};
		form[0].email = form[0].email.toLowerCase();

		const timeout = setTimeout(() => {
			history.push('/candidate/partner');
		}, 1000 * 120)		

		fetch(`${url}/${editform?'editprofile':'register'}`, {method: 'POST',headers: { "Content-Type": "application/json" },body: JSON.stringify(form)})
			.then(res => res.json())
			.then(data => {
				clearTimeout(timeout);
				//console.log('store returns:', data);
				if(data.success){
					if(!editform){
						setEmail(form[0].email);
						setid(data.candidate_id);
						setloggedin(true);
						localStorage.setItem("loggedin",JSON.stringify(true));
						localStorage.setItem("email",JSON.stringify(form[0].email));
						localStorage.setItem("id",JSON.stringify(data.candidate_id));
					}
					history.push('/dashboard');
				}
			})
			.catch(err => {
				clearTimeout(timeout);
				//console.log('store error:', err);
				setIsLoading(false);
				setError(true);
			})
	}

	useEffect(() => {
		window.scrollTo({
	   	top: 0,
	   	behavior: "auto"
	 	});
	})

	useEffect(() => {
		const [isComplete] = checkFormComplete(formValues)
		document.body.style.zoom = "90%";

		if (isComplete) {
			if (submitTrigger) {
				setIsLoading(true);
				submitForm()
			}
		}
	// eslint-disable-next-line
	}, [submitTrigger])

	const formComplete = () => {
		const [isComplete, missingParts] = checkFormComplete(formValues)
		return [isComplete, missingParts];
	}

	const handleError = () => {
		setFormValues(initialValues);
		history.push('/application');
		setError(false);
	}

	if (error) {
		return(
			<React.Fragment>
				<div className='flex items-center justify-center bg-white ma3 br2 vh-75'>
					<ErrorPage setError={handleError} />
				</div>
			</React.Fragment>
		)
	}

	if (isLoading) {
		return(
			<div className='flex items-center justify-center bg-white ma3 br2 vh-75'>
				<Loading text='AI matchmaking in progress...' />
			</div>
		)
	}
	return(
		<React.Fragment>
			<div>
				<div className="flex flex-row-l flex-column-m flex-column items-center items-start-l justify-around ph5-l pv4-l pa2-m pa2 bg-white" style={{minHeight:window.location.pathname==="/application" || window.location.pathname==="/application/"?"":"100vh"}}>			
					<div className={`${window.location.pathname==="/application" || window.location.pathname==="/application/" || window.location.pathname==="/editprofile" || window.location.pathname==="/editprofile/"?"hide":""} ml5 mr5 mt3`}>
						<div className='buttons flex mb5'>
							{/* <NavLink  className={`pointer link mr2 dim ba br-100 pv2 ph3 bg-white`} style={{border:"1px solid #6EB6FF", color:"#6EB6FF"}} onClick={()=>history.push(`${path}`)} exact to={`${path}`} activeClassName="active-btn">1</NavLink> */}
							<div exact="true" to={path} activeclassname="hide">
								<NavLink  className={`pointer link mr2 dim ba br-100 ph3 pv2 bg-white`} style={{border:"1px solid #6EB6FF", color:"#6EB6FF"}} onClick={()=>history.push(`${path}/cv`)} exact to={`${path}/cv`} activeClassName="active-btn">1</NavLink>
								<NavLink  className={`pointer link mr2 dim ba br-100 ph3 pv2 bg-white`} style={{border:"1px solid #6EB6FF", color:"#6EB6FF"}} onClick={()=>history.push(`${path}/information`)} exact to={`${path}/information`} activeClassName="active-btn">2</NavLink>
								<NavLink  className={`pointer link mr2 dim ba br-100 ph3 pv2 bg-white`} style={{border:"1px solid #6EB6FF", color:"#6EB6FF"}} onClick={()=>history.push(`${path}/preferences`)} exact to={`${path}/preferences`} activeClassName="active-btn">3</NavLink>
								<NavLink  className={`pointer link mr2 dim ba br-100 ph3 pv2 bg-white`} style={{border:"1px solid #6EB6FF", color:"#6EB6FF"}} onClick={()=>history.push(`${path}/career`)} exact to={`${path}/career`} activeClassName="active-btn">4</NavLink>
							</div>
						</div>						
						<Switch >
						{/* <Route exact path={`${path}`} exact>
						</Route> */}
						<Route exact path={`${path}/cv`} >
							<p className='f5 signleftp1'>Upload your CV</p>
							<FormImage2/>
						</Route>
						<Route exact path={`${path}/information`} >
							<p className='f5 signleftp1'>Personal information</p>
							<FormImage3/>
						</Route>
						<Route exact path={`${path}/preferences`} >
							<p className='f5 signleftp1'>What are your preferences?</p>
							<FormImage4/>
						</Route>
						<Route exact path={`${path}/career`} >
							<p className='f5 signleftp1'>Let us know about your skills</p>
							<FormImage5/>
						</Route>
						{/* <Redirect to={`${path}`} /> */}
					</Switch>
					</div>

					<div className="mt0-l mt2-m mt2 mr5-l mr5-m mr0">
						<Switch >
							<Route path={`${path}`} exact>
								{editform? <Redirect to={`${path}/cv`}/>: <PageOne 
									initialValues={formValues[0]}
									handleFormChange={handleFormChange} 
									editform={editform}
								/>}
							</Route>
							<Route path={`${path}/cv`} >
								<PageTwo 
									initialValues={formValues[1]}
									handleFormChange={handleFormChange}
									editform={editform} 
								/>
							</Route>
							<Route path={`${path}/information`} >
								<PageThree
									initialValues={formValues[2]}
									handleFormChange={handleFormChange} 
								/>
							</Route>
							<Route path={`${path}/preferences`} >
								<PageFour 
									initialValues={formValues[3]}
									handleFormChange={handleFormChange} 
								/>
							</Route>
							<Route path={`${path}/career`} >
								<PageFive 
									initialValues={formValues[4]}
									handleFormChange={handleFormChange}
									formComplete={formComplete}
								/>
							</Route>

							<Redirect to={`${path}`} />
						</Switch>
					</div>
				</div>
				<div className={`${window.location.pathname==="/application" || window.location.pathname==="/application/"?"":"hide"}`}>
					<Footer/>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Form;

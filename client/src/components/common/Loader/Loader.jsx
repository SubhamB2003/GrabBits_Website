import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
	return (
		<>
			<div className={classes.container}>
				<div className={classes.box}></div>
				<div className={classes.box}></div>
				<div className={classes.box}></div>
				<div className={classes.box}></div>
				<div className={classes.box}></div>
			</div>
		</>
	);
};

export default Loader;

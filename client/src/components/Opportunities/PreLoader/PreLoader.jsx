import React from 'react';
import classes from './PreLoader.module.css';

const PreLoader = () => {
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

export default PreLoader;

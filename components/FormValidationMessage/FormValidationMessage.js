import React, { useRef, useState } from "react";import {getContent} from '../../api/apolloClientContext';import styles from './form-validation-message.module.scss';function FormValidationMessage ({submitStatus, warning}) {		if (!warning) {		}	return (		<div className={`${styles['signUpForm']} ${warning?styles['--withMessage']:''}`}>		<img alt="" src="/email-success.svg"/>		</div>	);}export default FormValidationMessage;
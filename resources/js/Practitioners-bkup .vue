<template>
	<div>
		<flow-form ref="flowform" v-on:step="onStep" v-on:complete="onComplete" v-on:submit="onSubmit"
			v-bind:language="language" v-bind:progressbar="false" v-bind:standalone="true" v-bind:timer="false"
			@submit="store" method="POST" v-on:answer="onAnswer" v-on:goToQuestion="goToQuestion"
			v-on:goToPreviousQuestion="goToPreviousQuestion" v-on:goToNextQuestion="goToNextQuestion">

			<question v-for="(question, index) in questions"  v-bind="question" v-bind:key="'m' + index"
				v-model="question.model">
			<!-- Add the email input and error message here -->
			<input
				v-if="question.id === 'q_email'"
				type="text"
				v-modelValue="email"
				placeholder="Your Email"
				@input="checkEmail"
				@change="handleEmailChange" class="customer"
				/>
				<div v-if="!isEmailUnique && question.id === 'q_email'" class="error-message">
				{{ emailErrorMessage }}
				</div>
			</question>
			<!-- <div v-if="emailExists" class="error-msg">This email is already taken.</div> -->
		</flow-form>
		<clinic />
	</div>
	<div id="thankyou_not_nd" style="display:none">
		<a class="not_nd_f-prev" href="https://portal.healthbuddha.ca/join" role="button" aria-label="Previous step">Prev</a>
		<p class="f-description">
			Thank you for your interest. Please
				<a href="javascript:void(0)" id="click_me" @click="showAcForm()">Click Here</a> to apply. We will get back to you as soon as your request is
			approved.			
			
		</p>
	</div>
</template>

<script>

import { FlowForm, QuestionModel, QuestionType, ChoiceOption, LanguageModel, Question } from '@ditdot-dev/vue-flow-form'
import { onMounted } from 'vue';
import Clinic from './Clinic.vue';
import { ref } from "vue";
import axios from 'axios';


export default {
	name: 'Flowform',
	components: {
		FlowForm,
		Question,
		Clinic,
		question: FlowForm.Question
	},

	data() {
		return {
			place_name: "",
			loading: false,
			submitted: false,
			completed: false,
			emailExists: false,
			language: new LanguageModel({
				ok: 'Continue',
				// skip: "None of the above",
				enterKey: ''
			}),
			questions: [
				{
					id: 'q_naturopath',
					type: 'multiplechoice',
					tagline: '1 / 12',
					title: 'Are you a Naturopathic Doctor ?',
					subtitle: 'We are currently looking for Licensed Naturopathic Doctors .',
					multiple: false,
					required: true,
					options: [
						{
							label: 'Yes',
							value: 'Yes'
						},
						{
							label: 'No',
							value: 'No'
						},

					],
					jump: {
						a: 'q_name',
					},
					model: '',
				},
				{
					type: 'text',
					id: 'q_name',
					tagline: '2 / 12',
					title: 'Full Name',
					required: true,
					placeholder: 'Enter your full name',
					type: QuestionType.Text,
					jump: {
						_other: 'q_email'
					},
					model: '',
					onInput:'checkEmail'
				},
				{
					type: 'text',
					id: 'q_email',
					tagline: '3 / 12',
					title: 'Email',
					subtitle: 'We will communicate with you via this email in case we need more info about your practice.',
					required: true,
					type: QuestionType.Email,
					placeholder: 'Your Email',
					modelValue: "email",
					jump: {
						_other: 'q_area'
					},
					model: ''
				},
				{
					type: 'multiplechoice',
					id: 'q_area',
					tagline: '4 / 12',
					title: 'Area(s) of Focus (Pick only THREE)',
					subtitle: 'We are currently looking for NDs interested in developing their practice in the following areas.',
					multiple: true,
					required: true,
					max: 3,
					options: [
						{
							label: 'Perimenopause & Menopause',
						},
						{
							label: 'PCOS/PMS',
						},
						{
							label: 'Fertility & Pregnancy',
						},
						{
							label: 'Acne & Skincare',
						},
						{
							label: 'Weight Management',
						},
						{
							label: 'Thyroid Support',
						},
					],
					jump: {
						_other: 'q_services'
					},
					model: '',
				},

				{
					type: 'multiplechoice',
					id: 'q_services',
					tagline: '5 / 12',
					title: 'I provide these services',
					subtitle: 'Example: Naturopathic Doctor',
					skip: 'skip',
					multiple: true,
					required: false,
					options: [
						{
							label: 'BHRT',
						},
						{
							label: 'IV Therapy',
						},
						{
							label: 'Desiccated Thyroid',
						},
						{
							label: 'Vitamin Injections',
						},
					],
					jump: {
						_other: 'q_website'
					},
					model: '',
				},

				{
					type: 'text',
					id: 'q_website',
					tagline: '6 / 12',
					title: 'Website Address',
					required: true,
					type: QuestionType.Url,
					placeholder: 'Your Website',
					jump: {
						_other: 'q_associations'
					},
					model: ''
				},


				{
					type: 'multiplechoice',
					id: 'q_associations',
					tagline: '7 / 12',
					title: 'Education & Associations',
					multiple: true,
					required: false,
					skip: 'None Of the Above',
					options: [
						{
							label: 'Canadian College of Naturopathic Medicine (CCNM)',
							// value: 'Canadian College of Naturopathic Medicine; (CCNM)',

						},
						{
							label: 'Ontario Association of Naturopathic Doctors (OAND)',
							// value: 'Ontario Association of Naturopathic Doctors; (OAND)',

						},
						{
							label: 'Canadian Association of Naturopathic Doctors (CAND)',
							// value: 'Canadian Association of Naturopathic Doctors; (CAND)',

						},
						{
							label: 'College Of Naturopaths of Ontario (CONO)',
							// value: 'College Of Naturopaths of Ontario; (CONO)',							
						},
					],
					jump: {
						_other: 'q_session'
					},
					model: ''
				},

				{
					type: 'multiplechoice',
					id: 'q_session',
					tagline: '8 / 12',
					title: 'I am willing to offer 15-min Free Discovery Session to HealthBuddha leads',
					subtitle: ' ',
					required: true,
					options: [
						{
							label: 'Yes',
						},
						{
							label: 'No',
						},
					],
					jump: {
						_other: 'q_year'
					},
					model: ''
				},
				{
					type: 'text',
					id: 'q_year',
					tagline: '9 / 12',
					title: 'Year of getting license to practice.',
					subtitle: 'This is needed to help our users know more about you.',
					required: true,
					type: QuestionType.Text,
					placeholder: 'YYYY',
					mask: '####',
					jump: {
						_other: 'q_awarness'
					},
					model: ''
				},

				{
					type: 'text',
					id: 'q_awarness',
					tagline: '10 / 12',
					title: 'Help us grow Naturopathic awareness and contribute to the growth of the industry.',
					subtitle: 'Please recommend NDs we can reach out to sign up on HealthBuddha.ca, enter comma after every email address you enter.',
					required: false,
					type: QuestionType.LongText,
					placeholder: 'hello@healthbuddha.ca,hello@healthbuddha.ca',
					skip: 'skip',
					jump: {
						_other: 'q_upload'
					},
					model: ''
				},
				{
					type: 'file',
					id: 'q_upload',
					tagline: '11 / 12',
					title: 'Upload Profile.',
					subtitle: '.jpg, .jpeg, .png',
					required: false,
					type: QuestionType.File,
					jump: {

					},
					model: '',
					accept: 'image/png,image/jpeg,image/jpg',
					maxSize: '2097152'
				},

			]

		}

	},

	mounted() {
		document.addEventListener('keyup', this.onKeyListener)
		this.$refs.flowform.goToQuestion();
		if (qid) {
			this.$refs.flowform.goToQuestion(qid);	
		}		
	},

	methods: {
		onKeyListener($event) {
			// We've overriden the default "complete" slot so
			// we need to implement the "keyup" listener manually.
			if ($event.key === 'Enter' && this.completed && !this.submitted) {
				console.log('Hello ' + $event.key);
			}
		},
		onComplete(completed, questionList) {
			this.completed = completed
			this.$refs.flowform.submitted = true
			$('#hide').css('display', 'block');

		},

		onSubmit(questionList) {
			// Handle submit event.	

		},

		onStep(activeQuestionId, activeQuestion) {
			// console.log("onStep: " + activeQuestionId);
			$(".vff-footer .f-nav a.f-prev").on("click", function () {
				counter--;
			});
			$(".vff-footer .f-nav a.f-next").on("click", function () {
				counter++;
			});

			if (activeQuestionId == 'q_naturopath') {
				$('#email_error').css('display', 'none');
				$('#website_error').css('display', 'none');
				$('#name_error').css('display', 'none');
				$('#referal_email_error').css('display', 'none');
				$('#date_error').css('display', 'none');
			}

			if (activeQuestionId == 'q_name') {
				this.practNameValidationTimer = setInterval(this.practNameValidation, 500);
				$('#email_error').css('display', 'none');
				$('#website_error').css('display', 'none');
				$('#referal_email_error').css('display', 'none');
				$('#date_error').css('display', 'none');
			}
			if (activeQuestionId == "q_area") {
				$('#email_error').css('display', 'none');
				$('#website_error').css('display', 'none');
				$('#referal_email_error').css('display', 'none');
				$('#date_error').css('display', 'none');
			}

			if (activeQuestionId == "q_services") {
				$('#email_error').css('display', 'none');
				$('#website_error').css('display', 'none');
				$('#referal_email_error').css('display', 'none');
				$('#date_error').css('display', 'none');

				//clearInterval(this.areaValidationTimer);				
			}
			if (activeQuestionId == "q_website") {
				this.websiteValidationTimer = setInterval(this.domainValidation, 1000);
				//clearInterval(this.areaValidationTimer);				
			}
			if (activeQuestionId == "q_email") {
				//this.checkEmail();
				// if (unique_email == true) {
				// 	// console.log("Yesssssssssss")
				// }				
				// this.emailUniqueValidationTimer = setInterval(this.checkEmail, 500);								
			}
			if (activeQuestionId == "q_year") {

				clearInterval(this.emailValidationTimer);				
			}
			if (activeQuestionId == 'q_upload') {
				clearInterval(this.ndReferValidationTimer);	
				console.log('q_upload');
				let skipContent = $('.q-is-active .vff-animate .o-btn-action span').text();
				
				if (skipContent == 'None of the above') {
					$('.q-is-active .vff-animate .o-btn-action span').text('skip');
				}
			}
			if (activeQuestionId == 'q_awarness') {
				this.ndReferValidationTimer = setInterval(this.ndReferValidation, 1000);				
				// let skipContent = $('.q-is-active .vff-animate .o-btn-action span').text();
				// if (skipContent == 'None of the above') {
				// 	$('.q-is-active .vff-animate .o-btn-action span').text('skip');
				// }
			}
		},

		onAnswer(questionAnswered, questionList) {
			let URL = "/api/store"
			const formData = new FormData()
			if (questionAnswered.id == "q_email") {
				pract_email = questionAnswered.answer;
			}
			if (questionAnswered.id == "q_naturopath") {
			
				if (questionAnswered.answer == 'Yes') {					
					$('#thankyou_not_nd').css('display', 'none');
				} else if (questionAnswered.answer == 'No') {					
					$('#thankyou_not_nd').css('display', 'block');
					$('.app .vff .f-container').css('display', 'none');
					this.$refs.flowform.submitted = true
					this.submitted = true				
				}				
			}
			if (questionAnswered.id == "q_upload" && questionAnswered.answer != null) {
				
				formData.append(questionAnswered.id, questionAnswered.answer[0])
				fetch(URL, {
					method: 'POST',
					body: formData
				})
			}
			else if(questionAnswered.id == "q_upload" && questionAnswered.answer == null){

			}
			else {
				formData.append(questionAnswered.id, questionAnswered.answer)
				fetch(URL, {
					method: 'POST',
					body: formData
				})
			}				
			if (questionAnswered.id == 'q_name') {

				this.practNameValidationTimer = setInterval(this.practNameValidation, 1000);
			}
			if (questionAnswered.id == 'q_name') {

				this.practNameValidation();
				$('#email_error').css('display', 'none');
				$('#website_error').css('display', 'none');
				if (check_name == false) {
					this.$refs.flowform.goToPreviousQuestion();
				}
			}
			if (questionAnswered.id == 'q_email') {
				clearInterval(this.practNameValidationTimer);
				this.emailValidationTimer = setInterval(this.emailValidation, 500);
			}			
			if (questionAnswered.id == 'q_awarness') {
				clearInterval(this.practNameValidationTimer);
				this.ndReferValidationTimer = setInterval(this.ndReferValidation, 1000);
			}
			if (questionAnswered.id == 'q_email') {				
				// this.checkEmail();
				// console.log("On Answerxxxxxx")
				// this.emailUniqueValidationTimer = setInterval(this.checkEmail, 500);
				// if (unique_email == true) {
				// 	this.$refs.flowform.goToPreviousQuestion();
				// }				
			}
			if (questionAnswered.id == 'q_email') {
				this.emailValidation();
				if (email_address == false) {
					this.$refs.flowform.goToPreviousQuestion();
				}
			}
			if (questionAnswered.id == 'q_area') {
				clearInterval(this.emailValidationTimer);
				clearInterval(this.emailUniqueValidationTimer);
				$('#email_error').css('display', 'none');
				$('#website_error').css('display', 'none');
				
			}
			if (questionAnswered.id == 'q_services') {
				clearInterval(this.emailUniqueValidationTimer);		
				$('#email_error').css('display', 'none');
				$('#website_error').css('display', 'none');				
			}
			if (questionAnswered.id == 'q_website') {
				clearInterval(this.emailUniqueValidationTimer);		
				$('#email_error').css('display', 'none');
				this.websiteValidationTimer = setInterval(this.domainValidation, 1000);
			}
			if (questionAnswered.id == 'q_website') {
				clearInterval(this.emailUniqueValidationTimer);		
				this.domainValidation();
				if (website_address == false) {
					this.$refs.flowform.goToPreviousQuestion();
				}
			}
			if (questionAnswered.id == 'q_year') {
				this.yearValidationTimer = setInterval(this.dateValidation, 500);
			}
			if (questionAnswered.id == 'q_year') {
				this.dateValidation();
				if (date_address == false) {
					this.$refs.flowform.goToPreviousQuestion();
				}
			}
			if (questionAnswered.id == "q_upload") {
				clearInterval(this.ndReferValidationTimer);	
				console.log('q_upload');
			}		
		},
		async checkEmail() {
			var data = this.$refs.flowform.questionRefs;
			var email_Input = data[2].dataValue;
			if (!email_Input) {
				this.emailExists = false; // Reset the property if the email is empty
				return;
			}
			try {
				const response = await axios.post('/api/uniqueEmail', {
				email: email_Input,
				});
				this.emailExists = response.data.exists;
				// unique_email = response.data.exists;				
			} catch (error) {
				console.error(error);
			}			
		},
		ndReferValidation() {
			var data = this.$refs.flowform.questionRefs;
			let ndRefer_email = data[9].dataValue;
			const specialChars =  /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/;		
			if (ndRefer_email) {
				if (specialChars.test(ndRefer_email)) {
					referal_email = true;
					$('#referal_email_error').css('display', 'none');
					// $('.app .vff .q-is-active .f-enter').css('display', 'none');	
					$('.app .vff .f-enter').css('display', 'block');

				} else {
					referal_email = false;
					// $('.app .vff .f-enter').css('display', 'none');	
					// $('.app .vff .q-is-active .f-enter').css('display', 'none');
					$('#referal_email_error').css('display', 'block');
					this.$refs.flowform.goToQuestion(9);
				}
			}
			if (referal_email) {
				console.log(referal_email);
				// clearInterval(this.ndReferValidationTimer);
			}
		},
		practNameValidation() {
			var data = this.$refs.flowform.questionRefs;
			let qp_name = data[1].dataValue;
			const specialChars = /^[a-zA-Z(0-9) ]{2,30}$/;
			if (qp_name) {
				if (specialChars.test(qp_name)) {
					check_name = true;
					$('#name_error').css('display', 'none');
					// $('.app .vff .q-is-active .f-enter').css('display', 'none');	
					$('.app .vff .f-enter').css('display', 'block');
				} else {
					check_name = false;
					// $('.app .vff .f-enter').css('display', 'none');	
					$('.app .vff .q-is-active .f-enter').css('display', 'none');
					$('#name_error').css('display', 'block');
					this.$refs.flowform.goToQuestion(1);
				}
			}

		},
		areaValidation() {
			var data = this.$refs.flowform.questionRefs;
			var last_data = data[data.length - 1].dataValue;
			if (last_data == null || last_data.length < 3) {
				check_area = true;
				$('.app .vff .q-is-active .f-enter').css('display', 'block');
				$('#area_error').css('display', 'none');

			} else if (last_data != null && last_data.length == 3) {
				console.log("if else");
				// $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:not(".f-selected")').attr('disabled',true).addClass('bg-secondary');				
				// 	$('.f-enter-desc').click();
			} else {
				check_area = false;
				this.$refs.flowform.questionRefs[data.length - 1].dataValue = [];								
				this.$refs.flowform.goToQuestion(3);
			}
			if (check_area == false) {
				this.$refs.flowform.goToQuestion(3);

			}
		},
		domainValidation() {
			var data = this.$refs.flowform.questionRefs;
			var websiteInput = data[5].dataValue;
			// console.log(websiteInput);

			var website_format = /^((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
			// var website_format =/^((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/g;
			if (websiteInput) {
				if (websiteInput.match(website_format)) {
					website_address = true;
					// $('.app .vff .q-is-active .f-enter').css('display', 'block');
					$('#website_error').css('display', 'none');
				} else {
					website_address = false;
					// $('.app .vff .q-is-active .f-enter').css('display', 'none');
					$('#website_error').css('display', 'block');
					this.$refs.flowform.goToQuestion(5)
				}
			}

			if (website_address) {
				clearInterval(this.websiteValidationTimer);
			}
		},
		emailValidation() {
			var data = this.$refs.flowform.questionRefs;
			var email_Input = data[2].dataValue;
			var mail_format = /^[a-z0-9._%+]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
			if (email_Input) {
				if (email_Input.match(mail_format)) {
					email_address = true;
					//$('.app .vff .q-is-active .f-enter').css('display', 'block');
					$('#email_error').css('display', 'none');
				} else {
					email_address = false;
					//$('.app .vff .q-is-active .f-enter').css('display', 'none');
					$('#email_error').css('display', 'block');
				}
			}
			if (email_address) {
				clearInterval(this.emailValidationTimer);
			}
		},

		dateValidation() {
			var data = this.$refs.flowform.questionRefs;
			var date_Input = data[8].dataValue;
			// console.log(date_Input);

			var date_format = /^[0-9]+$/;
			var current_year = new Date().getFullYear();

			if (date_Input.match(date_format)) {
				date_address = true;
				$('#date_error').css('display', 'none');
			}
			if ((date_Input != "") && (!date_format.test(date_Input))) {
				date_address = false;
				$('#date_error').css('display', 'block');
				$('#date_error').text("Please Enter Numeric Values Only");	

			}
			if (date_Input.length != 4) {
				date_address = false;
				$('#date_error').css('display', 'block');
				$('#date_error').text("Not a Year");		

			}

			date_Input = Number.parseInt(date_Input);

			if ((date_Input < 1960)) {
				date_address = false;
				$('#date_error').css('display', 'block');
				$('#date_error').text("Year not valid");
				//$('.app .vff .q-is-active .f-enter').css('display', 'none');

			}
			if ((date_Input > current_year)) {
				date_address = false;
				$('#date_error').css('display', 'block');
				$('#date_error').text("Future Year not valid");
				//$('.app .vff .q-is-active .f-enter').css('display', 'none');

			}
			if (date_address) {
				clearInterval(this.yearValidationTimer);
			}
		},

		showAcForm(){			
			$('#app').css('display','none');
			$('#ac_if_not_nd').css('display','block');
			$('.form-section').addClass('showacform');
		}
	},

}
</script>
<style>
.error-msg{
    color : red;
}

</style>
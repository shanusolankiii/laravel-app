<template>
	<div>
		<flow-form ref="flowform" v-on:step="onStep" v-on:complete="onComplete" v-on:submit="onSubmit"
			v-bind:language="language" v-bind:progressbar="false" v-bind:standalone="true" v-bind:timer="false"
			@submit="store" method="POST" v-on:answer="onAnswer" v-on:goToQuestion="goToQuestion"
			v-on:goToPreviousQuestion="goToPreviousQuestion" v-on:goToNextQuestion="goToNextQuestion">
			<question v-for="(question, index) in questions"  v-bind="question" v-bind:key="'m' + index"
				v-model="question.model">			
			</question>	
		</flow-form>		
		<Clinic/>	
	</div>
	<div id="thankyou_not_nd" style="display:none;padding: 3rem;">
		<a class="not_nd_f-prev" href="https://portal.healthbuddha.ca/join" role="button" aria-label="Previous step">Prev</a>
		<div class="f-description">
			<p>Thank you for your interest. We are currently accepting Naturopaths only.</p>
			<p>We will keep you posted when we open our platform for others practitioner types. Please <a href="javascript:void(0)" id="click_me" @click="showAcForm()">Click Here</a> to apply.</p>			
		</div>
	</div>
	<div id="thankyou" style="display: none;padding: 3rem;">
    <p class="f-description">
      Thank you for your valuable time. In order to ensure the integrity of our community, we will review your request and approve it in the next 24 hours. If approved, you can login, update your profile and access the content of your choice.<br />
      Please keep an eye on your <b>{{ pract_email }}</b> inbox for further details.<br />
      <small id="msg"
        >(If you do not see an email from us in your inbox, please check junk/spam folder
        and please click on "Not Spam or Junk" to receive future communication in your
        inbox)
      </small>
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
    question: FlowForm.Question,
   
},

	data() {
		return {
			place_name: "",
			loading: false,
			submitted: false,
			completed: false,
			emailExists: false,
			form: {
                cname: '',
                cemail: '',
                cvirtual:'',         
                caddress:'',
                
            },
			language: new LanguageModel({
				ok: 'Continue',
				// skip: "None of the above",
				enterKey: ''
			}),
			questions: [
				{
					id: 'q_naturopath',
					type: 'multiplechoice',					
					title: 'Are you a Naturopathic Doctor ?',
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
					title: 'Email',
					subtitle: 'We will communicate with you via this email in case we need more info about your practice.',
					required: true,
					type: QuestionType.Email,
					placeholder: 'Enter your email address',
					modelValue: "email",
					jump: {
						_other: 'q_year'
					},
					model: ''
				},
				{
					type: 'text',
					id: 'q_year',				
					title: 'Year of getting license to practice.',
					subtitle: 'This is needed to help our users know more about you.',
					required: true,
					type: QuestionType.Text,
					placeholder: 'YYYY',
					mask: '####',
					jump: {
						_other: 'q_area'
					},
					model: ''
				},
				{
					type: 'multiplechoice',
					id: 'q_area',					
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
						_other: '_submit'
					},
					model: '',
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
			$('.vff').css('display', 'none');
		

		},

		onSubmit(questionList) {
			// Handle submit event.	
			console.log("Hi");
			// $("#thankyou").css("display", "block");

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
				$('#name_error').css('display', 'none');				
				$('#date_error').css('display', 'none');
			}

			if (activeQuestionId == 'q_name') {
				this.practNameValidationTimer = setInterval(this.practNameValidation, 500);
				$('#email_error').css('display', 'none');				
				$('#date_error').css('display', 'none');
			}
			if (activeQuestionId == "q_area") {
				$('#email_error').css('display', 'none');			
				$('#date_error').css('display', 'none');
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
			
			formData.append(questionAnswered.id, questionAnswered.answer)
			fetch(URL, {
				method: 'POST',
				body: formData
			})
							
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
			
			if (questionAnswered.id == 'q_year') {
				this.yearValidationTimer = setInterval(this.dateValidation, 500);
			}
			if (questionAnswered.id == 'q_year') {
				this.dateValidation();
				if (date_address == false) {
					this.$refs.flowform.goToPreviousQuestion();
				}
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
			var date_Input = data[3].dataValue;
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
<template>
  <div>
    <flow-form ref="flowform" v-on:step="onStep" v-on:complete="onComplete" v-on:submit="onSubmit"
      v-bind:language="language" v-bind:progressbar="false" v-bind:standalone="true" v-bind:timer="false"
      @submit="store" method="POST" v-on:answer="onAnswer" v-on:goToQuestion="goToQuestion"
      v-on:goToPreviousQuestion="goToPreviousQuestion" v-on:goToNextQuestion="goToNextQuestion">

      <question v-for="(question, index) in questions" v-bind="question" v-bind:key="'m' + index"
        v-model="question.model">
      </question>
      <clinic :ff="$refs.flowform" />
      <button id="clear" @click="clear()"> Clear
      </button>

      <template v-slot:complete>
        <div class="f-section-wrap">
          <div v-if="questions[0].model != 'associated'">
            <div v-if="loading">
              <span class="fh2">Please wait, submitting...</span>
            </div>
            <div v-else>
              <p class="f-description"><span>Thank You for your valuable time. We will get back to you as soon as
                  your profile is approved.</span>
              <p class="f-desc"><span>We have sent an email to your register email, Kindly approve for further
                  process.</span></p>
              </p>

            </div>
          </div>

          <div v-else>
            <div v-if="loading">
              <span class="fh2">Please wait, checking...</span>
            </div>
            <div v-else>
              <span class="fh2">Thank you for your interest in HealthBuddha. At this time we are onboarding Naturopathic
                Doctors only. </span>
              <p class="f-desc"><span> We'll connect with you as soon as we are ready to onboard other types of
                  practitioners. </span></p>
              <p class="f-description"><span>Please provide your info below.</span></p>

              <form action="api/info" method="POST">
                <div class="Input_no" style="display: grid; width: 50%; font-size: 13px; font-family: DM sans-serif;">

                  <input name="name" type="text" placeholder="Name" style="padding: 5px 5px 5px 5px;">
                  <input name="designation" type="text" placeholder="Designation" style="padding: 5px 5px 5px 5px;">
                  <input name="email" type="email" placeholder="Email" style="padding: 5px 5px 5px 5px;">
                  <button type="submit"
                    style="width: 50%; margin-top:10px; background-color: #44A86B; border-radius: 25px;">Okay</button>
                </div>
              </form>
            </div>
          </div>
        </div>


      </template>
    </flow-form>
  </div>
</template>

<script>

import { FlowForm, QuestionModel, QuestionType, ChoiceOption, LanguageModel, Question } from '@ditdot-dev/vue-flow-form'
import { onMounted } from 'vue';
import Clinic from './Clinic.vue';
// Importing package for google map api
import { ref } from "vue";

export default {
  name: 'Flowform',
  name: 'Info',
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
      language: new LanguageModel({
        ok: 'Continue'
      }),
      questions: [

        {
          type: 'text',
          id: 'q_cname',
          tagline: '1 / 13',
          title: 'Name.',
          required: true,
          type: QuestionType.Text,
          jump: {
            _other: 'q_area'
          },
          model: ''
        },

        {
          type: 'multiplechoice',
          id: 'q_area',
          tagline: '2 / 13',
          title: 'Area(s) of Focus (Pick only THREE)',
          subtitle: 'We are currently looking for NDs interested in developing their practice in the following areas.',
          multiple: true,
          required: true,
          options: [
            {
              label: 'Perimenopause/Menopause',
            },
            {
              label: 'PCOS/PMS',
            },
            {
              label: 'Fertility and Pregnancy',
            },
            {
              label: 'Acne and Skin Care',
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
          tagline: '3 / 13',
          title: 'I provide these services',
          subtitle: 'Example: Naturopathic Doctor',
          multiple: true,
          required: true,
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
            {
              label: 'None of the above',
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
          tagline: '4 / 13',
          title: 'Website Address',
          required: true,
          type: QuestionType.Text,
          jump: {
            _other: 'q_email'
          },
          model: ''
        },

        {
          type: 'text',
          id: 'q_email',
          tagline: '5 / 13',
          title: 'Email',
          subtitle: 'We will communicate with you via this email in case we need more info about your practice.',
          required: true,
          type: QuestionType.Email,
          modelValue: "email",
          jump: {
            _other: 'q_associations'
          },
          model: ''
        },

        {
          type: 'multiplechoice',
          id: 'q_associations',
          tagline: '6 / 13',
          title: 'Associations',
          multiple: true,
          required: true,
          options: [
            {
              label: 'Canadian College of Naturopathic Medicine',
            },
            {
              label: 'Ontario Association Of Naturopathic Doctors',
            },
            {
              label: 'Canadian Association of Naturopathic Doctors',
            },
            {
              label: 'College of Naturopaths of Ontario',
            },
            {
              label: 'Others',
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
          tagline: '7 / 13',
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
          tagline: '8 / 13',
          title: 'Year of getting license to practice.',
          subtitle: 'This is needed to help our users know more about you.',
          required: true,
          type: QuestionType.Text,
          jump: {
            _other: 'q_awarness'
          },
          model: ''
        },

        {
          type: 'text',
          id: 'q_awarness',
          tagline: '9 / 13',
          title: 'Help us grow Naturopathic awareness and contribute to the growth of the industry.',
          subtitle: 'Please recommend NDs we can reach out to sign up on HealthBuddha.ca',
          required: false,
          type: QuestionType.Text,
          jump: {
            _other: 'q_content'
          },
          model: ''
        },

        {
          type: 'multiplechoice',
          id: 'q_content',
          tagline: '10 / 13',
          title: 'I would like to sign up as a Content Expert.',
          subtitle: 'HB will create and post content on its platform. We are looking for NDs who can verify and qualify content, such as blogs, videos and social media posts, developed by HBwriters. Your profile will be featured on the content and marketing materials. This is an unpaid project.',
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
            _other: 'q_leads'
          },
          model: ''
        },

        {
          type: 'multiplechoice',
          id: 'q_leads',
          tagline: '11 / 13',
          title: 'Consent: You may use this info to in ads to drive traffic to my profile page on HealthBuddha',
          subtitle: 'We run social and Google ads to drive traffic to our practitioners pages to get them new leads.',
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
            _other: 'q_upload'
          },
          model: ''
        },

        {
          type: 'file',
          id: 'q_upload',
          tagline: '12 / 13',
          title: 'Upload Profile.',
          subtitle: '.Jpg, .Jpeg, .Png',
          required: true,
          type: QuestionType.File,
          jump: {
            _other: 'q_cname'
          },
          model: ''
        },


        {
          type: 'text',
          id: 'q_cname',
          tagline: '13 / 13',
          title: 'Clinic Information',
          subtitle: 'Search clinic if you are associated with us Or Add a new clinic information.',
          type: QuestionType.Text,
          multiple: false,
          required: false,

          jump: {
            _other: '_submit'
          },
          model: '',
        },

        // End questions
      ]

    }

  },

  mounted() {

    this.$refs.flowform.goToQuestion();
    var this_this = this
    if (qid) {
      this.$refs.flowform.goToQuestion(qid);
    }

    setInterval(function () {
      var qid = this_this.$refs.flowform.activeQuestionId;
      var data = this_this.$refs.flowform.questionRefs;
      var last_data = data[data.length - 1].dataValue;


      // Option disable

      if (qid == 'q_area') {
        if (last_data && last_data.length == 3) {

          this_this.$refs.flowform.questionRefs[data.length - 1].dataValue = [];
          $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul>li').css('background-color', '#6c757d', 'cursor', 'none')
          $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul>li.f-selected').css('background-color', ' #44A86B')

          $('.f-enter-desc').click();
        }
      }


      // Option disable if -> None of the above
      if (qid == 'q_services') {
        $('#clear').css('display', 'block')
        if (last_data == "None of the above") {
          this_this.$refs.flowform.questionRefs[data.length - 1].dataValue = [];

          $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(1)').attr('disabled', true).addClass('bg-secondary')
          $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(2)').attr('disabled', true).addClass('bg-secondary')
          $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(3)').attr('disabled', true).addClass('bg-secondary')
          $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(4)').attr('disabled', true).addClass('bg-secondary')
          $('.f-enter-desc').click();
        }

      }

      // Option disable if -> None of the above
      if (qid == 'q_services') {
        if (last_data == "BHRT" || last_data == "IV Therapy" || last_data == "Desiccated Thyroid" || last_data == "Vitamin Injections") {
          this_this.$refs.flowform.questionRefs[data.length - 1].dataValue = [];
          $("li").each(function () {
            $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(5)').attr('disabled', true).addClass('bg-secondary')
            $('.f-enter-desc').click();
          })
        }
      }

      // Option disable if -> None of the above
      if (qid == 'q_associations') {
        $('#clear').css('display', 'block')
        if (last_data == "Canadian College of Naturopathic Medicine" || last_data == "Ontario Association Of Naturopathic Doctors" || last_data == "Canadian Association of Naturopathic Doctors" || last_data == "College of Naturopaths of Ontario") {
          this_this.$refs.flowform.questionRefs[data.length - 1].dataValue = [];
          $("li").each(function () {
            $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(5)').attr('disabled', true).addClass('bg-secondary')
            $('.f-enter-desc').click();
            $('.f-help').hide();
          })
        }
      }

      if (qid == 'q_website') {
        $('#clear').css('display', 'none');
      }

      if (qid == 'q_session') {
        $('#clear').css('display', 'none');
      }

      if (qid == 'q_associations') {
        if (last_data == "Others") {
          this_this.$refs.flowform.questionRefs[data.length - 1].dataValue = [];
          $("li").each(function () {
            $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(1)').attr('disabled', true).addClass('bg-secondary')
            $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(2)').attr('disabled', true).addClass('bg-secondary')
            $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(3)').attr('disabled', true).addClass('bg-secondary')
            $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(4)').attr('disabled', true).addClass('bg-secondary')
            $('.f-enter-desc').click();
          })
        }
      }

      // Upload profile validation

      if (qid == 'q_upload') {
        var file = $('body').find('input[type=file]').filter(':visible:first');
        file[0].setAttribute("accept", "image/jpg, image/jpeg, image/png");
      }

      // Date validation

      if (qid == 'q_year') {
        var date = $('body').find('input[type=text').filter(':visible:first');
        date[0].setAttribute("placeholder", "YYYY");
      }

      // Clinic Prepopulate

      if (qid == 'q_cname') {
        var clinic_Input = $('body').find('input[type=text]').filter(':visible:first');
        var multitagselect = $('span.multiselect-tag').text();
        $('#hide').css('display', 'block');
        $('.f-answer').hide();
        $('.o-btn-action').hide();
        $('.f-prev').css('display', 'none');
      }

      if (multitagselect) {
        $('.text').css('display', 'none');
        $('#button_Continue').css('display', 'block');
        $('#no-results').css('display', 'none');
      }
      else {
        $('#button_Add').css('display', 'block');
        $('#button_Continue').css('display', 'none');
      }

      // Multiselect Hide

      if (qid == 'q_cemail') {
        $('#hide').css('display', 'none');
      }

      if (qid == 'q_year') {
        $('.f-prev').css('display', 'inline-block');
      }

      if ((qid == 'q_caddress')) {
        var autocmplete = $('body').find('input[type=text]').filter(':visible:first');
        var input = autocmplete[0];
        const q_caddress = new google.maps.places.Autocomplete(input, {
          bounds: new google.maps.LatLngBounds(
            new google.maps.LatLng(45.4215296, -75.6971931)
          )
        });

        q_caddress.addListener("place_changed", () => {
          const place = q_caddress.getPlace();
          this_this.$refs.flowform.questionRefs[data.length - 1].dataValue = place.formatted_address;
          this_this.place_name = place.formatted_address;
        });
      }
    });
  },

  methods: {

    clear() {
      $("li").removeClass("f-selected");
      $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(1)').attr('disabled', false).removeClass('bg-secondary')
      $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(2)').attr('disabled', false).removeClass('bg-secondary')
      $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(3)').attr('disabled', false).removeClass('bg-secondary')
      $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(4)').attr('disabled', false).removeClass('bg-secondary')
      $('#app > div > div > div.f-container > div > div.vff-animate.q-form.q-is-active.f-fade-in-up.field-multiplechoice > div > div > div > div > div > ul > li:nth-child(5)').attr('disabled', false).removeClass('bg-secondary')
    },

    onComplete(completed, questionList) {
      this.completed = completed
      this.$refs.flowform.submitted = true
      this.onSendData()
    },

    onStep(activeQuestionId, activeQuestion) {
    },

    onAnswer(questionAnswered, questionList) {


      if (questionAnswered.id == 'q_caddress') {
        questionAnswered.answer = this.place_name;
      }

      let URL = "/api/store"
      const formData = new FormData()

      if (questionAnswered.id == "q_upload") {
        formData.append(questionAnswered.id, questionAnswered.answer[0])
      }
      else {
        formData.append(questionAnswered.id, questionAnswered.answer)
      }

      fetch(URL, {
        method: 'POST',

        body: formData
      })


      if (questionAnswered.id == 'q_services') {
        this.dv = setInterval(this.domainValidation, 500);
      }


      if (questionAnswered.id == 'q_website') {
        this.domainValidation();
        if (website_address == false) {
          this.$refs.flowform.goToPreviousQuestion();
        }
      }

      if (questionAnswered.id == 'q_email') {
        this.dv = setInterval(this.emailValidation, 500);
      }

      if (questionAnswered.id == 'q_email') {
        this.emailValidation();
        if (email_address == false) {
          this.$refs.flowform.goToPreviousQuestion();
        }
      }

      if (questionAnswered.id == 'q_year') {
        this.dv = setInterval(this.dateValidation, 500);
      }

      if (questionAnswered.id == 'q_year') {
        this.dateValidation();
        if (date_address == false) {
          this.$refs.flowform.goToPreviousQuestion();
        }
      }

    },

    domainValidation() {
      var data = this.$refs.flowform.questionRefs;
      var websiteInput = data[3].dataValue;

      var website_format = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
      if (websiteInput.match(website_format)) {
        website_address = true;
        $('#website_error').css('display', 'none');
      } else {
        website_address = false;
        $('#website_error').css('display', 'block');
      }

      if (website_address) {
        clearInterval(this.dv);
      }
    },

    emailValidation() {
      var data = this.$refs.flowform.questionRefs;
      var email_Input = data[4].dataValue;
      var mail_format = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (email_Input.match(mail_format)) {
        email_address = true;
        $('#email_error').css('display', 'none');
      } else {
        email_address = false;
        $('#email_error').css('display', 'block');
      }

      if (email_address) {
        clearInterval(this.dv);
      }
    },

    dateValidation() {
      var data = this.$refs.flowform.questionRefs;
      var date_Input = data[7].dataValue;

      var date_format = /^\d{1,4}$/;
      if (date_Input.match(date_format)) {
        date_address = true;
        $('#date_error').css('display', 'none');
      } else {
        date_address = false;
        $('#date_error').css('display', 'block');
      }
      if (date_address) {
        clearInterval(this.dv);
      }
    }
  },

  // *********************************************************************

  getData() {
    const data = [];

    // Answers here

    this.questions.forEach(question => {
      if (question.title) {
        let answer = question.model

        if (Array.isArray(answer)) {
          answer = answer.join(', ')
        }
        var d = {
          'id': question.id,
          'title': question.title,
          'ans': answer,
        }

        data.push(d)
      }

    })

    return data
  },

  getInfo() {
  }
}
</script>

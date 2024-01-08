<template>
  <div id="hide">
    <div class="vff">
      <div class="fh2">
        <span class="f-tagline d-none">12 / 12</span>       
        <span class="f-text"
          >City Name

          <span aria-hidden="true"></span
        ></span>
        <span class="f-sub">
          <span
            >Enter your City Name and select from the Google Autocomplete for Accurate Location</span
          >
        </span>
      </div>
      <div class="f-answer f-full-width">
		<span>
			<input type="text" ref="caddressInput"  id="caddress" v-model="caddress" v-focus required="" placeholder="Type your City Name here" @change="update()" autocomplete="off"></span></div>
    </div>
    <div class="multiselect_button2">
      <button @click="saveClinic" id="button_OK">Submit</button>
    </div>
 </div>
 <div id="preload" style="display: none;">
    <img :src="imageSrc" alt="" />
  </div>
  <div id="thankyou" style="display: none">
    <div class="f-description" style="padding: 3rem;">
      <p>Thank you for registering on HealthBuddha. You will receive an email confirmation.</p>
      <p style="margin-bottom: 0;"><strong>Next Steps: </strong></p>
     <ul style="list-style: disc;margin: 0 0 0 1rem;">
        <li>Set your account and password.</li>
        <li>Update your profile information by uploading your picture and other relevant information.</li>    
      </ul>    
	  
    </div>  
      
  </div>
</template>
<script>

import axios from "axios";
import { ref } from "vue";
const focus = {
  mounted: (el) => el.focus()
}
export default {
  components: {
   
  },
  directives: {
    // enables v-focus in template
    focus
  },
  data() {
    return {
      imageSrc: "../assets/images/load-loading.gif",  
      caddress:'',
      form: {
          caddress:'',
      },
     
    };
  },
  mounted() {
	
    var pop_input = document.getElementById("caddress");   
        const pop_places = new google.maps.places.Autocomplete(pop_input, {
            componentRestrictions: { country: ['ca'] },
            bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(45.4215296, -75.6971931)
            ),
        });
        pop_places.addListener("place_changed", () => {
            const place = pop_places.getPlace();           
            this.place_name = place.formatted_address;        
            this.caddress = place.formatted_address;
            this.form.caddress = place.formatted_address;
            this.place_id = place.place_id;
            this.lang = place.geometry.location.lng();
            this.lat = place.geometry.location.lat();
            console.log(this);
        });	
	this.$nextTick(() => {
		// Set focus to the input element with ID 'caddress'
		document.getElementById("caddress").focus();
	});
  },

  setup() {
    
  },
  methods: {
    update(){
      console.log(this);
      if (this.caddress != '') {
        $("#button_OK").css("display", "block");
      } else {
        $("#button_OK").css("display", "none");
      }
      
    },
    saveClinic(){
		$("#preload").css("display", "block");
      let URL = "/api/saveClinic";
      let data ={'q_vc_postal':this.caddress,'q_vclatitude':this.lat,'q_vclongitude':this.lang,'q_vcplace_id':this.place_id} ;
      let result = axios
        .post(URL, data)
        .then(function (response) {
          if (response.status == 200) {
            if (response.data.status == 200) {
              $("#thankyou").css("display", "block");
              $("#preload").css("display", "none"); 
              $("#hide").css("display", "none");
			
            } else if (response.data.status == 201) {
              $("#course_link").attr("href", response.data.data.course_link);
              $("#course_title").text(response.data.data.course_title);
              $("#thankyou_withcourse").css("display", "block");
              $("#preload").css("display", "none");
              $("#hide").css("display", "none");
            }
          }
        })
        .catch(function (error) {
          console.log(error);
          $("#button_OK").attr("disabled", "false");
        });
    }
    
   
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

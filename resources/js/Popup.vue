<template>
    <div class="popup" style="position:fixed;top: 0; left: 0;right: 0; bottom: 0;
            z-index: 99;
            background-color: rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
        ">
        <div class="popup-inner">
            <form  @submit.prevent="add()">
                <button type="button" class="close float-end" aria-label="Close" @click="TogglePopup()">
                    <span aria-hidden="true">&times;</span>
                  </button>
                <label for="cname" class="pop_cname">Clinic Name</label><br />
                <input type="text" id="cname" name="cname" v-model="v$.form.cname.$model" required/><br />
                <!-- error message -->
                    <div class="input-errors" v-for="(error, index) of v$.form.cname.$errors" :key="index">
                        <div class="error-msg">{{ error.$message }}</div>
                    </div>
                    <span id="msg">Note: If you are not associated with a clinic & treat patient
                        virtually then please mention.
                        clinic name as "Private Practice of {Your name}"</span> <br/>                   
                <label for="cemail" class="pop_cemail">Clinic Email</label><br />
                <input type="email" id="cemail" name="cemail" v-model="v$.form.cemail.$model" required/><br />
                 <!-- error message -->
                <div class="input-errors" v-for="(error, index) of v$.form.cemail.$errors" :key="index">
                    <div class="error-msg">{{ error.$message }}</div>
                </div>
                <span id="msg">Note: Please provide clinic's admin or reception's email here</span> <br/>
                <label for="caddress" class="pop_caddress">Clinic Address</label><br />               
                <input type="text" id="caddress" name="caddress" placeholder="Enter Location"
                    v-model="v$.form.caddress.$model"  required/><br />
                <span id="note"> Please ensure that you are choosing from Google Autocomplete</span>
                     <!-- error message -->
                <div class="input-errors" v-for="(error, index) of v$.form.caddress.$errors" :key="index" >
                    <div class="error-msg">{{ error.$message }}</div>
                </div> 
                <label for="cvirtual" class="pop_cvirtual">Does this clinic provide Virtual Services?</label><br />

                <input type="checkbox" id="cvirtual" name="cvirtual" v-model="form.cvirtual" /> Yes<br /><br />
                <span id="note">Note: Since we have location based result we need your geo location
                    information.</span>  
                <div class="action-buttons">              
                    <button type="submit" class="popup_add btn btn-lg btn-green w-100">Add</button>   
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
import useVuelidate from '@vuelidate/core';
import { required, email,helpers } from '@vuelidate/validators';
const alpha = helpers.regex(/^[a-zA-Z'(0-9) ]{2,60}$/);
export default {
    name:'Popup', 
    props: ["TogglePopup","virtualButtonTrigger","options","value","addValues"],
    emits:['clinic-added','show-me-change'],
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return { 
            query: '',
            suggestions: [],  
            showMe:false,
            newlyAdded:[],        
            form: {
                cname: '',
                cemail: '',
                cvirtual:'',         
                caddress:'',
                
            },
        };
    },
    validations() {
        return {
        form: {
            cname: {
            required:helpers.withMessage('Clinic Name is required', required),
            alpha:helpers.withMessage('Clinic Name must be valid', alpha)
            },
            cemail: {
            required:helpers.withMessage('Clinic Email is required', required),
            email:helpers.withMessage('Clinic Email is Invalid', email) 
            },            
            caddress: {
                required:helpers.withMessage('Clinic Address is required', required)
            },
        },
        }
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
        });
        
    },

    methods: { 
        openPopup() {
			this.virtualButtonTrigger();
		},		

       
        add() {  
            $('#preload').css('display','flex');   
            this.$emit('show-me-change', true);         
            this.v$.$validate();  
            if (!this.v$.$error) {
                var cname = this.form.cname;
                var cemail = this.form.cemail;
                var caddress = this.caddress;
                var cvirtual = this.form.cvirtual;
                var place_id = this.place_id;
                var newClinic = '';
                var this_this = this;
                let data = { cname: cname, cemail: cemail, caddress: caddress,cvirtual:cvirtual,place_id:place_id,clinic_address_latitude:this.lat,clinic_address_longitude:this.lang }         
                       
                if(cname){
                   
                     axios.post('./api/addclinic',data )
                        .then(function (response) {                           
                            newClinic = response.data.data.added_clinic;                             
                            this_this.options.push(newClinic);                           
                            this_this.addValues(newClinic);                        
                            $('#button_OK').css('display','block'); 
                            this_this.$emit('show-me-change', false);                              
                            $('#preload').css('display','none');  
                            console.log(this_this.options);                
                            this_this.TogglePopup(); 
                        })
                        .catch(function (error) {
                            console.log(error);
                        });                          
                    if(Object. keys(this.options).length > 0 && Object. keys(this.value).length > 0){
                        $('#button_OK').css('display','block');
                    }                     
                    $('.alert').removeClass('d-none');
                  
                }
            } else {
                // alert('Form failed validation')
                // $('.alert-warning').addClass('d-none');
                $('#preload').addClass('d-none'); 
            }
            
        },
       
        
    },
};

</script>

<style>
.error-msg{
    color : red;
}

</style>

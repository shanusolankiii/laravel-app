<template>
  <div
    class="popup"
    style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <div class="popup-inner virtual-popup">
      <form
        @submit.prevent="add()"
        style="
          max-height: calc(100vh - 100px);
          overflow-y: auto;
          width: 100%;
          padding: 15px;
        "
      >
        <button
          type="button"
          class="close float-end"
          aria-label="Close"
          @click="TogglePopup()"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="row">
          <div class="col-md-4">
            <label for="cname" class="pop_cname">Name</label>
            <input
              type="text"
              id="cname"
              name="cname"
              placeholder="Enter Your Name"
              v-model="v$.form.cname.$model"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="vcemail" class="pop_cname">Email</label>
            <input
              type="text"
              id="vcemail"
              name="vcemail"
              placeholder="Enter Your Email"
              v-model="v$.form.vcemail.$model"
              required
            />
            <!-- error message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.cname.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="col-md-4">
            <label for="caddress" class="pop_caddress">Your Postal Code</label>
            <input
              type="text"
              id="caddress"
              name="caddress"
              placeholder="Enter Postal Code"
              v-model="v$.form.caddress.$model"
              required
            /><br />
            <span id="note"> Please ensure that you are choosing from Google Autocomplete</span>
            <!-- error message -->
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.caddress.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <label for="cworking_hours" class="pop_cname">Your Working Hours</label>
          <div class="form-group col-md-12">
            <div class="align-items-center row">
              <div class="col-md-6 d-none d-md-block"></div>
              <div class="col-md-6 d-none d-md-block">
                <div class="row">
                  <div class="col-md-6"><label>Start Time:</label></div>
                  <div class="col-md-6"><label>End Time:</label></div>
                </div>
              </div>
            </div>
            <div v-for="(day, index) in days" :key="index" class="align-items-center row">
              <div class="col-md-3">
                <label>{{ day.name }}</label>
              </div>

              <div class="col-md-3">
                <div id="workinghours-button" class="workinghours-toggle-button">
                  <input type="checkbox" class="checkbox" v-model="day.isWorking" />
                  <div class="knobs"></div>
                  <div class="layer"></div>
                  <!-- {{ day.isWorking ? "Open" : "Closed" }} -->
                </div>
              </div>

              <div v-if="day.isWorking" class="col-md-6">
                <div class="row">
                  <div class="col-6">
                    <label :for="'start-time-' + index" class="col-form-label d-md-none"
                      >Start Time:</label
                    >
                    <input
                      type="time"
                      :id="'start-time-' + index"
                      :name="'start-time-' + index"
                      v-model="day.startTime"
                      class="form-control custom-input-width"
                      style="width: 100%"
                    />
                  </div>

                  <div class="col-6">
                    <label :for="'end-time-' + index" class="col-form-label d-md-none"
                      >End Time:</label
                    >
                    <input
                      type="time"
                      :id="'end-time-' + index"
                      :name="'end-time-' + index"
                      v-model="day.endTime"
                      class="form-control custom-input-width"
                      style="width: 100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span id="note"
          >Note: Since we have location based result we need your geo location
          information.</span
        >
        <div class="action-buttons">
          <button
            type="submit"
            class="popup_add btn btn-lg btn-green w-100"
            @click="add()"
          >
            Save and Close
          </button>
          <!-- <button type="submit" class="popup_add" @click="add()">Add a Clinic</button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
const alpha = helpers.regex(/^[a-zA-Z'(0-9) ]{2,60}$/);
export default {
  name: "VirtualPopup",
  props: ["TogglePopup", "buttonTrigger"],
  emits: ["virtual-added", "checkbox-updated"],
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      query: "",
      suggestions: [],
      showPopup: false,
      isChecked: false,
      isDisabled: false,
      form: {
        cname: "",
        vcemail: "",
        caddress: "",
        cworking_hours: "",
      },
      days: [
        { name: "Monday", isWorking: true, startTime: null, endTime: null },
        { name: "Tuesday", isWorking: true, startTime: null, endTime: null },
        { name: "Wednesday", isWorking: true, startTime: null, endTime: null },
        { name: "Thursday", isWorking: true, startTime: null, endTime: null },
        { name: "Friday", isWorking: true, startTime: null, endTime: null },
        { name: "Saturday", isWorking: true, startTime: null, endTime: null },
        { name: "Sunday", isWorking: true, startTime: null, endTime: null },
      ],
    };
  },
  validations() {
    return {
      form: {
        cname: {
          required: helpers.withMessage("Your Name is required", required),
          alpha: helpers.withMessage("Your Name must be valid", alpha),
        },
        vcemail: {
          required: helpers.withMessage("Virtual Clinic Email is required", required),
          email: helpers.withMessage("Virtual Clinic Email is Invalid", email),
        },
        caddress: {
          required: helpers.withMessage("Your Postal Code is required", required),
        },
      },
    };
  },
  mounted() {
    var pop_input = document.getElementById("caddress");
    const pop_places = new google.maps.places.Autocomplete(pop_input, {
      componentRestrictions: { country: ["ca"] },
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
    submitForm() {
      // console.log("I am in submit form");
      console.log(this.isChecked);
      const payload = {
        isChecked: true,
        isDisabled: true, // Set the disabled state to true
      };
      this.$emit("checkbox-updated", payload);
    },
    add() {
      // this.buttonTrigger();
      this.v$.$validate();
      if (!this.v$.$error) {
        this.working_hours = Object.keys(this.days).map((key) => ({
          key,
          value: this.days[key],
        }));
        // console.log(this.working_hours);
        var cname = this.form.cname;
        var vcemail = this.form.vcemail;
        var cworking_hours = this.working_hours;
        var caddress = this.form.caddress;
        var place_id = this.place_id;
        let data = {
          cname: cname,
          vcemail: vcemail,
          cworking_hours: cworking_hours,
          caddress: caddress,
          place_id: place_id,
          clinic_address_latitude: this.lat,
          clinic_address_longitude: this.lang,
        };

        if (cname) {
          let res = axios.post("./api/addVirtualPractice", data);
          console.log(res.status);
          this.TogglePopup();
          // this.virtualAdded = true;
          // this.$emit('virtual-added', true);
          this.submitForm();
          // console.log(this.$emit('virtual-added', true));
          $(".alert").removeClass("d-none");
          $("#if-added-virtual").removeClass("d-none");
          $("#if-added-virtual").addClass("d-block");
          $("#button_OK").css("display", "block");
        }
      } else {
        // alert('Form failed validation')
        // $('.alert-warning').addClass('d-none');
      }
    },
    change_working_hours() {
      if ($("#switch").is(":checked")) {
        $(".time-1").show();
        $(".time-2").show();
      } else {
        $(".time-2").hide();
        $(".time-1").hide();
      }
    },
    selectAddress(event) {
      console.log(event.target.value);
    },
  },
};
</script>

<style>
.error-msg {
  color: red;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  width: 7%;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #44a86b;
}

input:focus + .slider {
  box-shadow: 0 0 1px #44a86b;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.popup-inner form input[type="time"] {
  padding: 5px 15px;
  margin: 0 0 0.5rem;
  min-height: 40px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #dee2e6;
  width: 29%;
}
</style>

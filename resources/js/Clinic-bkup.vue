<template>
  <div id="hide">
    <div class="vff">
      <div class="fh2">
        <span class="f-tagline">12 / 12</span>
        <div class="alert alert-success d-none" role="alert">
          <h3><b>SUCCESS!!! Your Virtual Practice Added.</b></h3>
        </div>
        <!--Virtual Practice-->
        <span class="f-text">Private/Home Virtual Practice Information</span>
        <span class="f-sub">
          <button
            id="button_Add"
            @click="() => TogglePopup('virtualButtonTrigger')"
            :disabled="isDisabled"
          >
            Add Your Private/Home Virtual Practice
          </button>
        </span>
       
        <span id="if-added-virtual" class="d-none font-weight-500 text-orange"
          >Virtual Practice is Added</span
        ><br />

        <!--End Virtual Practice-->
        <span class="f-text"
          >In-Person/Clinic Information

          <span aria-hidden="true"></span
        ></span>
        <span class="f-sub">
          <span
            >Select one or more clinics where you practice. You can pick more than one
            clinic here. Or add a new clinic if you do not find your clinic in this
            dropdown</span
          >
        </span>
      </div>
    </div>

    <div class="multiselect" id="search-clinic-select">
      <Multiselect
        v-model="value"
        mode="tags"
        placeholder="Select Clinic from the list"
        :close-on-select="true"
        :searchable="true"
        :classes="{
          options: 'flex flex-col p-0 m-0 list-none',
          search:
            'w-full absolute inset-0 outline-none focus:ring-0 appearance-none box-border border-0 text-base font-sans bg-white rounded pl-3.5 rtl:pl-0 rtl:pr-3.5',
        }"
        @search-change="clinicSearch"
        :options="options"
        track-by="value"
        :taggable="true"
        @tag="addTag"
        @input="onSelect"
        @change="multiSelectChange"
        ref="multiselect"
        id="multiselect-me"
      />
    </div>

    <div class="multiselect_button2">
      <button @click="saveClinic" id="button_OK">Submit</button>
    </div>

    <div class="multiselect_button">
      <div class="virtual-added">
        <button id="button_Add" @click="() => TogglePopup('buttonTrigger')">
          Add New Clinic</button
        ><br />
      </div>
      <div>
        <span id="no-results">No Clinic found! Please add a new clinic below.</span>
      </div>

      <Popup
        :virtualButtonTrigger="() => TogglePopup('virtualButtonTrigger')"
        :options="options"
        :value="value"
        :addValues="(item) => value.push(item)"
        :showMe="showMe"
        v-if="popupTriggers.buttonTrigger"
        :TogglePopup="() => TogglePopup('buttonTrigger')"
        @clinic-added="clinicAdded"
        @show-me-change="showMeupdate"
      >
      </Popup>
      <VirtualPopup
        :isChecked="isChecked"
        :buttonTrigger="() => TogglePopup('buttonTrigger')"
        v-if="popupTriggers.virtualButtonTrigger"
        :TogglePopup="() => TogglePopup('virtualButtonTrigger')"
        @checkbox-updated="updateCheckbox"
      >
      </VirtualPopup>
    </div>
  </div>
  <div id="preload" v-show="showMe">
    <img :src="imageSrc" alt="" />
  </div>
  <div id="thankyou" style="display: none">
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

  <div id="thankyou_withcourse" style="display: none">
    <p class="f-description">
      Thank you for your valuable time. In order to ensure the integrity of our community, we will review your request and approve it in the next 24 hours. If approved, you can login, update your profile and access the content of your choice.<br />
      Please keep an eye on your <b>{{ pract_email }}</b> inbox for further details.<br />
      <small id="msg"
        >(If you do not see an email from us in your inbox, please check junk/spam folder
        and please click on "Not Spam or Junk" to receive future communication in your
        inbox)
      </small>
    </p>
    <p>
      Click here to go back to the
      <a id="course_link" href="#"><span id="course_title"></span></a> to buy the selected
      course.
    </p>
    <p>
      Also, you can check our more <a href="https://healthbuddha.ca/naturopathy-courses/" target="_blank">Featured courses</a>
    </p>
  </div>
</template>
<script>
import Multiselect from "@vueform/multiselect";
import axios from "axios";
import Popup from "./Popup.vue";
import VirtualPopup from "./VirtualPopup.vue";
import { ref } from "vue";

export default {
  components: {
    Multiselect,
    Popup,
    VirtualPopup,
  },

  data() {
    return {
      imageSrc: "../assets/images/load-loading.gif",
      search: "",
      showMe: false,
      isChecked: false,
      isDisabled: false,
      pract_email: "",
      value: [],
      options: [],
      clinics_array: [],
    };
  },
  mounted() {
    this.$refs.multiselect.$el;
    this.$refs.multiselect.$el.focus();
    var this_this = this;
    var data = this_this.$refs.multiselect;
  },

  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false,
      virtualButtonTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      Popup,
      popupTriggers,
      VirtualPopup,
      TogglePopup,
    };
  },
  methods: {
    clinicAdded(newClinic) {
      this.options.push(newClinic);
      this.clinics_array.push(newClinic);
      this.value.push(newClinic);
      this.clinics_array = { q_cname: newClinic };
      this.selectedClinic = newClinic;
    },
    updateCheckbox(value) {
      this.isChecked = value.isChecked;
      this.isDisabled = value.isDisabled;
    },
    showMeupdate(value) {
      this.showMe = value;
    },
    saveClinic() {
      this.pract_email = pract_email;
      $("#button_OK").attr("disabled", "disabled");
      if (
        Object.keys(this.clinics_array).length == 0 &&
        Object.keys(this.options).length > 0
      ) {
        this.clinics_array = { q_cname: this.options };
        console.log(this.clinics_array);
      }
    let URL = "/api/saveClinic";
      let data = this.clinics_array;
      let result = axios
        .post(URL, data)
        .then(function (response) {
          if (response.status == 200) {
            if (response.data.status == 200) {
              $("#thankyou").css("display", "block");
              $("#hide").css("display", "none");
            } else if (response.data.status == 201) {
              $("#course_link").attr("href", response.data.data.course_link);
              $("#course_title").text(response.data.data.course_title);
              $("#thankyou_withcourse").css("display", "block");
              $("#hide").css("display", "none");
            }
          }
        })
        .catch(function (error) {
          console.log(error);
          $("#button_OK").attr("disabled", "false");
        });
    },
    multiSelectChange() {
      $(".alert").addClass("d-none");
    },
    onChange(value) {
      console.log(value);
      this.value = value;
      this.clinics_array = { q_cname: option };
      // console.log(this.value);
      console.log(this.clinics_array);
    },
    onSelect(option) {
      this.clinics_array = { q_cname: option };
      this.value = option;
      if (option) {
        $("#no-results").css("display", "none");
      }
      if (this.clinics_array.q_cname.length > 0) {
        $("#button_OK").css("display", "block");
      } else {
        $("#button_OK").css("display", "none");
      }
    },
    async clinicSearch(query) {
      let result = await axios.get(
        "hb-cpanel/searchClinicByNameOrCity?search_phrase=" + query
      );
      this.options = result.data.data.map(function (item) {
        return {
          value: item.clinic_name + ", " + item.clinic_city,
          label:
            item.clinic_name.replace("Private Practice of", "") + ", " + item.clinic_city,
        };
      });
      if (!this.options) {
        $("#no-results").css("display", "block");
      } else {
        $("#no-results").css("display", "none");
      }
    },
    addTag(newTag) {
      const tag = {
        value: newTag,
        lable: newTag,
      };
      this.options.push(tag);
      this.value.push(tag);
      // console.log(tag);
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

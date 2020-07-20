<template>
  <div class="row">
    <div
      id="appointment-open66"
      style="display: block;"
      class="appointment-open"
    >
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="section2 doc-listing-booking">
          <div class="select-time" id="select-time66" style="display: block;">
            <div class="display-flex">
              <p class="section2-headpara padding-top-10 text-center">
                Book an appoinment for Consultation
              </p>
              <div class="dropdown">
                <p
                  class="form-control select-dropDown"
                  id="selected_unit'+value.doctor_id+'"
                ></p>
                <p></p>
              </div>
            </div>
            <SingleDatePicker style="margin-left: 21%;" v-model="apt_date" @selectDate="getDate" />

            <div
              class="radio-btn radio-btn-doc-listing text-center"
              id="radio-btn66"
            >
              <ul>
                <p class="days_style" id="days_style">Morning</p>
                <li>
                  <input
                    type="radio"
                    id="f-option1"
                    name="slot_date"
                    value=" 10:10  AM"
                  /><label for="f-option1"> 10:10 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option2"
                    name="slot_date"
                    value=" 10:20  AM"
                  /><label for="f-option2"> 10:20 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option3"
                    name="slot_date"
                    value=" 10:30  AM"
                  /><label for="f-option3"> 10:30 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option4"
                    name="slot_date"
                    value=" 10:40  AM"
                  /><label for="f-option4"> 10:40 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option5"
                    name="slot_date"
                    value=" 10:50  AM"
                  /><label for="f-option5"> 10:50 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option6"
                    name="slot_date"
                    value=" 11:10  AM"
                  /><label for="f-option6"> 11:10 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option7"
                    name="slot_date"
                    value=" 11:20  AM"
                  /><label for="f-option7"> 11:20 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option8"
                    name="slot_date"
                    value=" 11:30  AM"
                  /><label for="f-option8"> 11:30 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option9"
                    name="slot_date"
                    value=" 11:40  AM"
                  /><label for="f-option9"> 11:40 AM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option10"
                    name="slot_date"
                    value=" 11:50  AM"
                  /><label for="f-option10"> 11:50 AM</label>
                  <div class="check"></div>
                </li>
              </ul>
              <ul>
                <p class="days_style" id="days_style">
                  Afternoon
                </p>
                <li>
                  <input
                    type="radio"
                    id="f-option27"
                    name="slot_date"
                    value=" 12:00  PM"
                  /><label for="f-option27"> 12:00 PM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option28"
                    name="slot_date"
                    value=" 12:10  PM"
                  /><label for="f-option28"> 12:10 PM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option29"
                    name="slot_date"
                    value=" 12:20  PM"
                  /><label for="f-option29"> 12:20 PM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option30"
                    name="slot_date"
                    value=" 12:30  PM"
                  /><label for="f-option30"> 12:30 PM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option31"
                    name="slot_date"
                    value=" 12:40  PM"
                  /><label for="f-option31"> 12:40 PM</label>
                  <div class="check"></div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="f-option32"
                    name="slot_date"
                    value=" 12:50  PM"
                  /><label for="f-option32"> 12:50 PM</label>
                  <div class="check"></div>
                </li>
              </ul>
              <ul></ul>
              <ul></ul>
            </div>
            <button
              id="bookNow_date66"
              class="bookNow bookNow1 button-booking-listing step-1-booking"
              style="display: block;"
              onclick="bookingDateField(66);"
              type="button"
            >
              Book Now
            </button>
          </div>
          <div
            class="confirm-appointment width-booking-form"
            id="confirm-appointment66"
            style="display:none;margin-top: 11px;"
          >
            <h4>Confirm Appointment</h4>
            <div class="row formSection">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                <div class="form-group">
                  <select
                    id="salutation66"
                    name="salutation"
                    class="form-control salutation"
                  >
                    <option value="0" selected="selected"
                      >Select Salutations</option
                    >
                    <option value="Mr">Mr</option
                    >';
                    <option value="Mrs">Mrs</option>
                    <option value="Master">Master</option>
                    <option value="Ms">Ms</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                    <option value="Prof">Prof</option>
                    <option value="Prof">Prof</option>
                    <option value="Baby of">Baby of</option>
                  </select>
                  <span id="salutationError66" class="apply apply-error"></span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control first_name"
                    id="first_name66"
                    name="first_name"
                    placeholder="First Name*"
                    pattern="\w+\s\w+"
                  />
                  <span id="first_nameError66" class="apply apply-error"></span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control last_name"
                    id="last_name66"
                    name="last_name"
                    placeholder="Last Name*"
                  />
                  <span id="last_nameError66" class="apply apply-error"></span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control email_id"
                    id="email_id66"
                    name="email_id"
                    placeholder="Email ID*"
                  />
                  <span id="email_idError66" class="apply apply-error"></span>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control contact_no"
                    id="contact_no66"
                    pattern="[0-9]{10}"
                    name="contact_no"
                    placeholder="Contact *"
                    maxlength="10"
                  />
                  <span id="contact_noError66" class="apply apply-error"></span>
                </div>
              </div>
              <p class="red">
                You will receive an SMS with a verification code on this number.
              </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="form-group">
                <span>Are you new to hospital ?</span>
                <label class="radio-inline">
                  <input
                    type="radio"
                    name="optradio66"
                    class="yes"
                    onclick="newToHospitalNo(66);"
                    checked=""
                  />Yes
                </label>
                <label class="radio-inline">
                  <input
                    type="radio"
                    name="optradio66"
                    onclick="newToHospitalYes(66);"
                    class="no"
                  />No
                </label>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding pl-15">
              <div class="form-group" style="display:none;" id="no-block66">
                <input
                  type="text"
                  class="form-control"
                  id="patientNo"
                  name="patientNo66"
                  placeholder="Patient No. "
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 height-50"></div>
            <span class="backtodatetime" onclick="BackToDateTime(66);">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>Go Back</span
            >
            <button
              class="bookNow bookNow1 button-booking-listing confirm-application"
              id="booking_otp66"
              type="button"
            >
              Confirm
            </button>
          </div>
          <div
            class="otp-appointment"
            id="otp-appointment66"
            style="display:none;"
          >
            <div class="width-booking-form">
              <p
                class="section2-headpara"
                style="font-size:14px; margin-bottom:6px;"
              >
                We have sent you an OTP on
              </p>
              <h3 id="old_mobile_no66">+91 8745360000</h3>
              <input
                type="text"
                placeholder="Please enter the 6 digit OTP here to verify"
                name="otp_got"
                id="otp_got66"
              />
              <input
                type="hidden"
                name="otp_code_id_created"
                id="otp_code_id_created66"
                value=""
              />
              <span class="resend-otp" onclick="resend_otp(66);"
                >Resend OTP</span
              >
              <p class="blocks">
                <span
                  class="pull-left cursur-auto"
                  id="opt_timer66"
                  sytle="display:none;"
                ></span>
                <span
                  class="pull-left cursur-auto"
                  id="opt_timer166"
                  sytle="display:none;"
                ></span>
              </p>
              <p>
                <span
                  class="pull-left otp_msg"
                  id="otp_msg66"
                  sytle="display:none;height:auto;"
                  >Did not receive OTP? You can request for another OTP click
                  resend option</span
                >
              </p>
              <div class="error_otp" id="error_otp66"></div>
              <span class="backtoconfirm" onclick="BackToConfirm(66);"
                ><i class="fa fa-arrow-left" aria-hidden="true"></i>Go
                Back</span
              >
              <span
                class="bookNow bookNow1 button-booking-listing confirm-application"
                onclick="booking_finish_all(66);"
                >Book Appointment</span
              >
            </div>
          </div>
          <div
            class="thanks-appointment"
            id="thanks-appointment66"
            style="display:none;"
          >
            <div class="width-booking-form text-center">
              <img src="assets/images/check-mark.svg" alt="" />
              <h3 class="main-center">
                You’re appointment is confirmed.
              </h3>
              <p class="main-center">
                The details will be shared via Email &amp; SMS
              </p>
              <p>
                <b>Note :</b>Temporary visitor restriction, only one attendant
                is permitted with the patient. Your cooperation is solicited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleDatePicker from 'vue-single-date-picker'

export default {
  name: 'Serial',
  components: {
    SingleDatePicker
  },
  props: {
    zahid: String
  },
  data () {
    return {
      apt_date: null
    }
  },
  methods: {
    getDate (date) {
      console.log(date)
    }
  }
}
</script>

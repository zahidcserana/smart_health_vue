<template>
  <section id="docList">
    <div class="container">
      <div class="row">
        <div class="docListCont col-md-12 cl-sm-12 col-xs-12 no-padding">
          <!-- <div class="doc-profile-appoint doc-listing-appointment height-auto"> -->
          <div class="row">
            <input type="hidden" name="selected_date" id="selected_date" value="15072020">
            <!-- <div id="result"></div> -->
            <div id="result" v-if="doctors">
              <div v-for="(item,index) in doctors" :key="index" class="doc-profile-appoint doc-listing-appointment" id="doc-profile-appoint71">
                <div class="main-box">
                  <div class="row">
                    <div class="col-4  p-0">
                      <div class="position-rel img-doc-appont img-doc-listing">
                        <a href="https://www.manipalhospitals.com/oldairportroad/doctors/dr-col-r-d-holla-senior-consultant-internal-medicine">
                          <img :src="item.user.picture" alt="" title="" class="img-responsive" >
                        </a>
                        <p class="pic_box">
                          Smart Health Ltd.
                        </p>
                      </div>
                    </div>
                    <div class="col-4 no-padding">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12 text-left no-padding">
                        <a id="view_profile71" href="https://www.manipalhospitals.com/oldairportroad/doctors/dr-col-r-d-holla-senior-consultant-internal-medicine">
                          <h3>{{ item.user.name }}</h3>
                        </a>
                      </div>
                      <p class="desgn">{{item.speciality.title}}</p>
                      <h5 class="left_texty">QUALIFICATION</h5>
                      <p class="left_texty"><span>{{item.qualification_details}}</span></p>
                    </div>
                    <div class="col-4 no-padding" style="text-align: center;padding-top: 6%;">
                      <button class="booking-btn booking-disabled71" onclick="appointmentopen(71);">Book Appointment</button>
                      <a href="https://www.manipalhospitals.com/oldairportroad/doctors/dr-col-r-d-holla-senior-consultant-internal-medicine">
                        <button class="booking-btn view-more-booking">View profile</button>
                      </a>
                    </div>
                  </div>

                  <input type="hidden" name="selected_date" id="selected_date71" value="16072020">
                  <input type="hidden" name="doctor_code" id="doctor_code71" value="MHBINTD4">
                  <input type="hidden" name="doctor_id" id="doctor_ids" value="71">
                  <input type="hidden" name="dept_code" id="dept_code71" value="MHBDINT">
                  <input type="hidden" name="doctor_price" id="doctor_price71" value="">
                  <input type="hidden" name="doctor_duration" id="doctor_duration71" value="">
                  <input type="hidden" name="doctor_loc_code" id="doctor_loc_code71" value="MHB">
                  <input type="hidden" name="doctor_address" id="doctor_address71" value="Dr. (COL) R D Holla">

                  <input type="hidden" name="selected_date" id="selected_date" value="16072020">
                  <input type="hidden" name="doctor_code" id="doctor_code" value="MHBINTD4">
                  <input type="hidden" name="dept_code" id="dept_code" value="MHBDINT">
                  <input type="hidden" name="doctor_price" id="doctor_price" value="">
                  <input type="hidden" name="doctor_duration" id="doctor_duration" value="">
                  <input type="hidden" name="doctor_loc_code" id="doctor_loc_code" value="">
                  <input type="hidden" name="doctor_address" id="doctor_address" value="Dr. (COL) R D Holla">

                </div>
                <div class="row">
                  <div id="appointment-open66" style="display: block;" class="appointment-open">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div class="section2 doc-listing-booking">
                        <div class="select-time" id="select-time66" style="display: block;">
                          <div class="display-flex">
                            <p class="section2-headpara padding-top-10 text-center">Book an appoinment for Consultation
                            </p><div class="dropdown">
                            <p class="form-control select-dropDown" id="selected_unit'+value.doctor_id+'"></p>
                            <p></p>
                          </div>
                          </div>
                          <ul class="nav nav-pills margin-top-15 doctor-list-layout">
                            <div class="owl-carousel owl-theme owlcarousel owl-loaded owl-drag" id="owl-carousel66">

                              <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 5392px;"><div class="owl-item active" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check1607202066" onclick="getdateslots('16072020','66');"><a data-toggle="pill" id="clicked_value">Thu, 16 Jul<p><small id="slots_status1607202066">No Slots Available</small></p></a></div></div><div class="owl-item active" style="width: 156.729px; margin-right: 23px;"><div class="item active_class" id="new_date_check1707202066" onclick="getdateslots('17072020','66');"><a data-toggle="pill" id="clicked_value">Fri, 17 Jul<p><small id="slots_status1707202066">Slots Available</small></p></a></div></div><div class="owl-item active" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check1807202066" onclick="getdateslots('18072020','66');"><a data-toggle="pill" id="clicked_value">Sat, 18 Jul<p><small id="slots_status1807202066">Check Availablity</small></p></a></div></div><div class="owl-item active" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check1907202066" onclick="getdateslots('19072020','66');"><a data-toggle="pill" id="clicked_value">Sun, 19 Jul<p><small id="slots_status1907202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2007202066" onclick="getdateslots('20072020','66');"><a data-toggle="pill" id="clicked_value">Mon, 20 Jul<p><small id="slots_status2007202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2107202066" onclick="getdateslots('21072020','66');"><a data-toggle="pill" id="clicked_value">Tue, 21 Jul<p><small id="slots_status2107202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2207202066" onclick="getdateslots('22072020','66');"><a data-toggle="pill" id="clicked_value">Wed, 22 Jul<p><small id="slots_status2207202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2307202066" onclick="getdateslots('23072020','66');"><a data-toggle="pill" id="clicked_value">Thu, 23 Jul<p><small id="slots_status2307202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2407202066" onclick="getdateslots('24072020','66');"><a data-toggle="pill" id="clicked_value">Fri, 24 Jul<p><small id="slots_status2407202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2507202066" onclick="getdateslots('25072020','66');"><a data-toggle="pill" id="clicked_value">Sat, 25 Jul<p><small id="slots_status2507202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2607202066" onclick="getdateslots('26072020','66');"><a data-toggle="pill" id="clicked_value">Sun, 26 Jul<p><small id="slots_status2607202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2707202066" onclick="getdateslots('27072020','66');"><a data-toggle="pill" id="clicked_value">Mon, 27 Jul<p><small id="slots_status2707202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2807202066" onclick="getdateslots('28072020','66');"><a data-toggle="pill" id="clicked_value">Tue, 28 Jul<p><small id="slots_status2807202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check2907202066" onclick="getdateslots('29072020','66');"><a data-toggle="pill" id="clicked_value">Wed, 29 Jul<p><small id="slots_status2907202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check3007202066" onclick="getdateslots('30072020','66');"><a data-toggle="pill" id="clicked_value">Thu, 30 Jul<p><small id="slots_status3007202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check3107202066" onclick="getdateslots('31072020','66');"><a data-toggle="pill" id="clicked_value">Fri, 31 Jul<p><small id="slots_status3107202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0108202066" onclick="getdateslots('01082020','66');"><a data-toggle="pill" id="clicked_value">Sat, 01 Aug<p><small id="slots_status0108202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0208202066" onclick="getdateslots('02082020','66');"><a data-toggle="pill" id="clicked_value">Sun, 02 Aug<p><small id="slots_status0208202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0308202066" onclick="getdateslots('03082020','66');"><a data-toggle="pill" id="clicked_value">Mon, 03 Aug<p><small id="slots_status0308202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0408202066" onclick="getdateslots('04082020','66');"><a data-toggle="pill" id="clicked_value">Tue, 04 Aug<p><small id="slots_status0408202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0508202066" onclick="getdateslots('05082020','66');"><a data-toggle="pill" id="clicked_value">Wed, 05 Aug<p><small id="slots_status0508202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0608202066" onclick="getdateslots('06082020','66');"><a data-toggle="pill" id="clicked_value">Thu, 06 Aug<p><small id="slots_status0608202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0708202066" onclick="getdateslots('07082020','66');"><a data-toggle="pill" id="clicked_value">Fri, 07 Aug<p><small id="slots_status0708202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0808202066" onclick="getdateslots('08082020','66');"><a data-toggle="pill" id="clicked_value">Sat, 08 Aug<p><small id="slots_status0808202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check0908202066" onclick="getdateslots('09082020','66');"><a data-toggle="pill" id="clicked_value">Sun, 09 Aug<p><small id="slots_status0908202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check1008202066" onclick="getdateslots('10082020','66');"><a data-toggle="pill" id="clicked_value">Mon, 10 Aug<p><small id="slots_status1008202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check1108202066" onclick="getdateslots('11082020','66');"><a data-toggle="pill" id="clicked_value">Tue, 11 Aug<p><small id="slots_status1108202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check1208202066" onclick="getdateslots('12082020','66');"><a data-toggle="pill" id="clicked_value">Wed, 12 Aug<p><small id="slots_status1208202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check1308202066" onclick="getdateslots('13082020','66');"><a data-toggle="pill" id="clicked_value">Thu, 13 Aug<p><small id="slots_status1308202066">Check Availablity</small></p></a></div></div><div class="owl-item" style="width: 156.729px; margin-right: 23px;"><div class="item" id="new_date_check1408202066" onclick="getdateslots('14082020','66');"><a data-toggle="pill" id="clicked_value">Fri, 14 Aug<p><small id="slots_status1408202066">Check Availablity</small></p></a></div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>
                          </ul>

                          <div class="radio-btn radio-btn-doc-listing text-center" id="radio-btn66"><ul><p class="days_style" id="days_style">Morning</p><li><input type="radio" id="f-option1" name="slot_date" value=" 10:10  AM"><label for="f-option1"> 10:10  AM</label><div class="check"></div></li><li><input type="radio" id="f-option2" name="slot_date" value=" 10:20  AM"><label for="f-option2"> 10:20  AM</label><div class="check"></div></li><li><input type="radio" id="f-option3" name="slot_date" value=" 10:30  AM"><label for="f-option3"> 10:30  AM</label><div class="check"></div></li><li><input type="radio" id="f-option4" name="slot_date" value=" 10:40  AM"><label for="f-option4"> 10:40  AM</label><div class="check"></div></li><li><input type="radio" id="f-option5" name="slot_date" value=" 10:50  AM"><label for="f-option5"> 10:50  AM</label><div class="check"></div></li><li><input type="radio" id="f-option6" name="slot_date" value=" 11:10  AM"><label for="f-option6"> 11:10  AM</label><div class="check"></div></li><li><input type="radio" id="f-option7" name="slot_date" value=" 11:20  AM"><label for="f-option7"> 11:20  AM</label><div class="check"></div></li><li><input type="radio" id="f-option8" name="slot_date" value=" 11:30  AM"><label for="f-option8"> 11:30  AM</label><div class="check"></div></li><li><input type="radio" id="f-option9" name="slot_date" value=" 11:40  AM"><label for="f-option9"> 11:40  AM</label><div class="check"></div></li><li><input type="radio" id="f-option10" name="slot_date" value=" 11:50  AM"><label for="f-option10"> 11:50  AM</label><div class="check"></div></li></ul><ul><p class="days_style" id="days_style">Afternoon</p><li><input type="radio" id="f-option27" name="slot_date" value=" 12:00  PM"><label for="f-option27"> 12:00  PM</label><div class="check"></div></li><li><input type="radio" id="f-option28" name="slot_date" value=" 12:10  PM"><label for="f-option28"> 12:10  PM</label><div class="check"></div></li><li><input type="radio" id="f-option29" name="slot_date" value=" 12:20  PM"><label for="f-option29"> 12:20  PM</label><div class="check"></div></li><li><input type="radio" id="f-option30" name="slot_date" value=" 12:30  PM"><label for="f-option30"> 12:30  PM</label><div class="check"></div></li><li><input type="radio" id="f-option31" name="slot_date" value=" 12:40  PM"><label for="f-option31"> 12:40  PM</label><div class="check"></div></li><li><input type="radio" id="f-option32" name="slot_date" value=" 12:50  PM"><label for="f-option32"> 12:50  PM</label><div class="check"></div></li></ul><ul></ul><ul></ul></div>
                          <button id="bookNow_date66" class="bookNow bookNow1 button-booking-listing step-1-booking" style="display: block;" onclick="bookingDateField(66);" type="button">Book Now</button>
                        </div>
                        <div class="confirm-appointment width-booking-form" id="confirm-appointment66" style="display:none;margin-top: 11px;">
                          <h4>Confirm Appointment</h4>
                          <div class="row formSection">
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                              <div class="form-group">
                                <select id="salutation66" name="salutation" class="form-control salutation">
                                  <option value="0" selected="selected">Select Salutations</option>
                                  <option value="Mr">Mr</option>';
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
                                <input type="text" class="form-control first_name" id="first_name66" name="first_name" placeholder="First Name*" pattern="\w+\s\w+">
                                <span id="first_nameError66" class="apply apply-error"></span>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                              <div class="form-group">
                                <input type="text" class="form-control last_name" id="last_name66" name="last_name" placeholder="Last Name*">
                                <span id="last_nameError66" class="apply apply-error"></span>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                              <div class="form-group">
                                <input type="text" class="form-control email_id" id="email_id66" name="email_id" placeholder="Email ID*">
                                <span id="email_idError66" class="apply apply-error"></span>
                              </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 pr-0">
                              <div class="form-group">
                                <input type="tel" class="form-control contact_no" id="contact_no66" pattern="[0-9]{10}" name="contact_no" placeholder="Contact *" maxlength="10">
                                <span id="contact_noError66" class="apply apply-error"></span>
                              </div>
                            </div>
                            <p class="red">You will receive an SMS with a verification code on this number.</p>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="form-group">
                              <span>Are you new to hospital ?</span>
                              <label class="radio-inline">
                                <input type="radio" name="optradio66" class="yes" onclick="newToHospitalNo(66);" checked="">Yes </label>
                              <label class="radio-inline">
                                <input type="radio" name="optradio66" onclick="newToHospitalYes(66);" class="no">No </label>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding pl-15">
                            <div class="form-group" style="display:none;" id="no-block66">
                              <input type="text" class="form-control" id="patientNo" name="patientNo66" placeholder="Patient No. ">
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 height-50"></div>
                          <span class="backtodatetime" onclick="BackToDateTime(66);">
                                                        <i class="fa fa-arrow-left" aria-hidden="true"></i>Go Back</span>
                          <button class="bookNow bookNow1 button-booking-listing confirm-application" id="booking_otp66" type="button">Confirm</button>
                        </div>
                        <div class="otp-appointment" id="otp-appointment66" style="display:none;">
                          <div class="width-booking-form">
                            <p class="section2-headpara" style="font-size:14px; margin-bottom:6px;">We have sent you an OTP on</p>
                            <h3 id="old_mobile_no66">+91 8745360000</h3>
                            <input type="text" placeholder="Please enter the 6 digit OTP here to verify" name="otp_got" id="otp_got66">
                            <input type="hidden" name="otp_code_id_created" id="otp_code_id_created66" value="">
                            <span class="resend-otp" onclick="resend_otp(66);">Resend OTP</span>
                            <p class="blocks"><span class="pull-left cursur-auto" id="opt_timer66" sytle="display:none;"></span>
                              <span class="pull-left cursur-auto" id="opt_timer166" sytle="display:none;"></span>
                            </p>
                            <p>
                              <span class="pull-left otp_msg" id="otp_msg66" sytle="display:none;height:auto;">Did not receive OTP? You can request for another OTP click resend option</span>
                            </p>
                            <div class="error_otp" id="error_otp66"></div>
                            <span class="backtoconfirm" onclick="BackToConfirm(66);"><i class="fa fa-arrow-left" aria-hidden="true"></i>Go Back</span>
                            <span class="bookNow bookNow1 button-booking-listing confirm-application" onclick="booking_finish_all(66);">Book Appointment</span>
                          </div>
                        </div>
                        <div class="thanks-appointment" id="thanks-appointment66" style="display:none;">
                          <div class="width-booking-form text-center">
                            <img src="assets/images/check-mark.svg" alt=""><h3 class="main-center">You’re appointment is confirmed.</h3>
                            <p class="main-center">The details will be shared via Email &amp; SMS</p>
                            <p><b>Note :</b>Temporary visitor restriction, only one attendant is permitted with the patient. Your cooperation is solicited.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import '../../../public/dist/dstyle.css'
import '../../../public/dist/slick.css'
import '../../../public/dist/slick-theme.css'
import '../../../public/dist/magnific-popup.css'
import '../../../public/dist/style.css'
import '../../../public/dist/appointment-new.css'
import '../../../public/dist/doctors.css'

import { doctorList } from '@/api/doctor'

export default {
  name: 'Doctor',
  props: {
    msg: String
  },
  data () {
    return {
      fetchError: null,
      doctors: null
    }
  },
  created () {
    this.getDoctorList()
  },
  methods: {
    getDoctorList () {
      doctorList().then(response => {
        if (response.status) {
          this.fetchError = null
          this.doctors = response.data
        } else {
          this.showError(response.status)
        }
      }).catch(err => {
        console.log(err)
        this.showError('Something went wrong.')
      })
    }
  },
  showError (msg) {
    this.fetchError = 'Error: ' + msg
  }
}
</script>

<style>

  .form-group {
    margin-bottom: 15px;
    margin-left: 5px;
    margin-right: 5px;
  }

  .search-wrap-banner {
    position: relative;
    top: -17%;
  }

  .speciality-banner-wrap {
    display: block !important;
  }

  @media screen and (max-width: 500px) {
    .search-wrap-banner {
      position: absolute;
      top: 55%;
    }
  }
</style>
<style>
  iframe#launcher {
    right: 7px !important;
    bottom: 50px !important;
    margin: 0 !important;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

<style>
  div.appointment-open {
    position: absolute;
    width: 100%;
    margin-top: 0;
    padding: 0 10px;
    margin-bottom: 0;
    box-shadow: 0 0 22px #02020265;
  }
</style>

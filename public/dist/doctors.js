// $(document).ready(function () {
//     var hospital_id = $("#hospital_id").val();
//     var speciality_id = $("#speciality_id").val();
//     var doctor_id = $("#doctor_id").val();
//     var page_count = $("#page_count").val();
//     build_speciality_dropdown(hospital_id);
//     build_doctor_dropdown(hospital_id, speciality_id);
//     load_doctors(hospital_id, speciality_id, doctor_id, page_count);

// });

/**
 * Build Doctor Dropdown from homepage data
 * @param {*} hospital_id
 * @param {*} speciality_id
 */
function build_doctor_dropdown (hospital_id, speciality_id) {
  $.ajax({
    type: 'POST',
    url: CIURLS.siteurl + 'fetch-doctors-doctorsdrp',
    data: {
      hospital_id: $('#hospital_id').val(),
      speciality_id: $('#speciality_id').val(),
      csrf_test_name: $.cookie('csrf_cookie_name')
    },
    success: function (response) {
      $('#doctor_id').html(response)
    }
  })
}

/**
 * Build Speciality Dropdown from homepage data
 * @param {*} hospital_id
 */
function build_speciality_dropdown (hospital_id) {
  $.ajax({
    type: 'POST',
    url: CIURLS.siteurl + 'fetch-doctors-specialitydrp',
    data: {
      hospital_id: $('#hospital_id').val(),
      csrf_test_name: $.cookie('csrf_cookie_name')
    },
    success: function (response) {
      $('#speciality_id').html(response)
    }
  })
}

/**
 * Hospital Dropdown change
 */
$('#hospital_id').on('change', function (ev) {
  ev.preventDefault()
  // $.ajax({
  //     type: "POST",
  //     url: CIURLS.siteurl + "fetch-doctors-specialitydrp",
  //     data: {
  //         hospital_id: $(this).val(),
  //         csrf_test_name: $.cookie("csrf_cookie_name")
  //     },
  //     success: function (response) {
  //         $("#speciality_id").html(response);
  //         /*$("#doctor_id")
  //             .prop("selectedIndex", 0)
  //             .change();*/
  //     }
  // });
  $.ajax({
    type: 'POST',
    url: CIURLS.siteurl + 'fetch-doctors-doctorsdrp',
    data: {
      hospital_id: $('#hospital_id').val(),
      speciality_id: $('#speciality_id').val(),
      csrf_test_name: $.cookie('csrf_cookie_name')
    },
    success: function (response) {
      $('#doctor_id').html(response)
    }
  })
  return false
})

/**
 * Speciality Dropdown change
 */
$('#speciality_id').on('change', function (ev) {
  ev.preventDefault()
  $.ajax({
    type: 'POST',
    url: CIURLS.siteurl + 'fetch-doctors-doctorsdrp',
    data: {
      hospital_id: $('#hospital_id').val(),
      speciality_id: $(this).val(),
      csrf_test_name: $.cookie('csrf_cookie_name')
    },
    success: function (response) {
      $('#doctor_id').html(response)
    }
  })
  return false
})
/*
Search Button click event
*/
// $("#search").on("click", function (ev) {
//     ev.preventDefault();
//     var hospital_id = $("#hospital_id").val();
//     var speciality_id = $("#speciality_id").val();
//     var doctor_id = $("#doctor_id").val();
//     var page_count = $("#page_count").val();
//     load_doctors(hospital_id, speciality_id, doctor_id, page_count);
//     searchScroll();
// });

/**
 * View more button click check
 */
// var hasBeenClicked = false;
// $("#load_more").on("click", function (ev) {
//     ev.preventDefault();
//     hasBeenClicked = true;
// });

/**
 * View more records
 */
// function view_all() {
//     var hospital_id = $("#hospital_id").val();
//     var speciality_id = $("#speciality_id").val();
//     var doctor_id = $("#doctor_id").val();
//     $("#page_count").val(parseInt($("#page_count").val()) + 1);
//     var page_count = $("#page_count").val();
//     load_doctors(hospital_id, speciality_id, doctor_id, page_count);
//     scroll();
// }

/**
 * Scroll for view all cta
 */
var scroll = function () {
  $('html, body').animate({
    scrollTop: $('#load_more').offset().top - 150
  },
  1000
  )
}

/**
 * Scroll for search cta
 */
var searchScroll = function () {
  $('html, body').animate({
    scrollTop: $('#result').offset().top - 150
  },
  1000
  )
}

/**
 * Load Doctors
 * @param {*} hospital_id
 * @param {*} speciality_id
 * @param {*} doctor_id
 * @param {*} page_count
 */

document.getElementById('view_pro' + doc_id).style.display = 'none'

function resend_otp (doctorId) {
  $('#opt_timer1' + doctorId).val('')
  $('#opt_timer' + doctorId).hide()
  $('#submitBtnotp' + doctorId).attr('disabled', false)
  $('#submitBtnotp' + doctorId).css('opacity', '1')
  $('#otp_msg' + doctorId).css('display', 'none')
  setTimeout(function () {
    $('#submitBtnotp' + doctorId).attr('disabled', true)
    $('#submitBtnotp' + doctorId).css('opacity', '0.6')
  }, 300000)
  var phoneLength = $('#contact_no' + doctorId).val()
  var otp_code_id_created = $('#otp_code_id_created' + doctorId).val()
  var data = new FormData()
  data.append('contact_no', $('#contact_no' + doctorId).val())
  data.append('doctor_id', $('#doctor_id' + doctorId).val())
  data.append('otp_code_id_created', $('#otp_code_id_created' + doctorId).val())
  $.ajax({
    type: 'POST',
    async: false,
    url: 'index/doctor_otp_resend_generate',
    data: data,
    cache: false,
    processData: false, // important
    contentType: false,
    success: function (result) {
      var contact_no = '+91 ' + $('#contact_no' + doctorId).val()
      $('#old_mobile_no' + doctorId).empty()
      $('#old_mobile_no' + doctorId).append(contact_no)
      $('.otp-appointment' + doctorId).show()

      $('#time_box' + doctorId).show()
      $('#opt_timer1' + doctorId).show()
      var timeLeft1 = 59
      var elem1 = document.getElementById('opt_timer1' + doctorId)
      var timerId2 = setInterval(countdown, 1000)

      function countdown () {
        if (timeLeft1 == -1) {
          clearTimeout(timerId2)
          $('.resend-otp').css('display', 'block')
          $('#otp_msg' + doctorId).css('display', 'block')
          $('#otp_msg' + doctorId).css('height', 'auto')
          $('.backtoconfirm').css('display', 'block')
          $('#error_otp' + doctorId).css('display', 'none')
        } else {
          elem1.innerHTML = timeLeft1 + ' seconds remaining'
          timeLeft1--
          $('.resend-otp').css('display', 'none')
          $('.backtoconfirm').css('display', 'none')
        }
      }
    }
  })
}

function appointmentopen (doctorId) {
  var values = $('.select-dropDown-list' + doctorId + ' option:selected').val()
  // alert(values);

  if (values == 0) {
    document.getElementById('error_unit' + doctorId).style.display = 'inline-block'
    // document.getElementById("doc-profile-appoint"+sel).style.height = "0px";
    // document.getElementById("select-time"+sel).style.display = "none";
  } else {
    // document.getElementById("hr_line"+doctorId).style.display = "inline-block";
    // document.getElementById("error_unit"+doctorId).style.display = "none";
    document.getElementById('confirm-appointment' + doctorId).style.display = 'none'
    var x = document.getElementById('appointment-open' + doctorId)
    document.getElementById('doc-profile-appoint' + doctorId).style.height = '0px'
    var z = document.getElementsByClassName('doc-profile-appoint')
    var y = document.getElementsByClassName('appointment-open')
    // var w = document.getElementsByClassName("otp-appointment");
    $('.otp-appointment').css('display', 'none')
    for (var i = 0; i < y.length; i++) {
      if (screen.width > 600) {
        y[i].style.display = 'none'
        z[i].style.height = '230px'
      } else if (screen.width) {
        y[i].style.display = 'none'
        z[i].style.height = 'auto'
        // w[i].style.display = "none";
      }
    }

    if (x.style.display === 'none') {
      x.style.display = 'block'
      if (screen.width > 600) {
        document.getElementById('doc-profile-appoint' + doctorId).style.height = '615px'

        $('#bookNow_date' + doctorId).css('display', 'none')
        $('#select-time' + doctorId).css('display', 'block')
        // ajax call starts here
        var selected_date = $('#selected_date' + doctorId).val()
        var doctor_code = $('#doctor_code' + doctorId).val()
        var dept_code = $('#dept_code' + doctorId).val()
        var doctor_loc_code = $('#doctor_loc_code' + doctorId).val()
        // console.log(selected_date+doctor_code+dept_code+doctor_loc_code);
        $(function () {
          $.ajax({
            type: 'POST',
            url: 'index/doctorlist_booking_by_id',
            data: {
              selected_date: selected_date,
              doctor_code: doctor_code,
              dept_code: dept_code,
              doctor_loc_code: doctor_loc_code,
              doctorId: doctorId
            },
            success: function (result) {
              $('.radio-btn').html('')
              var json = $.parseJSON(result)
              var data = '<ul>'
              if (json.time_slots == '[]') {
                data += '<span class="not_avail main-center">No slots available on this day</span>'
                // document.getElementById("bookNow1").style.display = "none";
                $('#bookNow_date' + doctorId).css('display', 'none')
                $('#slots_status' + selected_date + doctorId).html('No Slots Available')
              } else {
                var x = 1
                var t = 0
                // $("#slots_status"+selected_date+doctorId).html("no");
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  // console.log("dee"+hh+mm+abrev);
                  if ((hh <= 11) && (mm <= 59) && (abrev == 'AM')) {
                    if (t == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Morning</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    t++
                  }
                  x = x + 1
                })
                // console.log(t);
                data += '</ul><ul>'
                var w = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh == 12) || (hh <= 3) && (mm <= 59) && (abrev == 'PM')) {
                    if (w == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Afternoon</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'

                    w++
                  }
                  x = x + 1
                })

                // console.log(w);
                data += '</ul><ul>'
                var y = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh >= 4) && (hh <= 7) && (mm <= 59) && (abrev == 'PM')) {
                    if (y == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Evening</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    y++
                  }
                  x = x + 1
                })
                // console.log(y);
                data += '</ul><ul>'
                var z = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh <= 11) && (hh >= 8) && (mm <= 59) && (abrev == 'PM')) {
                    if (z == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Night</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    z++
                  }
                  x = x + 1
                  // console.log(z);
                })
                // document.getElementById("bookNow1").style.display = "block";
                $('#bookNow_date' + doctorId).css('display', 'block')
                // console.log(count(start_dd));
                // console.log(json.time_slots.length);
                // $("#slots_status"+selected_date+doctorId).html(json.time_slots.length+" Slots Available");
                $('#slots_status' + selected_date + doctorId).html('Slots Available')
              }

              data += '</ul>'
              $('#price').html('₹ ' + json.price)
              $('.radio-btn').append(data)

              // radiobtn = document.getElementById("f-option1");
              // radiobtn.checked = true;
            }
          })
        })
      } else {
        document.getElementById('doc-profile-appoint' + doctorId).style.height = '950px'
        $('#bookNow_date' + doctorId).css('display', 'none')
        $('#select-time' + doctorId).css('display', 'block')
        // ajax call starts here
        var selected_date = $('#selected_date' + doctorId).val()
        var doctor_code = $('#doctor_code' + doctorId).val()
        var dept_code = $('#dept_code' + doctorId).val()
        var doctor_loc_code = $('#doctor_loc_code' + doctorId).val()
        // console.log(selected_date+doctor_code+dept_code+doctor_loc_code);
        $(function () {
          $.ajax({
            type: 'POST',
            url: 'index/doctorlist_booking_by_id',
            data: {
              selected_date: selected_date,
              doctor_code: doctor_code,
              dept_code: dept_code,
              doctor_loc_code: doctor_loc_code,
              doctorId: doctorId
            },
            success: function (result) {
              $('.radio-btn').html('')
              var json = $.parseJSON(result)
              var data = '<ul>'
              if (json.time_slots == '[]') {
                data += '<span class="not_avail main-center">No slots available on this day</span>'
                // document.getElementById("bookNow1").style.display = "none";
                $('#bookNow_date' + doctorId).css('display', 'none')
                $('#slots_status' + selected_date + doctorId).html('No Slots Available')
              } else {
                var x = 1
                var t = 0
                // $("#slots_status"+selected_date+doctorId).html("no");
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  // console.log("dee"+hh+mm+abrev);
                  if ((hh <= 11) && (mm <= 59) && (abrev == 'AM')) {
                    if (t == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Morning</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    t++
                  }
                  x = x + 1
                })
                // console.log(t);
                data += '</ul><ul>'
                var w = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh == 12) || (hh <= 3) && (mm <= 59) && (abrev == 'PM')) {
                    if (w == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Afternoon</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'

                    w++
                  }
                  x = x + 1
                })

                // console.log(w);
                data += '</ul><ul>'
                var y = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh >= 4) && (hh <= 7) && (mm <= 59) && (abrev == 'PM')) {
                    if (y == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Evening</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    y++
                  }
                  x = x + 1
                })
                // console.log(y);
                data += '</ul><ul>'
                var z = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh <= 11) && (hh >= 8) && (mm <= 59) && (abrev == 'PM')) {
                    if (z == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Night</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    z++
                  }
                  x = x + 1
                  // console.log(z);
                })
                // document.getElementById("bookNow1").style.display = "block";
                $('#bookNow_date' + doctorId).css('display', 'block')
                // console.log(count(start_dd));
                // console.log(json.time_slots.length);
                // $("#slots_status"+selected_date+doctorId).html(json.time_slots.length+" Slots Available");
                $('#slots_status' + selected_date + doctorId).html('Slots Available')
              }

              data += '</ul>'
              $('#price').html('₹ ' + json.price)
              $('.radio-btn').append(data)

              // radiobtn = document.getElementById("f-option1");
              // radiobtn.checked = true;
            }
          })
        })
      }
    } else {
      x.style.display = 'none'
      if (screen.width > 600) {
        document.getElementById('doc-profile-appoint' + doctorId).style.height = '230px'
        $('#bookNow_date' + doctorId).css('display', 'none')
        $('#select-time' + doctorId).css('display', 'block')
        // ajax call starts here
        var selected_date = $('#selected_date' + doctorId).val()
        var doctor_code = $('#doctor_code' + doctorId).val()
        var dept_code = $('#dept_code' + doctorId).val()
        var doctor_loc_code = $('#doctor_loc_code' + doctorId).val()
        // console.log(selected_date+doctor_code+dept_code+doctor_loc_code);
        $(function () {
          $.ajax({
            type: 'POST',
            url: 'index/doctorlist_booking_by_id',
            data: {
              selected_date: selected_date,
              doctor_code: doctor_code,
              dept_code: dept_code,
              doctor_loc_code: doctor_loc_code,
              doctorId: doctorId
            },
            success: function (result) {
              $('.radio-btn').html('')
              var json = $.parseJSON(result)
              var data = '<ul>'
              if (json.time_slots == '[]') {
                data += '<span class="not_avail main-center">No slots available on this day</span>'
                // document.getElementById("bookNow1").style.display = "none";
                $('#bookNow_date' + doctorId).css('display', 'none')
                $('#slots_status' + selected_date + doctorId).html('No Slots Available')
              } else {
                var x = 1
                var t = 0
                // $("#slots_status"+selected_date+doctorId).html("no");
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  // console.log("dee"+hh+mm+abrev);
                  if ((hh <= 11) && (mm <= 59) && (abrev == 'AM')) {
                    if (t == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Morning</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    t++
                  }
                  x = x + 1
                })
                // console.log(t);
                data += '</ul><ul>'
                var w = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh == 12) || (hh <= 3) && (mm <= 59) && (abrev == 'PM')) {
                    if (w == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Afternoon</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'

                    w++
                  }
                  x = x + 1
                })

                // console.log(w);
                data += '</ul><ul>'
                var y = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh >= 4) && (hh <= 7) && (mm <= 59) && (abrev == 'PM')) {
                    if (y == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Evening</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    y++
                  }
                  x = x + 1
                })
                // console.log(y);
                data += '</ul><ul>'
                var z = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh <= 11) && (hh >= 8) && (mm <= 59) && (abrev == 'PM')) {
                    if (z == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Night</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    z++
                  }
                  x = x + 1
                  // console.log(z);
                })
                // document.getElementById("bookNow1").style.display = "block";
                $('#bookNow_date' + doctorId).css('display', 'block')
                // console.log(count(start_dd));
                // console.log(json.time_slots.length);
                // $("#slots_status"+selected_date+doctorId).html(json.time_slots.length+" Slots Available");
                $('#slots_status' + selected_date + doctorId).html('Slots Available')
              }

              data += '</ul>'
              $('#price').html('₹ ' + json.price)
              $('.radio-btn').append(data)

              // radiobtn = document.getElementById("f-option1");
              // radiobtn.checked = true;
            }
          })
        })
      } else {
        document.getElementById('doc-profile-appoint' + doctorId).style.height = 'auto'
        $('#bookNow_date' + doctorId).css('display', 'none')
        $('#select-time' + doctorId).css('display', 'block')
        // ajax call starts here
        var selected_date = $('#selected_date' + doctorId).val()
        var doctor_code = $('#doctor_code' + doctorId).val()
        var dept_code = $('#dept_code' + doctorId).val()
        var doctor_loc_code = $('#doctor_loc_code' + doctorId).val()
        // console.log(selected_date+doctor_code+dept_code+doctor_loc_code);
        $(function () {
          $.ajax({
            type: 'POST',
            url: 'index/doctorlist_booking_by_id',
            data: {
              selected_date: selected_date,
              doctor_code: doctor_code,
              dept_code: dept_code,
              doctor_loc_code: doctor_loc_code,
              doctorId: doctorId
            },
            success: function (result) {
              $('.radio-btn').html('')
              var json = $.parseJSON(result)
              var data = '<ul>'
              if (json.time_slots == '[]') {
                data += '<span class="not_avail main-center">No slots available on this day</span>'
                // document.getElementById("bookNow1").style.display = "none";
                $('#bookNow_date' + doctorId).css('display', 'none')
                $('#slots_status' + selected_date + doctorId).html('No Slots Available')
              } else {
                var x = 1
                var t = 0
                // $("#slots_status"+selected_date+doctorId).html("no");
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  // console.log("dee"+hh+mm+abrev);
                  if ((hh <= 11) && (mm <= 59) && (abrev == 'AM')) {
                    if (t == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Morning</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    t++
                  }
                  x = x + 1
                })
                // console.log(t);
                data += '</ul><ul>'
                var w = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh == 12) || (hh <= 3) && (mm <= 59) && (abrev == 'PM')) {
                    if (w == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Afternoon</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'

                    w++
                  }
                  x = x + 1
                })

                // console.log(w);
                data += '</ul><ul>'
                var y = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh >= 4) && (hh <= 7) && (mm <= 59) && (abrev == 'PM')) {
                    if (y == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Evening</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    y++
                  }
                  x = x + 1
                })
                // console.log(y);
                data += '</ul><ul>'
                var z = 0
                $.each(json.time_slots, function (k, v) {
                  var start_dd = v.startTime
                  var new_s_date = start_dd
                  var new_d_s = new_s_date.substr(0, 2)
                  if (new_d_s <= 9) {
                    var new_d = new_s_date.substr(11, 12)
                  } else {
                    var new_d = new_s_date.substr(12, 13)
                  }
                  var startString = new_d.split(':')
                  var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

                  var hh = new_for_date.substr(1, 2)
                  var mm = new_for_date.substr(3, 2)
                  var abrev = new_for_date.substr(5, 2)
                  if ((hh <= 11) && (hh >= 8) && (mm <= 59) && (abrev == 'PM')) {
                    if (z == 0) {
                      data += '<p class="days_style" id="days_style' + doctorId + '">Night</p>'
                    }
                    data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                    z++
                  }
                  x = x + 1
                  // console.log(z);
                })
                // document.getElementById("bookNow1").style.display = "block";
                $('#bookNow_date' + doctorId).css('display', 'block')
                // console.log(count(start_dd));
                // console.log(json.time_slots.length);
                // $("#slots_status"+selected_date+doctorId).html(json.time_slots.length+" Slots Available");
                $('#slots_status' + selected_date + doctorId).html('Slots Available')
              }

              data += '</ul>'
              $('#price').html('₹ ' + json.price)
              $('.radio-btn').append(data)

              // radiobtn = document.getElementById("f-option1");
              // radiobtn.checked = true;
            }
          })
        })
      }
    }
  }

  // getslots by datewise

  $('.item' + doctorId).click(function () {
    // var x = $(this).id;
    var selected_date = $(this).attr('id')
    // alert(selected_date);
    // $('#selected_date').val();
    // $('.item').removeClass('active_class');
    // $('#new_date_check'+selected_date).addClass('active_class');
    // $('#selected_date').val(selected_date);
    // var selected_date = $('#selected_date'+doctorId).val();

    $('.item' + doctorId).removeClass('active_class')
    $('.item_classes' + selected_date + doctorId).addClass('active_class')
    var doctor_code = $('#doctor_code' + doctorId).val()
    var dept_code = $('#dept_code' + doctorId).val()
    var doctor_loc_code = $('#doctor_loc_code' + doctorId).val()
    // console.log(selected_date+doctor_code+dept_code+doctor_loc_code);
    $(function () {
      $.ajax({
        type: 'POST',
        url: 'index/doctor_profile_date_slots',
        data: {
          date_wise: selected_date,
          doctor_code: doctor_code,
          dept_code: dept_code,
          selected_city_code: doctor_loc_code
        },
        success: function (result) {
          $('.radio-btn').html('')
          var json = $.parseJSON(result)
          var data = '<ul>'
          if (json.time_slots == '[]') {
            data += '<span class="not_avail main-center">No slots available on this day</span>'
            // document.getElementById("bookNow1+doctorId"+doctorId).style.display = "none";
            $('#bookNow_date' + doctorId).css('display', 'none')
            $('#slots_status' + selected_date + doctorId).html('No Slots Available')
          } else {
            var x = 1
            var t = 0
            $.each(json.time_slots, function (k, v) {
              var start_dd = v.startTime
              var new_s_date = start_dd
              var new_d_s = new_s_date.substr(0, 2)
              if (new_d_s <= 9) {
                var new_d = new_s_date.substr(11, 12)
              } else {
                var new_d = new_s_date.substr(12, 13)
              }
              var startString = new_d.split(':')
              var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

              var hh = new_for_date.substr(1, 2)
              var mm = new_for_date.substr(3, 2)
              var abrev = new_for_date.substr(5, 2)
              if ((hh <= 11) && (mm <= 59) && (abrev == 'AM')) {
                if (t == 0) {
                  data += '<p class="days_style" id="days_style' + doctorId + '">Morning</p>'
                }
                data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                t++
              }
              x = x + 1
            })
            // console.log(t);
            data += '</ul><ul>'
            var w = 0
            $.each(json.time_slots, function (k, v) {
              var start_dd = v.startTime
              var new_s_date = start_dd
              var new_d_s = new_s_date.substr(0, 2)
              if (new_d_s <= 9) {
                var new_d = new_s_date.substr(11, 12)
              } else {
                var new_d = new_s_date.substr(12, 13)
              }
              var startString = new_d.split(':')
              var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

              var hh = new_for_date.substr(1, 2)
              var mm = new_for_date.substr(3, 2)
              var abrev = new_for_date.substr(5, 2)
              if ((hh == 12) || (hh <= 3) && (mm <= 59) && (abrev == 'PM')) {
                if (w == 0) {
                  data += '<p class="days_style" id="days_style' + doctorId + '">Afternoon</p>'
                }
                data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'

                w++
              }
              x = x + 1
            })

            // console.log(w);
            data += '</ul><ul>'
            var y = 0
            $.each(json.time_slots, function (k, v) {
              var start_dd = v.startTime
              var new_s_date = start_dd
              var new_d_s = new_s_date.substr(0, 2)
              if (new_d_s <= 9) {
                var new_d = new_s_date.substr(11, 12)
              } else {
                var new_d = new_s_date.substr(12, 13)
              }
              var startString = new_d.split(':')
              var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

              var hh = new_for_date.substr(1, 2)
              var mm = new_for_date.substr(3, 2)
              var abrev = new_for_date.substr(5, 2)
              if ((hh >= 4) && (hh <= 7) && (mm <= 59) && (abrev == 'PM')) {
                if (y == 0) {
                  data += '<p class="days_style" id="days_style' + doctorId + '">Evening</p>'
                }
                data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                y++
              }
              x = x + 1
            })
            // console.log(y);
            data += '</ul><ul>'
            var z = 0
            $.each(json.time_slots, function (k, v) {
              var start_dd = v.startTime
              var new_s_date = start_dd
              var new_d_s = new_s_date.substr(0, 2)
              if (new_d_s <= 9) {
                var new_d = new_s_date.substr(11, 12)
              } else {
                var new_d = new_s_date.substr(12, 13)
              }
              var startString = new_d.split(':')
              var new_for_date = startString.slice(0, -1).join('') + new_d.slice(new_d.length - 2)

              var hh = new_for_date.substr(1, 2)
              var mm = new_for_date.substr(3, 2)
              var abrev = new_for_date.substr(5, 2)
              if ((hh <= 11) && (hh >= 8) && (mm <= 59) && (abrev == 'PM')) {
                if (z == 0) {
                  data += '<p class="days_style" id="days_style' + doctorId + '">Night</p>'
                }
                data += '<li><input type="radio" id="' + doctorId + 'f-option' + x + '" class="radio-select" name="slot_date" value="' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '"><label for="' + doctorId + 'f-option' + x + '">' + startString.slice(0, -1).join(':') + '  ' + new_d.slice(new_d.length - 2) + '</label><div class="check"></div></li>'
                z++
              }
              x = x + 1
            })
            // console.log(z);
            // document.getElementById("bookNow1"+doctorId).style.display = "block";
            $('#bookNow_date' + doctorId).css('display', 'block')
            // $("#slots_status"+selected_date+doctorId).html(json.time_slots.length+" Slots Available");
            $('#slots_status' + selected_date + doctorId).html('Slots Available')
          }

          data += '</ul>'
          $('#price').html('₹ ' + json.price)
          $('.radio-btn').append(data)

          radiobtn = document.getElementById('f-option1')
          // radiobtn.checked = true;
        }
      })
    })
  })

  // function booking_otp(){
  $('#booking_otp' + doctorId).click(function () {
    // alert("asdx");
    var first_name = $('#first_name' + doctorId).val()
    var last_name = $('#last_name' + doctorId).val()
    var email_id = $('#email_id' + doctorId).val()
    var phoneLength = $('#contact_no' + doctorId).val()
    var doctor_id = $('#doctor_id' + doctorId).val()
    var salutation = $('#salutation' + doctorId).val()
    var price = $('#price' + doctorId).text()
    $('#opt_timer1').hide()
    $('#opt_timer1').val(0)
    setTimeout(function () {
      $('#submitBtnotp' + doctorId).attr('disabled', true)
      $('#submitBtnotp' + doctorId).css('opacity', '0.6')
    }, 300000)

    var doctor_code = $('#doctor_code' + doctorId).val()
    var selected_date = $('#selected_date' + doctorId).val()
    var doctor_loc_code = $('#doctor_loc_code' + doctorId).val()
    var contact_no = $('#contact_no' + doctorId).val()
    var doctor_duration = $('#doctor_duration' + doctorId).val()
    var spec_code = $('#dept_code' + doctorId).val()
    var slot_date = $('input[name=slot_date]:checked').val()
    // var selected_date = $('#selected_date').val();

    var day = selected_date.substr(0, 2)
    var month = selected_date.substr(2, 2)
    var year = selected_date.substr(4, 4)
    var date_given = month + '/' + day + '/' + year
    var new_datesd = date_given.split('/')

    var date1 = new Date(new_datesd)
    var n = date1.toDateString()

    var new_date = new Date($('#selected_date' + doctorId).val())
    $('#time_box1').empty()
    $('<p class="section1-paragraph">Selected Slots:</p><span class="section1-paragraph pre-datas"> Date: ' + n + '</span><span class="section1-paragraph pre-datas"> Time: ' + $('input[name=slot_date]:checked').val() + '</span><br/><span class="section1-paragraph pre-datas address-card"> Address: ' + $('#doctor_address').val() + '</span>').appendTo('#time_box1')

    $('#time_box1').show()
    // alert(price);

    $('#price_new_tag1').empty()
    $('<span>' + price + '</span>').appendTo('#price_new_tag1')

    // alert("ads");
    var patt = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    var valid = 0

    if (salutation == '0') {
      $('#salutationError' + doctorId).text('Please select a salutation')
      $('#salutation' + doctorId).css('border-color', 'red')
      $('#salutation' + doctorId).focus()
      return false
    } else {
      $('#salutation' + doctorId).css('border-color', 'green')
      $('#salutationError' + doctorId).text('')
      valid++
    }
    if (first_name == '') {
      $('#first_nameError' + doctorId).text('Please enter your first name')
      $('#first_name' + doctorId).css('border-color', 'red')
      $('#first_name' + doctorId).focus()
      return false
    } else {
      $('#first_name' + doctorId).css('border-color', 'green')
      $('#first_nameError' + doctorId).text('')
      valid++
    }
    if (last_name == '') {
      $('#last_nameError' + doctorId).text('Please enter your last name')
      $('#last_name' + doctorId).css('border-color', 'red')
      $('#last_name' + doctorId).focus()
      return false
    } else {
      $('#last_name' + doctorId).css('border-color', 'green')
      $('#last_nameError' + doctorId).text('')
      valid++
    }
    if (email_id == '') {
      $('#email_idError' + doctorId).text('Please enter your email id')
      $('#email_id' + doctorId).css('border-color', 'red')
      $('#email_id' + doctorId).focus()
      return false
    } else if (!(patt.test(email_id))) {
      $('#email_idError' + doctorId).text('Please enter your valid email id')
      $('#email_id' + doctorId).css('border-color', 'red')
      $('#email_id' + doctorId).focus()
      return false
    } else {
      $('#email_id' + doctorId).css('border-color', 'green')
      $('#email_idError' + doctorId).text('')
      valid++
    }
    var phoneLength = $('#contact_no' + doctorId).val().length
    if (phoneLength < 10) {
      $('#contact_noError' + doctorId).text('Please enter your contact number')
      $('#contact_no' + doctorId).css('border-color', 'red')
      $('#contact_no' + doctorId).focus()
      return false
    } else {
      $('#contact_no' + doctorId).css('border-color', 'green')
      $('#contact_noError' + doctorId).text('')
      valid++
    }

    if (valid == 5) {
      var data = new FormData()
      data.append('contact_no', $('#contact_no' + doctorId).val())
      data.append('doctor_id', $('#doctor_id' + doctorId).val())
      data.append('doctor_code', doctor_code)
      data.append('doctor_loc_code', doctor_loc_code)
      data.append('patientName', first_name + last_name)
      data.append('contact_no', contact_no)
      data.append('email_id', email_id)
      data.append('doctor_duration', doctor_duration)
      data.append('spec_code', spec_code)
      data.append('salutation', salutation)
      data.append('selected_date', selected_date)
      data.append('slot_date', slot_date)
      $.ajax({
        type: 'POST',
        async: false,
        url: 'index/doctor_otp_generate',
        data: data,
        cache: false,
        processData: false, // important
        contentType: false,
        dataType: 'json',
        success: function (result) {
          var contact_no = '+91 ' + $('#contact_no' + doctorId).val()
          $('#otp_code_id_created' + doctorId).val(result.ref_id)
          $('#old_mobile_no' + doctorId).empty()
          $('#old_mobile_no' + doctorId).append(contact_no)
          $('.confirm-appointment').hide()
          $('.otp-appointment').show()

          $('#time_box' + doctorId).show()
          $('#opt_timer' + doctorId).show()
          // $("#quali_box").hide();
          var timeLeft = 59
          var elem = document.getElementById('opt_timer' + doctorId)
          var timerId = setInterval(countdown, 1000)

          function countdown () {
            if (timeLeft == -1) {
              clearTimeout(timerId)
              $('.resend-otp').css('display', 'block')
              $('#otp_msg' + doctorId).css('display', 'block')
              $('.backtoconfirm').css('display', 'block')
              $('.error_otp' + doctorId).css('display', 'none')
              // doSomething();
            } else {
              elem.innerHTML = timeLeft + ' seconds remaining'
              timeLeft--
              $('.resend-otp').css('display', 'none')
              $('.backtoconfirm').css('display', 'none')
              $('#otp_msg' + doctorId).css('display', 'none')
            }
          }
        },
        error: function (er) {
          console.log(er)
        }
      })
      return true
    } else {
      return false
    }
  })

  jQuery(function ($) {
    console.log('owl selectors', $('#owl-carousel' + doctorId))
    $('#owl-carousel' + doctorId).owlCarousel({

      loop: false,
      margin: 23,
      autoplay: false,
      autoplayTimeout: 300000,
      autoplayHoverPause: false,
      autoplaySpeed: 12000000,
      nav: true,
      singleItem: true,
      rewindNav: false,
      rewindSpeed: 0,
      dots: false,
      responsive: {
        0: {
          items: 3,
          nav: true
        },
        600: {
          items: 3,
          nav: true
        },
        1000: {
          items: 3,
          nav: true
        }
      }
      // navText: ['<img src="https://beta.asterbangalore.com/aster-rv-jp-nagar/assets/images/experts_left.png" alt="left"/>',
      // '<img src="https://beta.asterbangalore.com/aster-rv-jp-nagar/assets/images/experts_right.png" alt="right"/>'
      // ]
    })
  })
}

function bookingDateField (val_id) {
  if (!$('input[name=\'slot_date\']:checked').val()) {
    alert('Please select your slot or timings ...!')
  } else {
    document.getElementById('select-time' + val_id).style.display = 'none'
    document.getElementById('confirm-appointment' + val_id).style.display = 'block'
  }
}

function confirmAppField (val_id) {
  document.getElementById('select-time' + val_id).style.display = 'none'
  document.getElementById('confirm-appointment' + val_id).style.display = 'none'
  document.getElementById('otp-appointment' + val_id).style.display = 'block'
}

function thanksField (val_id) {
  document.getElementById('select-time' + val_id).style.display = 'none'
  document.getElementById('confirm-appointment' + val_id).style.display = 'none'
  document.getElementById('otp-appointment' + val_id).style.display = 'none'
  document.getElementById('thanks-appointment' + val_id).style.display = 'block'
}

function BackToDateTime (val_id) {
  document.getElementById('select-time' + val_id).style.display = 'block'
  document.getElementById('confirm-appointment' + val_id).style.display = 'none'
}

function BackToConfirm (val_id) {
  document.getElementById('select-time' + val_id).style.display = 'none'
  document.getElementById('confirm-appointment' + val_id).style.display = 'block'
  document.getElementById('otp-appointment' + val_id).style.display = 'none'
  $('#otp_msg' + doctorId).css('display', 'none')
  $('#error_otp' + doctorId).html()
  $('.error_otp').css('display', 'none')
}

function BackTootp (val_id) {
  document.getElementById('select-time' + val_id).style.display = 'none'
  document.getElementById('confirm-appointment' + val_id).style.display = 'none'
  document.getElementById('otp-appointment' + val_id).style.display = 'block'
  document.getElementById('thanks-appointment' + val_id).style.display = 'none'
}

function newToHospitalYes (val_id) {
  document.getElementById('no-block' + val_id).style.display = 'block'
}

function newToHospitalNo (val_id) {
  document.getElementById('no-block' + val_id).style.display = 'none'
}

$(document).ready(function () {
  $('.no').click(function () {
    $('#no-block').show()
  })
  $('.yes').click(function () {
    $('#no-block').hide()
  })
  $('.section2 .item' + doctorId).click(function () {
    $('.radio-btn').show()
  })
})

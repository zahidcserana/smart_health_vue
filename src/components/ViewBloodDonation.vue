<template>
  <div class="view-blood-donation" style="padding: 5% 5%">
    <p style="text-align: center">Blood Donation Information</p>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Request Type</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.req_type }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Person Name</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.patient_name }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Person Age</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.patient_age }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Mobile</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.contact_no }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Address</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.address_for_donation }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Blood Group</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.blood_group }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Gender</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.patient_gender }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Required Time</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.required_time }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Status</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.status }}</span>
      </div>
    </div>
    <div class="row" v-if="!bloodDonation.is_self">
      <div class="col-md-4">
        <span style="font-weight: 600">Reference</span>
      </div>
      <div class="col-md-6">
        <span>{{ bloodDonation.user.name }}, {{ bloodDonation.user.mobile }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewBloodDonation',
  props: {
    bloodDonation: Object
  }
}
</script>

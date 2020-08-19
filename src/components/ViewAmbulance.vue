<template>
  <div class="view-blood-donation" style="padding: 5% 5%">
    <p style="text-align: center">Ambulance Information</p>
    <hr>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Status</span>
      </div>
      <div class="col-md-6">
        <span>{{ ambulance.status === 'ACTIVE' ? 'Available' : 'N/A' }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Vendor Name</span>
      </div>
      <div class="col-md-6">
        <span>{{ ambulance.vendor_name }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Address</span>
      </div>
      <div class="col-md-6">
        <span>{{ ambulance.full_address }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Mobile</span>
      </div>
      <div class="col-md-6">
        <span>{{ ambulance.contact }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <span style="font-weight: 600">Rent Rate</span>
      </div>
      <div class="col-md-6">
        <span>{{ ambulance.rent_rate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewAmbulance',
  props: {
    ambulance: Object
  }
}
</script>

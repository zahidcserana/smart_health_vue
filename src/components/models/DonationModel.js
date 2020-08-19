export const BloodDonation = {
  is_self: true,
  user_id: undefined,
  req_type: 'NEED_DONATION',
  blood_group: '',
  patient_name: '',
  patient_gender: '',
  patient_age: '',
  problem_description: '',
  contact_no: '',
  address_for_donation: '',
  required_time: '',
  comments: '',
  status: 'INITIATED'
}

export const reqTypes = ['NEED_DONATION', 'WANT_TO_DONATE']
export const status = ['INITIATED', 'COMPLETED', 'ACCEPTED', 'REJECTED', 'OPEN', 'CLOSED']

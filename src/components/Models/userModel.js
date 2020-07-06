const userModel = {
  id: undefined,
  address: '',
  name: '',
  email: '',
  mobile: '',
  city_id: '',
  area_id: '',
  gender: '',
  blood_group: '',
  user_type: '',
  avatar: '',
  doctor: {
    specialty_id: 0,
    qualification_details: '',
    designation_details: '',
    bmdc_reg_no: '',
    chamber1_address: '',
    chamber2_address: '',
    chamber1_contact_no: '',
    chamber2_contact_no: '',
    visiting_days: '',
    visiting_hrs: ''
  }
}
export default userModel

// export class WeekDays {
//   day: number;
//   start_time: string;
//   end_time: string;
//   is_open: boolean = true;
//   always_open: boolean = true;
//   weekName?: string;
// }

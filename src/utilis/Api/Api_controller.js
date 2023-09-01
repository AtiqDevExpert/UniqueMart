import { post_request, get_request } from './Requests';

const Login_api = async body => {
  const response = await post_request({ target: '/v2/business/login', body: body });
  return response;
};
const ForgotPassword_api = async body => {
  const response = await post_request({ target: '/v2/business/forgot-password', body: body });
  return response;
};
const Signup_api = async body => {
  const response = await post_request({ target: '/v2/business/vendor-signup', body: body });
  return response;
};
const getBookUserApi = async ({ page, limit, facilityId }) => {
  const response = await get_request({ target: '/v2/business/get-booking-users/' + facilityId + '?page=' + page + '&limit=' + limit, body: { facilityId: 2 } });
  return response;
}
const Update_Password = async body => {
  const response = await post_request({ target: '/v2/business/password-update', body: body });
  return response;
};
const Add_Facility = async (body) => {
  const response = await post_request({ target: `/v2/business/create-facility`, body: body });
  return response;
};
const Add_Sub_Facility = async (body, id) => {
  const response = await post_request({ target: `/v2/business/facility/${id}/create-sub-facility`, body: body });
  return response;
};
const Add_Sub_Facility_Image = async (body, id) => {
  const response = await post_request({target: `/v2/business/facility/${id}/upload-image`, body: body});
  return response;
};
const Add_Services = async body => {
  const response = await post_request({ target: '/v2/business/create-service', body: body });
  return response;
};
const Service_Schedule = async (body, id) => {
  const response = await post_request({ target: `/v2/business/service/${id}/create-or-update-schedule-availability`, body: body });
  return response;
};
const Add_Experience = async body => {
  const response = await post_request({ target: '/v2/business/create-experience', body: body });
  return response;
};

const getSubscriptionPlan = async () => {
  const response = await get_request({ target: '/v2/business/subscription-plan' });
  return response;
}
const getNotification = async () => {
  const response = await get_request({ target: 'v2/business/notifications/' });
  return response;
}
const getAllNotification = async () => {
  const response = await get_request({ target: 'v2/business/notifications/all?page=1&limit=20/' });
  return response;
}
const clear_Notification = async () => {
  const response = await post_request({ target: '/v2/business/notifications/clear' });
  return response;
}
const getCardsList = async () => {
  const response = await get_request({ target: '/v2/business/cards' });
  return response;
}
const get_Amenities = async () => {
  const response = await get_request({ target: '/v2/business/amenities-list' });
  return response;
}
const get_Category = async () => {
  const response = await get_request({ target: '/v2/business/category-list' });
  return response;
}
const get_Days = async () => {
  const response = await get_request({ target: 'v2/business/working-day' });
  return response;
}
const Add_Bank_Detail = async body => {
  const response = await post_request({ target: '/v2/business/save-bank-details', body: body });
  return response;
}
const Add_Card = async body => {
  const response = await post_request({ target: '/v2/business/save-card', body: body });
  return response;
}
const get_Email_Verification = async (email) => {
  const response = await get_request({ target: '/v2/business/verify-email', email: email });
  return response;
}
export {
  Login_api,
  Signup_api,
  Update_Password,
  ForgotPassword_api,
  getBookUserApi,
  Add_Facility,
  Add_Sub_Facility,
  Add_Services,
  Service_Schedule,
  Add_Experience,
  Add_Sub_Facility_Image,
  getSubscriptionPlan,
  getNotification,
  getAllNotification,
  clear_Notification,
  getCardsList,
  get_Amenities,
  get_Category,
  Add_Bank_Detail,
  Add_Card,
  get_Email_Verification,
  get_Days
};

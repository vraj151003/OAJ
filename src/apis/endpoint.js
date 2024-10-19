export const mode = 'ip' //process.env.REACT_APP_APP_MODE;
let domain = ''

switch (mode) {
  case 'ip':
    domain = 'http://192.168.1.11:8000/'
    break
  default:
    domain = 'http://localhost:8000/'
}

export default {

  root: domain,
  createPayment: `${domain}api/user/`,
  
}


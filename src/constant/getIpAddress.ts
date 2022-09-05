import axios from 'axios';

export default async function getIpAddress() {
  try {
    const res = await axios.get('https://geolocation-db.com/json/');
    return res.data.IPv4;
  } catch (err) {
    return console.log(err);
  }
}

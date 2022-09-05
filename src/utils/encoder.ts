import CryptoJS from 'crypto-js';

export default function signatureCreation(
  apiKey: string,
  secretKey: string,
  timestamp: string
) {
  const initialString: string = `${apiKey}#*#${timestamp}#*#${secretKey}`;

  // Encode algorithm: sha256 hash => utf8 encode => base64 encode

  const sha245Encode = CryptoJS.SHA256(initialString).toString();
  const utf8Encode = CryptoJS.enc.Utf8.parse(sha245Encode);
  const base64Encode: string = CryptoJS.enc.Base64.stringify(utf8Encode);

  return base64Encode;
}

// export const encodeSession = async (data: UserData) => {
//   const textData = JSON.stringify(data);
//   const utf8Encode = CryptoJS.enc.Utf8.parse(textData);
//   const base64Encode: string = CryptoJS.enc.Base64.stringify(utf8Encode);
//   return Promise.resolve(base64Encode);
// };

// export const decodeSession = (data: string) => {
//   const base64Encode = CryptoJS.enc.Base64.parse(data);
//   const utf8Encode = CryptoJS.enc.Utf8.stringify(base64Encode);
//   const textData: UserData = JSON.parse(utf8Encode);
//   return textData;
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from "crypto-js";

function CryptoJSA(ciphertext: any) {
  const secret = localStorage.getItem("secret");

  const str = secret!.slice(0, 16);

  const key = CryptoJS.enc.Utf8.parse(str); // 8字节的密钥
  const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
    iv: key,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const res = decrypted.toString(CryptoJS.enc.Utf8);

  const plaintext = JSON.parse(res);
  return plaintext;
}

export default CryptoJSA;

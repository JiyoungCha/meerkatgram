/**
 * @file app/utils/cookie/cookie.util.js
 * @description
 */

import dayjs from 'dayjs';

// -----------------
// private
// -----------------
/**
 * 
 * @param {import("express").Response} re 
 * @param {string} cookieName 
 * @param {string} cookieValue 
 * @param {number} ttl 
 * @param {boolean} httpOnlFlg 
 * @param {boolean} secureFlg 
 */
function setCookie(res, cookieName, cookieValue, ttl, httpOnlFlg = true, secureFlg = false){
  res.cookie(
    cookieName,
    cookieValue,
    {
      expires: dayjs().add(ttl, 'second').toDate(),
      httpOnly: httpOnlFlg,
      secure: secureFlg,
      sameSite: 'none',
    }
  );
}

// -----------------
// public
// -----------------
/**
 * 쿠키에 리프래시 토큰 설정
 * @param {import("express").Response} res 
 * @param {string} refreshToken 
 */
function setCookieRefreshToken(res, refreshToken) {
  setCookie(
    res,
    process.env.JWT_REFRESH_TOKEN_COOKIE_NAME,
    refreshToken,
    parseInt(process.env.JWT_REFRESH_TOKEN_COOKIE_EXPIRY),
    true,
    true
  );
}

export default {
  setCookieRefreshToken,
}
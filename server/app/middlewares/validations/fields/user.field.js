/**
 * @file app/middlewares/validations/fields/user.field.js
 * @description 유저 정보 유효성 검사 필드
 * 251119 v1.0.0 CK init
 */

import { body } from "express-validator";

export const email = body('email').trim()
  .notEmpty().withMessage('이메일은 필수 항목 입니다.')
  .bail().isEmail().withMessage('유효한 이메일을 입력해주세요.')
;

export const password = body('password').trim()
 .notEmpty().withMessage('비밀번호는 필수 항목입니다.')
 .bail().matches(/^[0-9a-zA-Z!@#$]{8,20}$/).withMessage('영어 대소문자·슷자·!·@·#·$, 8~20자 허용')
;
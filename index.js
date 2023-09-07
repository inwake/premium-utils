// Test functions from console with node
// node -e "import('./daysAgoDate.js').then( (module) => {console.log( module.default(69)} )"

import {currentDaySegment,
  formatDate,
  formatUtcDate,
  daysAfterDate,
  daysAgoDate,
  randDate} from './dateUtils/index.js'

import ajaxRequest from './ajaxRequest.js';
import binarySearch from './binarySearch.js';
import checkMobileBrowser from './checkMobileBrowser.js';
import compressImage from './compressImage.js';
import extractNestedValue from './extractNestedValue.js';
import emailValid from './emailValid.js';
import formatMoney from './formatMoney.js';
import formatNumberWithCommas from './formatNumberWithCommas.js';
import formatUsPhoneNumber from './formatUsPhoneNumber.js';
import generatePassword from './generatePassword.js';
import hexColorIsLight from './hexColorIsLight.js';
import imgUrlToBase64 from './imgUrlToBase64.js';
import insertionSort from './insertionSort.js';
import mergeSort from './mergeSort.js';
import parseRailsErrors from './parseRailsErrors.js';
import parseUrlParams from './parseUrlParams.js';
import percentage from './percentage.js';
import similarityOfStrings from './similarityOfStrings.js';
import formatMoneyCondensed from './formatMoneyCondensed.js';
import truncateStringPreservingWords from './truncateStringPreservingWords.js';
import vibrantColors from './vibrantColors.js';
import rgbToAbgr from './rgbToAbgr.js';
import uuid from './uuid.js';
import pSBC from './pSBC.js';
import spliceStr from './spliceStr.js';

export {
  // Date utils
  currentDaySegment,
  formatDate,
  formatUtcDate,
  daysAfterDate,
  daysAgoDate,
  randDate,
  // Other utils
  ajaxRequest,
  binarySearch,
  checkMobileBrowser,
  compressImage,
  extractNestedValue,
  emailValid,
  formatMoney,
  formatNumberWithCommas,
  formatUsPhoneNumber,
  generatePassword,
  hexColorIsLight,
  imgUrlToBase64,
  insertionSort,
  mergeSort,
  parseRailsErrors,
  parseUrlParams,
  percentage,
  similarityOfStrings,
  formatMoneyCondensed,
  truncateStringPreservingWords,
  vibrantColors,
  rgbToAbgr,
  uuid,
  pSBC,
  spliceStr
}

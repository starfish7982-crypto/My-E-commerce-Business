(self.miniJsonp=self.miniJsonp||[]).push([[1493],{96296:function(e,t,n){var r,o,i;e.exports=(r=n(14906),o=n(58518),i=n(69483),function(){"use strict";var e={95:function(e,t,n){n.d(t,{D:function(){return u},t:function(){return s}});var r=n(661),o=n.n(r),i=n(480),a=!1,c=function(e,t){a=!0;var n=t||(0,i.CE)();o().init({lng:n,fallbackLng:n,defaultNS:"common",keySeparator:!1,debug:!1,resources:e&&e.resources||{},interpolation:{prefix:"{",suffix:"}",escapeValue:!1},react:{wait:!1,bindI18n:"languageChanged loaded",bindStore:"added removed",nsMode:"default"}})},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common";a||c({resources:{}},e),o().changeLanguage(e),o().addResourceBundle(e,n,t,!0,!0)},s=o().t.bind(o())},480:function(e,t,n){n.d(t,{$S:function(){return C},CE:function(){return x},E3:function(){return P},H9:function(){return E},IE:function(){return L},JS:function(){return d},Jy:function(){return N},L6:function(){return Y},NJ:function(){return m},S1:function(){return u},Tb:function(){return A},Vm:function(){return M},X7:function(){return w},Y8:function(){return v},YH:function(){return b},Yc:function(){return f},dV:function(){return G},ef:function(){return S},jz:function(){return F},pM:function(){return T},qk:function(){return h},u7:function(){return y},xC:function(){return D},z$:function(){return p}});var r,o,i,a,c={sg:"en",ph:"en",tw:"zh-Hant",my:"ms-MY",th:"th-TH",vn:"vi-VN",id:"id-ID",br:"pt-BR",in:"hi",cn:"zh-CN",mx:"es-MX",co:"es-CO",cl:"es-CL",ar:"es-AR",pl:"pl",es:"es-ES",fr:"fr",us:"en",kr:"en"},u=function(e,t,n){r=e.toLowerCase(),o="liveish"===t?"live-test":"stable"===t?"test-stable":t,i=n,a=c[r]||"en"},s=["my","br","mx","co","ar"],_=["id","th"],l=["us"],f=function(e){return s.includes(e)?"com.".concat(e):_.includes(e)?"co.".concat(e):l.includes(e)?"com":e},E=function(e){return"tw"===e?"xiapi":e.toLowerCase()},d=function(e){return f(e)},S=function(){return"live"===o?"":"".concat(o,".")},T=function(){return"live"===o?"shopee":"".concat(o,".shopee")},p=function(){return"cn"===r},v=function(){return"kr"===r};function g(){return m()&&!p()}function m(){var e=window.location.hostname;return e&&e.includes("cn")}var O=function(e,t){return"seller"===e?"vn"!==t||g()?"seller":"banhang":e},R=function(e,t){var n,i=t?t.toLowerCase():r;return g()?function(e,t){var n=t?t.toLowerCase():r;return"".concat(O(e,n),".").concat(E(n),".").concat(T(),".").concat("cn")}(e,i):"".concat(O(e,i),".").concat((n=window.location.hostname,n&&n.includes("shopeebrasil")?"live"===o?"shopeebrasil":"".concat(o,".shopeebrasil"):T()),".").concat(d(i))},h=function(e){return R("seller",e)},C=function(e){var t=e?e.toLowerCase():r;return"seller-service.cs.".concat(T(),".").concat(d(t))},M=function(){return"".concat(h(),"/webchat/api")},P=function(){return"".concat(h(),"/api")},y=function(e){var t=e?e.toLowerCase():r;return"cn"!==t&&"kr"!==t||(t="my"),m()?"".concat(E(t),".").concat(S()).concat("xiapibuy.com"):"".concat(T(),".").concat(d(t))},A=function(){var e=r;return"cn"!==e&&"kr"!==e||(e="my"),"".concat(T(),".").concat(d(e))},I=["sg","my","th","ph","vn","id","tw","br"],N=function(e){var t=e?e.toLowerCase():r;if(p())return"https://s-cf-sg.shopeesz.com/file/";if(v())return"https://cf.shopee.sg/file/";var n=I.includes(t);return g()&&n?"https://s-cf-".concat(t,".shopeesz.com/file/"):"https://cf.shopee.".concat(f(t),"/file/")},G=function(e){var t=e?e.toLowerCase():r;return"tw"===t&&m()?"https://cvf.shopee.cn/file/":"https://cvf.shopee.".concat(f(t),"/file/")},D=function(){return"https://".concat(R("seller"),"/webchat/conversations")},b=function(){return"https://".concat(R("seller"),"/webchat")},L=function(){return o},w=function(){return r},Y=function(){return i},x=function(){return a},F=function(){return m()?"https://deo.shopeesz.com/shopee/":"https://deo.shopeemobile.com/shopee/"}},602:function(e){e.exports=r},661:function(e){e.exports=o},349:function(e){e.exports=i}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){n.r(a),n.d(a,{AccountType:function(){return K},AlertType:function(){return Z},ChatbotFromType:function(){return b},ChatbotPauseEntranceTypes:function(){return v},ChatbotServeToggle:function(){return Q},ChatbotToggle:function(){return L},ConversationListTab:function(){return w},ConversationSource:function(){return q},ConversationTypeEnum:function(){return C},CustomShareEvent:function(){return ce},DataFetchStatus:function(){return P},LS:function(){return it},LogisticsCardLabel:function(){return l},LogisticsEntranceTypes:function(){return S},LogisticsMessageTypes:function(){return ln},MAX_MEDIA_NUM:function(){return i},MAX_Z_INDEX:function(){return se},MINI_MIN_TEXT_BOX_HEIGHT:function(){return E},MessageErrorCode:function(){return o},MessageOption:function(){return e},MessageSendStatus:function(){return r},MessageShortcutGroupType:function(){return c},MessageSource:function(){return W},MessageTypes:function(){return t},OfferStatus:function(){return N},OperationStatus:function(){return y},OrderDeliveryStatus:function(){return f},OrderDeliveryStatusKeyMap:function(){return d},QueueStatusEntranceType:function(){return p},RREntranceType:function(){return T},ReturnCardStatus:function(){return u},ReturnSolution:function(){return s},SellerUnreadStatus:function(){return B},ServeTodayFolders:function(){return H},ServeTodayTab:function(){return k},ShareDataType:function(){return ue},SlaType:function(){return _},SocketConnectionStatus:function(){return G},SocketToAlertType:function(){return ee},StartChatErrorCode:function(){return $},StorageKey:function(){return ae},SubAccountRole:function(){return z},SwitchStatus:function(){return A},TrackerOperation:function(){return J},TranslationStatus:function(){return I},UnreadSource:function(){return X},capitalizeFirstLetter:function(){return Qe},changeLanguage:function(){return xn.D},checkAIBannerGuide:function(){return tt},checkEmptyObject:function(){return _e},checkMiniUnrepliedGuide:function(){return nt},cnDomainHash:function(){return Pn.H9},compareSameDayOfTimestamp:function(){return Pe},countUnreadMessage:function(){return Mn},customizeTime:function(){return Re},debounce:function(){return ze},defaultLocalInMall:function(){return oe},detectTextAndTimestamp:function(){return wn},domainHash:function(){return Pn.Yc},domainPrefix:function(){return Pn.pM},domainSuffix:function(){return Pn.JS},envPrefix:function(){return Pn.ef},escapeRegex:function(){return An},fillMessagePreview:function(){return mn},formatMessageTime:function(){return Me},formatTransifyKeyWithNumber:function(){return xe},getApiServer:function(){return Pn.Vm},getCDNUrl:function(){return Pn.jz},getChatBotParams:function(){return pn},getCrmPreviewParams:function(){return vn},getCurrentTimestampString:function(){return In},getCustomMessageText:function(){return an},getFileServer:function(){return Pn.Jy},getFormattedTime:function(){return Ce},getHasSameSourceAndTarget:function(){return Tn},getItem:function(){return at},getLocaleText:function(){return Sn},getLogisticsCardTitle:function(){return Rn},getLogisticsIssueCardTitle:function(){return hn},getMallUrl:function(){return Pn.u7},getMallUrlIgnoreCn:function(){return Pn.Tb},getMessageIsSend:function(){return yn},getRRMessageTitle:function(){return On},getRowHeight:function(){return U},getRuntimeLocale:function(){return Pn.CE},getRuntimeRegion:function(){return Pn.X7},getRuntimeServer:function(){return Pn.IE},getRuntimeVersion:function(){return Pn.L6},getSCApiServer:function(){return Pn.E3},getSellerCenterUrl:function(){return Pn.qk},getSellerServiceUrl:function(){return Pn.$S},getServiceLocale:function(){return Xe},getSystemMessageByLocale:function(){return gn},getTranslatedText:function(){return Yn},getTranslationLocale:function(){return qe},getUrlParam:function(){return Fe},getVideoServer:function(){return Pn.dV},getWebChatPureUrl:function(){return Pn.YH},getWebChatUrl:function(){return Pn.xC},greaterThan:function(){return fe},handleDisplayTranslation:function(){return Nn},hasTargetMessageOption:function(){return En},init:function(){return Pn.S1},isConversationRead:function(){return j},isConversationUnread:function(){return V},isDeletedMessage:function(){return dn},isFromChatbotSession:function(){return Cn},isVisitingCNSC:function(){return Pn.z$},isVisitingCn:function(){return Pn.NJ},isVisitingKRSC:function(){return Pn.Y8},localeInMallToTspLocale:function(){return ie},newFormatMessageTime:function(){return Ae},persistLimit:function(){return st},previewMessage:function(){return fn},removeItem:function(){return ut},setItem:function(){return ct},simpleEqualCheck:function(){return le},throttle:function(){return Ke},unifyLocale:function(){return je},updateTimeLocale:function(){return pe}});var e,t={MSG_TYPE_TEXT:"text",MSG_TYPE_IMAGE:"image",MSG_TYPE_OFFER:"offer",MSG_TYPE_PRODUCT:"product",MSG_TYPE_ORDER:"order",MSG_TYPE_STICKER:"sticker",MSG_TYPE_NOTIFICATION:"notification",MSG_TYPE_VOUCHER:"voucher",MSG_TYPE_ITEM_LIST:"item_list",MSG_TYPE_SHOPPING_CART:"shopping_cart",MSG_TYPE_FAQ:"faq",MSG_TYPE_FAQ_QUESTION:"faq_question",MSG_TYPE_FAQ_FEEDBACK:"faq_feedback",MSG_TYPE_FAQ_LIVEAGENT:"faq_liveagent",MSG_TYPE_FAQ_UNSUPPORTED:"faq_unsupported",MSG_TYPE_FAQ_FEEDBACK_PROMPT:"faq_feedback_prompt",MSG_TYPE_FAQ_LIVEAGENT_PROMPT:"faq_liveagent_prompt",MSG_TYPE_UNTATED_ORDER_REMINDER:"unrated_order_reminder",MSG_TYPE_FLASH_SALE:"flash_sale",MSG_TYPE_BUNDLE_DEAL:"bundle_deal",MSG_TYPE_BUNDLE_MESSAGE:"bundle_message",MSG_TYPE_OPTION_PACK:"option_pack",MSG_TYPE_SELECTED_OPTION:"selected_option",MSG_TYPE_ADD_ON_DEAL:"add_on_deal",MSG_TYPE_VIDEO:"video",MSG_TYPE_IMAGE_WITH_TEXT:"image_with_text",MSG_TYPE_RATE_CARD:"rating_card",MSG_TYPE_NEW_FAQ:"new_faq",MSG_TYPE_FAQ_CATEGORY_CHOICE:"faq_category_choice",MSG_TYPE_FAQ_QUESTION_LIST:"faq_question_list",MSG_TYPE_FAQ_TYPE_CHOICE:"faq_type_choice",MSG_TYPE_FAQ_CATEGORY_LIST:"faq_category_list",MSG_TYPE_FAQ_TYPE_BOT_REQUEST_TEXT_MESSAGE:"faq_bot_request_text",MSG_TYPE_FAQ_TYPE_BOT_REQUEST_ORDER_MESSAGE:"faq_bot_request_order",FAQ_TYPE_BOT_RESPONSE_MESSAGE:"faq_bot_response",MSG_TYPE_SECURITY_TIPS:"security_tips",MSG_TYPE_CRM_ITEM_LIST:"crm_item_list",MSG_TYPE_RR:"return_refund_card",MSG_TYPE_CRM_ORDER_RATE:"crm_order_rate",MSG_TYPE_LOGISTICS_CARD:"logistics_card",MSG_TYPE_LOGISTICS_ISSUE_ENQUIRY_CARD:"logistics_issue_enquiry_card",MSG_TYPE_EXPEDITED_LOGISTICS_CARD:"expedited_logistics_card",MSG_TYPE_LATE_DELIVERY_COMPENSATION_VOUCHER:"late_delivery_compensation_voucher",MSG_TYPE_LOADING:"loading",MSG_TYPE_CUSTOMER_SERVICE_ENTRANCE:"customer_service_entrance"},r={SENDING:1,FAILED:2,SUCCEED:3},o={FORBIDDEN:28,LIMITING:29,CUSTOM_ERROR:42,BLACKLIST:43,CANCEL_ORDER:44,UNVERIFIED_PHONE_NUMBER:45,EXCEED_DAILY_LIMIT:26,UNTRUSTED_NETWORK:46,NEED_CAPTCHA:47,DFP_ERROR:48,SPAMMER:49,FAQ_EXPIRED:50,FAQ_SESSION_OLD:51,NEED_CAPTCHA_VERIFY:52,FROM_USER_FROZEN:53,TO_USER_FROZEN:54,FAQ_PAUSED:55,DEFAULT:-1},i=9,c={ALL:-1,PERSONAL:1,TEAM:2};!function(e){e[e.MSG_OPT_NORMAL=0]="MSG_OPT_NORMAL",e[e.MSG_OPT_AUTO_REPLY=1]="MSG_OPT_AUTO_REPLY",e[e.MSG_OPT_BLOCKED=2]="MSG_OPT_BLOCKED",e[e.MSG_OPT_CENSORED_BLACKLIST=16]="MSG_OPT_CENSORED_BLACKLIST",e[e.MSG_OPT_CENSORED_WHITELIST=32]="MSG_OPT_CENSORED_WHITELIST",e[e.MSG_OPT_IGNORE_UNREAD_FOR_RECEIVER=64]="MSG_OPT_IGNORE_UNREAD_FOR_RECEIVER",e[e.MSG_OPT_IGNORE_UNREAD_FOR_SENDER=128]="MSG_OPT_IGNORE_UNREAD_FOR_SENDER",e[e.MSG_OPT_INVISIBLE_FOR_RECEIVER=256]="MSG_OPT_INVISIBLE_FOR_RECEIVER",e[e.MSG_OPT_INVISIBLE_FOR_SENDER=512]="MSG_OPT_INVISIBLE_FOR_SENDER",e[e.MSG_OPT_ADS=1024]="MSG_OPT_ADS",e[e.MSG_OPT_FAQ_SESSION=2048]="MSG_OPT_FAQ_SESSION",e[e.MSG_OPT_TRIGGER_FAQ=4096]="MSG_OPT_TRIGGER_FAQ",e[e.MSG_OPT_SOCIAL_MESSAGE=8192]="MSG_OPT_SOCIAL_MESSAGE",e[e.MSG_OPT_OFFWORK_AUTOREPLY=16384]="MSG_OPT_OFFWORK_AUTOREPLY",e[e.MSG_OPT_CANCELORDER_WARNING_SENT=32768]="MSG_OPT_CANCELORDER_WARNING_SENT",e[e.MSG_OPT_CANCELORDER_WARNING_RETRACT=65536]="MSG_OPT_CANCELORDER_WARNING_RETRACT",e[e.MSG_OPT_CANCELORDER_WARNING_NOT_SEND=66496]="MSG_OPT_CANCELORDER_WARNING_NOT_SEND",e[e.MSG_OPT_CHATBOT_SESSION=131072]="MSG_OPT_CHATBOT_SESSION",e[e.MSG_OPT_TRIGGER_CHATBOT=262144]="MSG_OPT_TRIGGER_CHATBOT",e[e.MSG_OPT_PRIVATE_MESSAGE=524288]="MSG_OPT_PRIVATE_MESSAGE",e[e.MSG_OPT_SILENT_FOR_SENDER=1048576]="MSG_OPT_SILENT_FOR_SENDER",e[e.MSG_OPT_DELETE=2097152]="MSG_OPT_DELETE",e[e.MSG_OPT_RECALL=8388608]="MSG_OPT_RECALL"}(e||(e={}));var u,s,_,l,f,E=88;!function(e){e[e.Submit=1]="Submit",e[e.Refund=2]="Refund",e[e.Reject=3]="Reject"}(u||(u={})),function(e){e[e.ReturnAndRefund=0]="ReturnAndRefund",e[e.Return=1]="Return"}(s||(s={})),function(e){e[e.day=1]="day",e[e.hour=2]="hour"}(_||(_={})),function(e){e[e.Inquiry=1]="Inquiry",e[e.Expedite=2]="Expedite"}(l||(l={})),function(e){e[e.Normal=0]="Normal",e[e.Stuck=1]="Stuck",e[e.AfterEstimated=2]="AfterEstimated",e[e.AfterGuarantee=3]="AfterGuarantee"}(f||(f={}));var d={Normal:"normal",Stuck:"stuck",AfterEstimated:"exceed",AfterGuarantee:"latest"},S=["inquiry_logistics_switch_order","expedite_delivery_switch_order","inquiry_logistics","expedite_delivery"],T="rr_entrance",p="choice_queue_status",v=["noti_type_seller_send_message_in_chatbot","noti_type_seller_pause_chatbot"];function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function m(e){var t=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===g(t)?t:String(t)}function O(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C,M={NORMAL:"normal",PENDING:"pending",SUCCEED:"succeed",FAILED:"failed"},P=h(h({},M),{},{INIT_PENDING:"pendingInit",INIT_FAILED:"failedInit",TEMPORY_ERROR:"temporyError"}),y=h(h({},M),{},{BLACKLIST_ERROR:"blacklistError",INTERNAL_SERVER_ERROR:"internalServerError"}),A={ENABLED:"enabled",DISABLED:"disabled",NO_PERSSION:"no_permission"},I={SUCCEED:"succeed",FAILED:"failed",HISTORY:"history",SHOW:"show",PENDING:"pending"},N={PENDING:"pending",ACCEPTED:"accepted",REJECTED:"rejected",CANCELLED:"cancelled"},G={CONNECT:"connect",CONNECT_ERROR:"connect_error",DISCONNECT:"disconnect",RECONNECT_ATTEMPT:"reconnect_attempt",RECONNECT_ERROR:"reconnect_error",RECONNECTING:"reconnecting",RECONNECT:"reconnect"},D={conversationCellForBCSubAccount:94,conversationCell:72,shopCardCell:212,shopListCell:72,voucherCell:146,conversationShopListCell:60,dropdownShopListCell:44,contactCell:48};!function(e){e[e.Normal=0]="Normal",e[e.Agent=1]="Agent"}(C||(C={}));var b,L,w={TODAY:"today",ALL:"all"},Y=D,x=Y.conversationCellForBCSubAccount,F=Y.conversationCell,U=function(e){return e?x:F},k={PINNED:"pinned",UNREPLIED:"unreplied",AUTOREPLY:"auto_replied",MANUALREPLY:"manually_replied"},H=[k.PINNED,k.UNREPLIED,k.AUTOREPLY,k.MANUALREPLY],B={SHOW:1,HIDE:2},Q={PAUSE:"paused",RESUME:"show_resume",SHOWPAUSE:"show_paused"},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.unread_count,n=void 0===t?0:t,r=e.seller_unread_status;return"number"==typeof n&&n>0||r===B.SHOW},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===e.unread_count&&e.seller_unread_status!==B.SHOW},q={SYNC:4},W={SEND:7},X={PRELOAD:1},z={MAIN_SUBACCOUNT:"main_subaccount",ADMIN_SUBACCOUNT:"admin_subaccount",NORMAL_SUBACCOUNT:"normal_subaccount"},K={SELLER:"seller",SUBACCOUNT:"subaccount"},J={CLICK:"click",IMPRESSION:"impression",ACTION_DRAG_VIDEO:"action_drag_video",DELETE_PREVIEW_MEDIA:"delete_preview_media",CLOSE_PREVIEW_MEDIA:"close_preview_media",VIEW:"view",ACTION_SELECT:"action_select",ACTION_SEARCH:"action_search",ACTION_HOVER:"action_hover",ACTION_TOGGLE_ON_SUCCESS:"action_toggle_on_success",ACTION_TOGGLE_OFF_SUCCESS:"action_toggle_off_success"};!function(e){e.LandingPage="SIPDirectChatFromChatLandingPage",e.ProductPage="SIPProductPage",e.OrderPage="SIPOrderPageFromBuyer",e.ShopPage="SIPShopPage"}(b||(b={})),function(e){e[e.Disable=0]="Disable",e[e.AutoToggle=1]="AutoToggle",e[e.Opt=2]="Opt"}(L||(L={}));var $,Z={error:"error",success:"success",normal:"normal",warn:"warn",info:"info"},ee={pending:Z.warn,error:Z.error,resolved:Z.success};!function(e){e[e.Login=0]="Login",e[e.Redirection=1]="Redirection",e[e.Messages=2]="Messages",e[e.Conversations=3]="Conversations"}($||($={}));var te,ne,re,oe={sg:"en",ph:"en",tw:"zhHant",id:"id",th:"th",vn:"vi",my:"en",br:"pt-BR",mx:"es-MX",cl:"es-CL",pl:"pl",co:"es-CO"},ie={en:"en",zhHans:"zh-Hans","ms-my":"ms-MY",zhHant:"zh-Hant",id:"id",th:"th",vi:"vi","pt-BR":"pt-BR","es-MX":"es-MX","es-CL":"es-CL","es-CO":"es-CO","es-AR":"es-AR",pl:"pl",fr:"fr","es-ES":"es-ES",fil:"fil"},ae={USERID:"__chat_userid__",LAST_ACTIVE:"last-active-time",MINI_ALERT:"mini-should-show-alert",MINI_TEXT_BOX_HEIGHT:"mini-text-box-height"},ce={ACK:"ack",TAB_FOCUSED:"tabFocused",CALC_CONNECTIONS:"calcConnections",CLOSE_CONNECTION:"closeConnection",SHARE_API_DATA:"shareApiData"},ue={UNREAD:"unread",UPDATE_SETTING:"updateSetting"},se=199999,_e=function(e){return!e||0===Object.keys(e).length},le=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},fe=function(e,t){if(!e)return!1;if(!t)return!0;var n=(e+="").length,r=(t+="").length;if(n!==r)return n>r;var o=e.split(""),i=null;return o.forEach((function(e,n){"boolean"!=typeof i&&(i=parseInt(e)>parseInt(t[n])||parseInt(e)===parseInt(t[n])&&null)})),!!i},Ee=n(602),de=n.n(Ee),Se=n(95).t,Te=new(de()),pe=function(e){return Te.locale.set(e)},ve=function(e){return e.format("hh:mm")};!function(e){e.Today="today",e.Yesterday="yesterday"}(te||(te={})),function(e){e[e.Time=0]="Time"}(ne||(ne={})),function(e){e[e.sunday=0]="sunday",e[e.monday=1]="monday",e[e.tuesday=2]="tuesday",e[e.wednesday=3]="wednesday",e[e.thursday=4]="thursday",e[e.friday=5]="friday",e[e.saturday=6]="saturday"}(re||(re={}));var ge,me=function(e){var t=e.value,n=e.date,r=e.suffix,o=e.prefix,i="",a="";if(o&&(i=Se("conversation_detail.message_list.".concat(o.type))+(void 0===o.separator?"  ":o.separator)),r){var c=r.type===ne.Time?ve(n):"";a=(void 0===r.separator?", ":r.separator)+c}return i+t+a};!function(e){e[e.Yesterday=0]="Yesterday",e[e.Today=1]="Today",e[e.ThisMonth=2]="ThisMonth",e[e.ThisYear=3]="ThisYear",e[e.ThisWeek=4]="ThisWeek",e[e.NONE=5]="NONE"}(ge||(ge={}));var Oe=864e5,Re=function(e,t){var n=t||{},r=n.noTodayFlag,o=n.noTimeFlag,i=n.needFullFormat,a=n.onlyKeepDate,c=n.isConvPreview,u=Te.create(e);if(i)return me({value:u.format("LHD"),date:u,suffix:{type:ne.Time}});if(a)return u.format("LHD");var s=["tw","cn"].includes(Te.locale.current),_=function(e,t){var n=new Date,r=new Date(e);if(t){var o=n-r,i=(new Date).setHours(0,0,0,0);if(o<=6048e5&&o>=Oe+(n.getTime()-i))return ge.ThisWeek}if(n.getFullYear()===r.getFullYear()){if(n.getMonth()===r.getMonth()){var a=n.getDate(),c=r.getDate();return a===c?ge.Today:a-1===c?ge.Yesterday:ge.ThisMonth}return ge.ThisYear}return ge.NONE}(e,c);switch(_){case ge.Today:var l=r?void 0:{type:te.Today},f={type:ne.Time,separator:""};return me({value:"",date:u,prefix:l,suffix:f});case ge.Yesterday:var E={type:te.Yesterday},d=o?void 0:{type:ne.Time,separator:""};return me({value:"",date:u,prefix:E,suffix:d});case ge.ThisWeek:return Se("common.".concat(re[new Date(e).getDay()]));case ge.ThisMonth:case ge.ThisYear:var S=o?void 0:{type:ne.Time};return me({value:u.format(c?s?"MM/DD":"DD/MM":"LHDS"),date:u,suffix:S});default:var T=o?void 0:{type:ne.Time};return me({value:u.format(c?s?"YY/MM/DD":"DD/MM/YY":"LHD"),date:u,suffix:T})}},he="YYYY-MM-DD hh:mm",Ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Te.create(e).format(t||he)},Me=function(e){var t=e.created_at,n=e.created_timestamp;return Re(t||1e3*n,{noTodayFlag:!0,noTimeFlag:!0,isConvPreview:!0})},Pe=function(e,t){return Te.create(e).format("LHD")===Te.create(t).format("LHD")},ye={0:"sunday",1:"monday",2:"tuesday",3:"wednesday",4:"thursday",5:"friday",6:"saturday"},Ae=function(e,t){var n=1e3*e;switch(t){case"time":var r=Te.create(n);return ve(r);case"date":var o=new Date,i=new Date(n);if(o.getFullYear()===i.getFullYear()){if(o.getMonth()===i.getMonth()){var a=o.getDate(),c=i.getDate();if(a===c)return Se("conversation_detail.message_list.today");if(a-1===c)return Se("conversation_detail.message_list.yesterday");if(a-c<7){var u=i.getDay();return Se("common.".concat(ye[u]))}return Te.create(n).format("LHDS")}return Te.create(n).format("LHDS")}return Te.create(n).format("LHD")}},Ie=n(661),Ne=n.n(Ie),Ge=function(e){return 0===e||1===e?"one":e>=1e6?"many":"other"},De=function(e){return 1===e?"one":Number.isInteger(e)?[2,3,4].includes(e%10)&&![12,13,14].includes(e%100)?"few":![2,3,4].includes(e%10)||[12,13,14].includes(e%100)?"many":"other":"other"},be=function(e){return e<=1?"one":"other"},Le={fr:Ge,pl:De,default:be},we={fr:function(e,t){return"".concat(Ge(e),".").concat(Ge(t))},pl:function(e,t){return"".concat(De(e),".").concat(De(t))},default:function(e,t){return"".concat(be(e),"_").concat(be(t))}},Ye=["fr","pl"],xe=function(e,t,n){var r=Ne().language||"en",o=Ye.includes(r)?r:"default";return void 0!==n?"".concat(e,"_").concat(we[o](t,n)):"".concat(e,"_").concat(Le[o](t))},Fe=function(e,t){var n=t||window.location.search,r=null;if(n){var o=n.indexOf("?")+1,i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)");r=n.substr(o).match(i)}return r?unescape(r[2]):null};function Ue(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var He=["hans","hant"],Be=["en","zh-hans","zh-hant","ms-my","th-th","vi-vn","id-id","zh-cn","pt-br","hi","es-mx","es-co","es-cl","es-es","es-ar","pl","fr","fil"],Qe=function(e){return"".concat(e[0].toUpperCase()).concat(e.substring(1))},Ve=function(e){if(e.includes("-")){var t=e.split("-");return He.includes(t[1])?"".concat(t[0],"-").concat(Qe(t[1])):"".concat(t[0],"-").concat(t[1].toUpperCase())}return e},je=function(e){var t,n=(e||"en").toLowerCase(),r="en",o=Ue(Be);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(i.includes(n)){r=Ve(i);break}}}catch(e){o.e(e)}finally{o.f()}return r},qe=function(e){var t=je(e);switch(t){case"th-TH":return"th";case"vi-VN":return"vi";case"id-ID":return"id";default:return t}},We={en:"default","ms-MY":"ms-my","th-TH":"th",th:"th","zh-Hans":"tw","zh-Hant":"tw","vi-VN":"vn",vi:"vn","id-ID":"id",id:"id","zh-CN":"cn","pt-BR":"pt-br",hi:"hi","es-MX":"es-mx","es-CO":"es-co","es-CL":"es-cl",pl:"pl","es-ES":"es-es",fr:"fr","es-AR":"es-ar",fil:"fil"},Xe=function(e){var t=je(e);return We[t]||"default"},ze=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,o=Date.now();return function(){for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];t&&(clearTimeout(t),t=null),Date.now()-o>r?(e.apply(void 0,a),o=Date.now()):t=window.setTimeout((function(){e.apply(void 0,a),o=Date.now()}),n)}},Ke=function(e,t){var n,r,o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=null,c=0,u=function(){c=!1===i.leading?0:(new Date).getTime(),a=null,o=e.apply(n,r),a||(n=r=null)},s=function(){var s=(new Date).getTime();c||!1!==i.leading||(c=s);var _=t-(s-c);n=this;for(var l=arguments.length,f=new Array(l),E=0;E<l;E++)f[E]=arguments[E];return r=f,_<=0||_>t?(a&&(clearTimeout(a),a=null),c=s,o=e.apply(n,r),a||(n=r=null)):a||!1===i.trailing||(a=window.setTimeout(u,_)),o};return s},Je="AI-Banner",$e="MiniChat-Unreplied-Filter",Ze="modal",et=function(e,t){var n=t.superType,r=t.secondaryType,o=e.find((function(e){return e.name===n}));if(o){var i=o.children;if(i.length){var a=i.find((function(e){return e.name===r}));return a||!1}return!1}return!1},tt=function(e){return et(e,{superType:Je,secondaryType:Ze})},nt=function(e){return et(e,{superType:$e,secondaryType:Ze})},rt=n(349),ot=n.n(rt),it={getItem:function(e,t){try{var n=window.localStorage.getItem(e);return null==n?n:t?JSON.parse(n):n}catch(e){console.warn("*** LocalStorage Error: Can not get LocalStorage *** \n".concat(e))}},setItem:function(e,t,n){try{var r=n?JSON.stringify(t):t;window.localStorage.setItem(e,r)}catch(e){console.warn("*** LocalStorage Error: Can not set LocalStorage *** \n".concat(e))}},removeItem:function(e){try{window.localStorage.removeItem(e)}catch(e){console.warn("*** LocalStorage Error: Can not remove LocalStorage *** \n".concat(e))}}},at=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?it.getItem(e):ot().getItem(e)},ct=function(e,t){return ot().setItem(e,t)},ut=function(e,t){return t?it.removeItem(e):ot().removeItem(e)},st=ot().supports(ot().INDEXEDDB)||ot().supports(ot().WEBSQL)?1e3:100;function _t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lt(e){return function(e){if(Array.isArray(e))return _t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _t(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_t(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ft,Et=n(95).t;function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function St(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?dt(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Tt=t.MSG_TYPE_TEXT,pt=t.MSG_TYPE_IMAGE,vt=t.MSG_TYPE_OFFER,gt=t.MSG_TYPE_PRODUCT,mt=t.MSG_TYPE_ORDER,Ot=t.MSG_TYPE_STICKER,Rt=t.MSG_TYPE_NOTIFICATION,ht=t.MSG_TYPE_VOUCHER,Ct=t.MSG_TYPE_ITEM_LIST,Mt=t.MSG_TYPE_FAQ,Pt=t.MSG_TYPE_FAQ_QUESTION,yt=t.MSG_TYPE_FAQ_LIVEAGENT,At=t.MSG_TYPE_FAQ_FEEDBACK,It=t.MSG_TYPE_FAQ_UNSUPPORTED,Nt=t.MSG_TYPE_FAQ_FEEDBACK_PROMPT,Gt=t.MSG_TYPE_FAQ_LIVEAGENT_PROMPT,Dt=t.MSG_TYPE_BUNDLE_MESSAGE,bt=t.MSG_TYPE_OPTION_PACK,Lt=t.MSG_TYPE_SELECTED_OPTION,wt=t.MSG_TYPE_VIDEO,Yt=t.MSG_TYPE_IMAGE_WITH_TEXT,xt=t.MSG_TYPE_RATE_CARD,Ft=t.MSG_TYPE_NEW_FAQ,Ut=t.MSG_TYPE_FAQ_CATEGORY_CHOICE,kt=t.MSG_TYPE_FAQ_QUESTION_LIST,Ht=t.MSG_TYPE_FAQ_TYPE_CHOICE,Bt=t.MSG_TYPE_FAQ_CATEGORY_LIST,Qt=t.MSG_TYPE_FAQ_TYPE_BOT_REQUEST_TEXT_MESSAGE,Vt=t.MSG_TYPE_FAQ_TYPE_BOT_REQUEST_ORDER_MESSAGE,jt=t.FAQ_TYPE_BOT_RESPONSE_MESSAGE,qt=t.MSG_TYPE_SHOPPING_CART,Wt=t.MSG_TYPE_CRM_ITEM_LIST,Xt=t.MSG_TYPE_RR,zt=t.MSG_TYPE_CRM_ORDER_RATE,Kt=t.MSG_TYPE_LOGISTICS_CARD,Jt=t.MSG_TYPE_LOGISTICS_ISSUE_ENQUIRY_CARD,$t=t.MSG_TYPE_EXPEDITED_LOGISTICS_CARD,Zt=t.MSG_TYPE_LATE_DELIVERY_COMPENSATION_VOUCHER,en=t.MSG_TYPE_CUSTOMER_SERVICE_ENTRANCE,tn=N.PENDING,nn=N.REJECTED,rn="common.unsupported_message",on=(O(ft={},yt,"faq.live_agent"),O(ft,It,"faq.new_unsupport_input"),O(ft,Nt,"faq.feedback_prompt"),O(ft,Gt,"faq.new_live_agent_prompt"),O(ft,wt,"conversation_detail.input_field.toolbar.video.tip"),O(ft,Yt,"conversation_list.conversation_cell.new_image_message"),ft),an=function(e){return Et(on[e]||rn)},cn=[Ct],un=[wt,It,Nt,Gt,Yt],sn=[pt,Dt,Vt,vt,gt,mt,ht,xt,Ot],_n=[kt,Ht,Bt],ln=[Kt,Jt,$t,Zt],fn=function(t){var n=t.message,r=t.enableTranslation,o=t.locale,i=t.conversationShopId,a=t.currentSellerAccountId;if(!n)return{text:Et(rn)};var c=n.type,u=n.content,s=void 0===u?{}:u,_=n.crm_message_preview,l=void 0===_?{}:_,f=n.message_option,E=n.source,d=n.send_status,v=n.custom_preview_text,g=qe(o);if(l.text)return{text:Yn(l,g)};if(En(f,e.MSG_OPT_CENSORED_BLACKLIST))return{text:Et("common.blacklist.replaced_text")};if(c){var m,O,R=s||{},h=R.text,C=void 0===h?"":h,M=R.title,P=R.opening,y=R.caption,A=R.translation,I=R.product_name,N=R.sticker_name,G=R.chat_product_infos,D=void 0===G?[]:G,b=R.products,L=void 0===b?[]:b,w=R.rr_detail,Y=R.user_id,x=R.enquiry_info,F=void 0===x?{}:x,U=R.common_info,k=void 0===U?{}:U,H=R.bot_data,B=yn(n,{isAgent:!1,shop_id:i}),Q=function(e,t,n,r){var o,i=t||{},a=i.live_agent_text,c=void 0===a?[]:a,u=i.fixed_title,s=i.faq_type_choice_translation;if(un.includes(e))o=c.length?Sn(c,n):an(e);else if(_n.includes(e))o=Sn(e===Ht?s:u,n);else if(ln.includes(e))o=Et("message.logistics_card.preview.prefix");else{var _=sn.includes(e)?"conversation_list.conversation_cell.new_".concat(e,"_message"):cn.includes(e)?"common.tips.recommended".concat(r?"":"_for_you"):"";o=_?"[".concat(Et(_),"]"):Et(rn)}return o}(c,s,o,B);switch(c){case jt:var V=JSON.parse(H)||{},j=V.message,q=(j=void 0===j?{}:j).plain_text,W=void 0===q?"":q,X=V.reply_type;O=1===X||1001===X?W:null!=s&&s.preview_text?null==s?void 0:s.preview_text:Et(rn);break;case Ft:case Mt:O=P||Et("faq.no_set.chat_bot_title");break;case Tt:if(B)O=C;else{var z=Tn(s);O=!r||z||f===e.MSG_OPT_SOCIAL_MESSAGE||["crm","proactive_update"].includes(E)||2===d?C:(null==A?void 0:A.text)||C}break;case yt:case Pt:case At:case Lt:case bt:case Ut:case Qt:O=C||M;break;case wt:O="[".concat(Q,"]");break;case Yt:O="[".concat(Q,"] ").concat(y||M||C);break;case It:case Nt:case Gt:case kt:case Ht:case Bt:O=Q;break;case gt:O="".concat(Q," ").concat(I);break;case Ot:O=N?"[".concat(N,"]"):Q;break;case Ct:var K=D.map((function(e){return e.name})).join("; ");O="".concat(Q," ").concat(K);break;case Rt:var J=gn(s||{},o),$=J.notification_for_sender,Z=J.notification_for_receiver,ee=J.notifications_for_sender_hyperlink,te=J.notifications_for_receiver_hyperlink;if([].concat(lt(S),[T,p]).includes(s.notification_type)){if((O=B?ee:te).includes("<a>")){var ne=O.split("<a>").join("");O=ne.split("</a>").join("")}}else O=B?$:Z;break;case xt:O="".concat(Q," ").concat(Et(B?"conversation_list.preview.rate_card_sender":"rate_card.rate_out_service"));break;case vt:var re=s||{},oe=re.status,ie=re.products_count,ae=re.offer_price;if(oe)if(oe===tn){var ce=Et("conversation_list.preview.offer_pending_".concat(B?"sender":"receiver"));O="".concat(Q," ").concat(ce,": ").concat(ae," x ").concat(ie),B||(m=!0)}else{var ue=oe===nn?"declined":oe;O="".concat(Q," ").concat(Et("conversation_detail.workstation.offer_panel.".concat(ue)))}else O=Q;break;case mt:O="".concat(Q," ").concat(L.map((function(e){return e.title})).join("; "));break;case ht:var se=s||{},_e=se.type,le=se.rule_text,fe=se.discount_text;if(_e){var Ee="[".concat(Et("conversation_detail.workstation.voucher_panel.".concat(_e,"_voucher")),"]");O="".concat(Ee," ").concat(fe,", ").concat(le)}else O=Q;break;case qt:O=Et("message.cart_reminder");break;case Wt:var de,Se,Te,pe=null!==(de=null==s?void 0:s.title)&&void 0!==de?de:{};O=(null===(Se=pe.translated_with_lang)||void 0===Se||null===(Te=Se.find((function(e){return e.language===qe(o)})))||void 0===Te?void 0:Te.text)||pe.text||Et(rn);break;case Xt:var ve=w.solution,ge=w.status,me=On({isBuyer:a===Y,solution:ve,status:ge});O="[".concat(Et("label.return_and_refund"),"]").concat(me);break;case zt:var Oe,Re;O=(null==v||null===(Oe=v.translated_text)||void 0===Oe||null===(Re=Oe.find((function(e){return e.translated_language===qe(o)})))||void 0===Re?void 0:Re.translated_text)||(null==v?void 0:v.text)||Et(rn),O=Yn(v,g)||Et(rn);break;case Kt:case $t:var he=Rn(c,s,k.user_id===a,!0);O="[".concat(Q,"] ").concat(he);break;case Jt:var Ce=hn(F);O="[".concat(Q,"] ").concat(Ce);break;case Zt:O="[".concat(Q,"] ").concat(Et("message.late_delivery_compensation_voucher.title"));break;case en:O=Et("text.customer_service_entrance");break;default:O=Q}return{text:O,isPendingReceivedOffer:m}}return{text:Et(rn)}},En=function(e,t){return(e&t)===t},dn=function(){return En((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).message_option,e.MSG_OPT_DELETE)},Sn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.find((function(e){return qe(t).toLocaleLowerCase().includes(e.lang.toLocaleLowerCase())}))||e.find((function(e){return"en"===e.lang}));return(n||{}).text},Tn=function(e){var t=e||{},n=t.translation,r=t.mid;if(!n)return!0;var o=(void 0===r?{}:r).source_language,i=void 0===o?"":o,a=n||{},c=a.final,u=a.mid,s=a.target_language,_=void 0===s?"":s,l=a.source_language,f=void 0===l?"":l,E=c?c.target_language:_,d=c?c.source_language:f,S=u?u.source_language:i;return S?S===E:d===E&&"unknown"!==d},pn=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.updateMaxGeneralOptionHideTime,r=void 0===n||n,o=t.updateMessageOption,i=void 0===o||o,a=e||{},c=a.created_timestamp,u=a.message_option,s=i?{last_message_option:u}:{};return St(St({},r?{max_general_option_hide_time:c}:{}),s)},vn=function(e){var t=e.crm_message_preview,n=void 0===t?{}:t;return n.text?{crm_message_preview:n}:{crm_message_preview:{}}},gn=function(e,t){var n=e.noti_text_of_all_languages,r=void 0===n?[]:n;if(!r.length)return e;var o=r.find((function(e){return qe(t).toLocaleLowerCase().includes(e.language.toLocaleLowerCase())}));if(o)return o;var i=r.find((function(e){return"en"===e.language}));return i||e},mn=function(e){var t=e.type,n=e.textContent,r=e.content,o={};switch(t){case mt:o={products:(n||{}).products};break;case ht:var i=n||{};o={rule_text:i.rule_text,discount_text:i.discount_text,type:i.type};break;case vt:var a=n||{};o={status:a.status,products_count:a.products_count,offer_price:a.offer_price};break;case gt:o={product_name:r.product_name||(null==n?void 0:n.name)}}return St(St({},e),{},{content:St(St({},r),o)})},On=function(e){var t=e.isBuyer,n=e.status,r=e.solution===s.Return?"return":"return_refund",o=n===u.Submit?"proposed":n===u.Refund?"succeed":"rejected";return Et("rr_message_title.".concat(t?"buyer":"seller",".").concat(r,".").concat(o))},Rn=function(e,n,r,o){var i=n.common_info,a=(i=void 0===i?{}:i).card_label,c=i.order_delivery_status,u=n.logistic_tracking_info,s=(u=void 0===u?{}:u).estimate_delivery_time,_=u.stuck_time,E=n.expedite_delivery_button,S=e===t.MSG_TYPE_EXPEDITED_LOGISTICS_CARD,T=a===l.Inquiry,p=d[f[c]],v="".concat(Ce(1e3*s,"www"),", ").concat(Ce(1e3*s,"LHDS")),g=o?v:"<a>".concat(v,"</a>"),m=Math.floor(_/86400),O="stuck"===p&&0===m,R="";if(S&&r&&!T)R=Et("message.expedited_logistics_card.title.buyer.expedite");else if(r){var h=E||S||c!==f.AfterGuarantee&&c!==f.AfterEstimated&&(c!==f.Stuck||T)?"":".unable_expedite";R=Et("message.".concat(e,".title.buyer.").concat(T?"inquiry":"expedite",".").concat(p).concat(h),{date:g,num:m}),O&&!S&&(R=T?Et("message.logistics_card.title.buyer.inquiry.normal",{date:g}):Et("message.logistics_card.title.buyer.expedite.nostuck".concat(h)))}else R=Et("message.logistics_card.title.seller.".concat(p),{date:g,num:m}),O&&(R="".concat(Et("message.logistics_card.title.seller.normal",{date:g})).concat(Et("message.logistics_card.title.buyer.expedite.nostuck.unable_expedite")));return R},hn=function(e){var t=e||{},n=t.display_sla_type,r=t.display_sla_value,o=t.enquiry_id;if(n===_.day&&r&&o&&"0"!==o){var i="".concat(_[n],"s");return Et("message.issue_enquiry_card.title.".concat(i),{value:r})}return Et("message.issue_enquiry_card.title.unavailable")},Cn=function(t){return(t&e.MSG_OPT_IGNORE_UNREAD_FOR_RECEIVER)===e.MSG_OPT_IGNORE_UNREAD_FOR_RECEIVER},Mn=function(e,t){return!t&&!Cn(e)},Pn=n(480),yn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isAgent,r=t.to_tob_user_id,o=t.shop_id,i=e.from_id,a=e.to_shop_id;return n?i!==r:a!==o},An=function(e){return e.replace(/[.[\]{}()+?*^\\$?]/g,"\\$&")},In=function(){return Math.ceil(Date.now()/1e3).toString()},Nn=function(e,t,n,r){return t?e:e||r&&!!n},Gn=function(e){return"".concat("\n  margin: 0;\n  box-sizing: border-box;\n  padding: 8px 10px 10px;\n  font-size: 14px;\n  line-height: 20px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  position: fixed;\n  left: -1000;\n  right: -1000;\n","max-width: ").concat(e,"px")},Dn=function(e){var t=document.createElement("span");return t.setAttribute("style","\n  font-size: 12px;\n  line-height: 16px;\n  margin-left: 8px\n"),t.innerText=e,t},bn=function(e,t,n){var r=document.createElement("pre"),o=Gn(e);if(r.id="chat-text-pre",r.setAttribute("style",o),r.innerText=t,n){var i=Dn(n);r.appendChild(i)}return r},Ln=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"height";document.body.appendChild(e);var n=e.getBoundingClientRect(),r="height"===t?n.height:n.width;return document.body.removeChild(e),r},wn=function(e,t,n){var r=bn(n,e),o=Dn(t),i=bn(n,e,t),a=Ln(r);return{conflict:a!==Ln(i),multiLine:a>38,timeWidth:Ln(o,"width"),widthConflict:Ln(i,"width")>Ln(r,"width")}},Yn=function(e,t){var n,r,o,i;return(null==e||null===(n=e.translated_with_lang)||void 0===n||null===(r=n.find((function(e){return e.language===t})))||void 0===r?void 0:r.text)||(null==e||null===(o=e.translated_text)||void 0===o||null===(i=o.find((function(e){return e.translated_language===t})))||void 0===i?void 0:i.translated_text)||(null==e?void 0:e.text)||""},xn=n(95)}(),a}())},29494:function(e,t,n){"use strict";e.exports=n(96296)}}]);
/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  };
  userLogin: () => void;
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}
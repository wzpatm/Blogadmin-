import {axiosFind} from '@/API/request';
import axios from 'axios'

let CommonFunction = {
  install: function (app) {
    /**
   * 获取当前时间
   * @returns {string:2021/11/18 16:45:39}
   */
    app.config.globalProperties.$getNewTime = () => {
      let dateObject = new Date();
      let year = dateObject.getFullYear(),
        month = dateObject.getMonth() + 1,
        day = dateObject.getDate(),
        hour = dateObject.getHours(),
        min = dateObject.getMinutes(),
        second = dateObject.getSeconds(),
        result = '';
      if (month < 10) month = '0' + month;
      if (day < 10) day = '0' + day;
      if (hour < 10) hour = '0' + hour;
      if (min < 10) min = '0' + min;
      if (second < 10) second = '0' + second;
      result = '' + year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + second;
      return result
    };
    /**
     * 对axios的一些逻辑进行封装
     * 
     */
    app.config.globalProperties.$FindAxios = function (Para) {
      axiosFind({
        url: Para.url,
        method: Para.method,
        params: Para.params,//适用于get请求 它会将参数自动放在url后面   当然也可以用于post 但是只能传递简单数据
        data: Para.data     //适用于Post请求                    
      }).then((response) => {
        console.log(response);
        if (response.code = "200") {
          Para['success'](response.data) //success成功函数的回调
        } else {

        }
      }).catch((err) => {
        if (err.response) {//请求超时时，前端会终止http请求。故请求是没有响应值的，error.response为空
          if (err.response.status == "500") {
            console.log('网络异常，请检查网络');
          } else if (err.response.status == "404") {
            console.log('访问的接口不存在');
          } else {
            console.log(err.response.statusText);
          }
        } else if (err.request && error.request.readyState == 4 && error.status == 0) {
          console.log('接口访问超时');
        } else {
          console.log(err.message);
        }
      })
    }
    /**
     *  获取城市名称且设置cookie值  cookie的值为城市名称   如果有cookie 则获取cookie的值并将它传入到fun中
     *@param func :函数 func函数的参数为城市名称
     */
    app.config.globalProperties.$GetLocationCity = function (func) {
      let that = this,
      locationCookie = that.$getSQCookie('xiaowangBlogLocation');//
      if(locationCookie){
        func(locationCookie);
      }else {
        axios({
          url: 'https://restapi.amap.com/v3/ip',
          method: 'post',
          params: {
            key: '53566dbfa95aa627fbc91ebb6f0dc876'
          },
        }).then(function (resp) {
          func(resp.data.city);//
          that.$setSQCookie('xiaowangBlogLocation',resp.data.city,24*7); // 相隔一周同一浏览器再次访问时会重新定位
        }).catch();
      }


      // axios({
      //   method: 'post',
      //   url: 'https://restapi.amap.com/v3/ip',
      //   params: {
      //     key: '53566dbfa95aa627fbc91ebb6f0dc876'
      //   }
      // }).then((res) => {
      //   console.log(res);
      // })
    }
    /**
   * 获取本地数据（从cookie中获取）
   * @param StorageName
   * @constructor
   * 返回对象类型
   */
    app.config.globalProperties.$GetLocalStorage = function (StorageName) {
      var Storage = localStorage.getItem(StorageName);
      if (Storage) {
        return JSON.parse(Storage);
      } else {
        return {};
      }
    };
    /**
    * 修改/存储 本地数据
    * @param StorageName Storage表名字
    * @param Value Object类型，需要Key，Value两个字段。
    * @constructor
    */
    app.config.globalProperties.$SetLocalStorage = function (StorageName, Data) {
      var Storage = localStorage.getItem(StorageName);
      console.log(Storage)
      console.log(Data);
      // 如果表存在，修改表中字段名
      if (Storage) {
        // 将表的值转为对象，并装入传入的字段
        var StorageObject = JSON.parse(Storage);
        // StorageObject[Data.Key] = Data.Value;
        StorageObject = Data
        // 重新将存储
        localStorage.setItem(StorageName, JSON.stringify(StorageObject));
      }
      //如果表不存在直接存储
      else {
        // var Obj = {};
        // console.log(Data.key);
        // Obj[Data.Key] = Data.Value;
        // // Obj.key = Data.key
        // console.log(Obj);
        localStorage.setItem(StorageName, JSON.stringify(Data));
      }
    };
           /**
   * 种cookie
   * @param name cookie名称
   * @param value cookie值
   * @param exHour 过期时间,单位小时
   */
  app.config.globalProperties.$setSQCookie = function (name, value, exHour) {
    var d = new Date();//d.getTime()当前时间戳 以毫秒为单位 d.setTime 传入以毫秒为单位的时间戳 获得新时间戳
    d.setTime(d.getTime() + exHour * 60 * 60 * 1000); //这行代码的意思是当前时间戳加上所设置的时间戳（exHour * 60 * 60 * 1000）得到一个新的时间戳
    var expires = 'expires=' + d.toUTCString(); // cookie的语法要求是这个标志，和这个时间格式
    document.cookie = name + '=' + value + '; ' + expires;
    console.log('种下cookie', name + '=' + value + '; ' + expires);
  };
  /**
   * 获取cookie
   * @param name cookie的名称
   */
   app.config.globalProperties.$getSQCookie = function (cookName) {
    let name = cookName + '=',
      cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cleanItem = cookies[i].trim();
      if (cleanItem.indexOf(name) == 0) {
        return cleanItem.substring(name.length, cookies[i].length);
      }
    }
    return '';
  };
  }
}
export default CommonFunction

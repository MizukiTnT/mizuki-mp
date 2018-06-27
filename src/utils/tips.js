export default class Tips {
    /**
   * 成功弹窗
   */
    static success (title, duration = 500) {
        wx.showToast({
          title: title,
          icon: "success",
          mask: true,
          duration: duration
        });
    }
    /**
   * 弹出确认窗口
   */
  static confirm(text, confirmText = '确定',title = "提示", showCancel = true) {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
        showCancel: true,
        confirmColor: '#fd5353',
        confirmText: confirmText,
        success: res => {
          if (res.confirm) {
            console.log('a')
            resolve('a');
          } else if (res.cancel) {
            console.log('b')
            reject('b');
          }
        },
        fail: res => {
          reject('c');
        }
      });
    }).catch();
  }
  /**
   * 显示提示框 
   * onHide func 用来处理结束后的回调
   */
  static toast(title, onHide, icon = "success") {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
    }, 300);

    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 800);
    }
  }
  /**
   * 警告框
   */
  static alert(title) {
    wx.showToast({
      title: title,
      image: "../assets/img/alert.png",
      mask: true,
      duration: 1500
    })
  }

  /**
   * 错误框
   */

  static error(title, onHide) {
    wx.showToast({
      title: title,
      image: "../assets/img/error.png",
      mask: true,
      duration: 500
    });
    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /**
   * 弹出加载提示
   */
  static loading(title = "加载中") {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true
    });
  }

  /**
   * 加载完毕
   */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wx.hideLoading();
    }
  }
}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false;

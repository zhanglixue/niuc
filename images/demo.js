$.fn.extend({
 luntopFn: function (o) {
  var time = o.time ? o.time : 30;
  var ul = o.bd ? $(o.bd) : $(this).find("ul");
  ul.append(ul.children().clone(true));
  o.times = null;
  var len = ul.height() / 2;
  if (!!$(this)[0]) {
   o.times = window.setInterval(function () {
     var t = ul.css('top');
     t = t.replace('px', '');
     if (t > -len) {
      t--;
      ul.css({
       top: t
      });
     } else {
      ul.css({
       top: 0
      });
     };
    }, time);
   ul.hover(function () {
    window.clearInterval(o.times);
   }, function () {
    o.times = window.setInterval(function () {
      var t = ul.css('top');
      t = t.replace('px', '');
      if (t > -len) {
       t--;
       ul.css({
        top: t
       });
      } else {
       ul.css({
        top: 0
       });
      };
     }, time);
   });
  }
 },
 lunleftFn: function (o) {
  var time = o.time ? o.time : 30;
  var ul = o.bd ? $(o.bd) : $(this).find("ul");
  ul.append(ul.children().clone(true));
  o.times = null;
  var len = ul.width();
  if (!!$(this)[0]) {
   o.times = window.setInterval(function () {
     var t = ul.css('left');
     t = t.replace('px', '');
     if (t > -len) {
      t--;
      ul.css({
       left: t
      });
     } else {
      ul.css({
       left: "100%"
      });
     }
    }, time)
    ul.hover(function () {
     window.clearInterval(o.times);
    }, function () {
     o.times = window.setInterval(function () {
       var t = ul.css('left');
       t = t.replace('px', '');
       if (t > -len) {
        t--;
        ul.css({
         left: t
        });
       } else {
        ul.css({
         left: "100%"
        });
       }
      }, time);
    });
  };
 },
 lunleftFncs3: function (o) {
  var time = o.time ? o.time : 30;
  var ul = o.bd ? $(o.bd) : $(this).find("ul");
  ul.append(ul.children().clone(true));
  o.times = null;
  var len = ul.width();
  if (!o.sui) {
   o.sui = true;
   ul.append(ul.children().clone(true));
  }
  var left = 0;
  if (!!$(this)[0]) {
   o.times = window.setInterval(function () {
     var s = ul.css("transform");
     s = s.replace("matrix(", "").replace(")", "").split(",");
     s = Number(s[4]);
     if (-s > len) {
      s =  - (-s - len);
     }
     left = s;
     if (left > -len) {
      left--;
      ul.css({
       transform: "translateX(" + left + "px )"
      })
     } else {
      left = 0;
      ul.css({
       transform: "translateX(100%)"
      })
     }
    }, time)
  }
 },
 huxiFn: function (o) {
  var iNowxx = 0;
  var timexx = null;
  var outTime = o.outTime ? o.outTime : 800;
  var inTime = o.inTime ? o.inTime : 600;
  var stopTime = o.stopTime ? o.stopTime : 3000;
  var yuandian = o.yuandian ? $(o.yuandian) : $(this).find(".yuandian");
  var dian = o.dian ? o.dian : '<span></span>';
  var tutu = o.bd ? $(o.bd) : $(this).find('ul.tutu');
  var li = o.li ? $(o.li) : tutu.children();
  var len2 = li.length;
  var rt = o.rightbtn ? $(o.rightbtn) : $(this).find(".rightbtn");
  var lt = o.leftbtn ? $(o.leftbtn) : $(this).find(".leftbtn");
  o.times = null;
  for (var i = 0; i < len2; i++) {
   yuandian.append(dian);
  }
  yuandian.children().eq(0).addClass('cur');
  var rightbtn = function () {
   if (iNowxx < len2 - 1) {
    li.eq(iNowxx).stop().fadeOut(outTime);
    iNowxx++;
    yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
    li.eq(iNowxx).stop().fadeIn(inTime);
   } else {
    li.eq(iNowxx).stop().fadeOut(outTime);
    iNowxx = 0;
    li.eq(iNowxx).stop().fadeIn(inTime);
    yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur');
   };
  };
  var leftbtn = function () {
   if (iNowxx > 0) {
    li.eq(iNowxx).stop().fadeOut(outTime);
    iNowxx--;
    yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur');
    li.eq(iNowxx).stop().fadeIn(inTime);
   } else {
    li.eq(iNowxx).stop().fadeOut(outTime);
    iNowxx = len2 - 1;
    li.eq(iNowxx).stop().fadeIn(inTime);
    yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur');
   };
  };
  rt.click(function () {
   rightbtn();
  });
  lt.click(function () {
   leftbtn();
  });
  o.times = window.setInterval(function () {
    rightbtn();
   }, stopTime);
  $(this).hover(function () {
   window.clearInterval(o.times);
  }, function () {
   o.times = window.setInterval(function () {
     rightbtn();
    }, stopTime);
  });
  yuandian.children().click(function () {
   li.eq(iNowxx).fadeOut(outTime);
   iNowxx = $(this).index();
   yuandian.children().eq(iNowxx).addClass('cur').siblings().removeClass('cur')
   li.eq(iNowxx).fadeIn(inTime);
  });
 },
 lunboFn: function (o) {
  var stopTime = o.stopTime ? o.stopTime : 2000;
  var slipTime = o.slipTime ? o.slipTime : 400;
  var obj = $(this);
  var tutu = o.bd ? $(o.bd) : $(this).find('ul.tutu');
  var yuandian = o.yuandian ? $(o.yuandian) : $(this).find(".yuandian");
  var dian = o.dian ? o.dian : '<span></span>';
  var li = o.li ? $(o.li) : tutu.children();
  var cLength = li.length + 1;
  tutu.append(li.clone(true));
  o.times = null;
  var len = li.outerWidth();
  var iNow = 0;
  var rt = o.rightbtn ? $(o.rightbtn) : $(this).find(".rightbtn");
  var lt = o.leftbtn ? $(o.leftbtn) : $(this).find(".leftbtn");
  for (var i = 0; i < cLength - 1; i++) {
   yuandian.append(dian)
  }
  yuandian.children().eq(0).addClass('cur');
  var leftBtn = function () {
   if (iNow > 0) {
    iNow--;
    tutu.stop().animate({
     left: -len * iNow
    }, slipTime);
    yuandian.children().eq(iNow).addClass('cur').siblings().removeClass('cur');
   } else {
    tutu.css({
     left: -len * (cLength - 1)
    })
    iNow = cLength - 2;
    tutu.stop().animate({
     left: -len * iNow
    }, slipTime);
    yuandian.children().eq(iNow).addClass('cur').siblings().removeClass('cur');
   }
  }
  var rightBtn = function () {
   if (iNow < cLength - 2) {
    iNow++;
    tutu.stop().animate({
     left: -len * iNow
    }, slipTime);
    yuandian.children().eq(iNow).addClass('cur').siblings().removeClass('cur');
   } else {
    tutu.stop().animate({
     left: -len * (cLength - 1)
    }, slipTime, function () {
     tutu.css({
      left: 0
     });
     iNow = 0;
    });
    yuandian.children().eq(0).addClass('cur').siblings().removeClass('cur');
   }
  }
  o.times = window.setInterval(function () {
    rightBtn();
   }, stopTime);
  obj.hover(function () {
   window.clearInterval(o.times);
  }, function () {
   o.times = window.setInterval(function () {
     rightBtn();
    }, stopTime);
  });
  lt.click(function () {
   leftBtn();
  });
  rt.click(function () {
   rightBtn();
  });
  yuandian.children().click(function () {
   iNow = $(this).index();
   $(this).addClass('cur').siblings().removeClass('cur');
   tutu.stop().animate({
    left: -len * iNow
   }, slipTime);
   yuandian.children().eq(iNow).addClass('cur').siblings().removeClass('cur');
  })
 },
 lunboFnTop: function (o) {
  var stopTime = o.stopTime ? o.stopTime : 2000;
  var slipTime = o.slipTime ? o.slipTime : 400;
  var obj = $(this);
  o.times = null;
  var tutu = o.bd ? $(o.bd) : $(this).find('ul.tutu');
  var yuandian = o.yuandian ? $(o.yuandian) : $(this).find(".yuandian");
  var dian = o.dian ? o.dian : '<span></span>';
  var li = o.li ? $(o.li) : tutu.children();
  tutu.append(li.eq(0).clone(true));
  o.times = null;
  var len = li.outerHeight();
  var cLength = li.length + 1;
  var iNow = 0;
  var rt = o.rightbtn ? $(o.rightbtn) : $(this).find(".rightbtn");
  var lt = o.leftbtn ? $(o.leftbtn) : $(this).find(".leftbtn");
  for (var i = 0; i < cLength - 1; i++) {
   yuandian.append(dian)
  }
  yuandian.children().eq(0).addClass('cur');
  var leftBtn = function () {
   if (iNow > 0) {
    iNow--;
    tutu.stop().animate({
     top: -len * iNow
    }, slipTime);
    yuandian.children().eq(iNow).addClass('cur').siblings().removeClass('cur');
   } else {
    tutu.css({
     top: -len * (cLength - 1)
    })
    iNow = cLength - 2;
    tutu.stop().animate({
     top: -len * iNow
    }, slipTime);
    yuandian.children().eq(iNow).addClass('cur').siblings().removeClass('cur');
   }
  }
  var rightBtn = function () {
   if (iNow < cLength - 2) {
    iNow++;
    tutu.stop().animate({
     top: -len * iNow
    }, slipTime);
    yuandian.children().eq(iNow).addClass('cur').siblings().removeClass('cur');
   } else {
    tutu.stop().animate({
     top: -len * (cLength - 1)
    }, slipTime, function () {
     tutu.css({
      top: 0
     });
     iNow = 0;
    });
    yuandian.children().eq(0).addClass('cur').siblings().removeClass('cur');
   }
  }
  o.times = window.setInterval(function () {
    rightBtn();
   }, stopTime);
  obj.hover(function () {
   window.clearInterval(o.times);
  }, function () {
   o.times = window.setInterval(function () {
     rightBtn();
    }, stopTime);
  });
  lt.click(function () {
   leftBtn();
  });
  rt.click(function () {
   rightBtn();
  });
  yuandian.children().click(function () {
   iNow = $(this).index();
   $(this).addClass('cur').siblings().removeClass('cur');
   tutu.stop().animate({
    top: -len * iNow
   }, slipTime);
   yuandian.children().eq(iNow).addClass('cur').siblings().removeClass('cur');
  })
 },
 wordLimit: function (num) {
  this.each(function () {
   if (!num) {
    var copyThis = $(this.cloneNode(true)).hide().css({
      'position': 'absolute',
      'width': 'auto',
      'overflow': 'visible'
     });
    var maxwidth = num;
    if ($(this).attr('olddate') != $(this).text()) {
     $(this).attr('olddate', $(this).text());
    }
    $(this).after(copyThis);
    if (copyThis.width() > $(this).width()) {
     $(this).text($(this).text().substring(0, $(this).text().length - 4));
     $(this).html($(this).html() + '...');
     copyThis.remove();
     $(this).wordLimit();
    } else {
     copyThis.remove();
     return;
    }
   } else {
    var maxwidth = num;
    if ($(this).attr('olddate') != $(this).text()) {
     $(this).attr('olddate', $(this).text());
    }
    if ($(this).text().length > maxwidth) {
     $(this).text($(this).text().substring(0, maxwidth));
     $(this).html($(this).html() + '...');
    }
   }
  })
 },
 sinpt: function () {
  $(this).attr("oldval", $(this).val())
  $(this).focus(function () {
   if ($(this).val() == $(this).attr("oldval")) {
    $(this).val("")
    if ($(this).attr("typeval") == "password") {
     $(this).attr("type", "password")
    }
   }
  }).blur(function () {
   if ($(this).val() == "") {
    $(this).val($(this).attr("oldval"))
    if ($(this).attr("typeval") == "password") {
     $(this).attr("type", "text")
    }
   }
  })
 },
 ttFn: function (time, cur) {
  var time = time ? time : 300;
  var cur = cur ? cur : "cur";
  var _this = $(this);
  window.setInterval(function () {
   _this.toggleClass(cur)
  }, time);
 },
 addCommas: function (nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
   x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
 },
 tiaodFn: function (o) {
  var nunx = o.num ? o.num : 10256256;
  nunx = nunx + nunx * 0.001 * Math.random();
  nunx = nunx.toFixed(2);
  o.timex = null;
  o.time = o.time ? o.time : 800;
  var bianshu = o.bianshu ? o.bianshu : 1000;
  var jiashu = o.jiashu ? o.jiashu : 20530;
  var num = nunx * 100;
  var _this = $(this);
  o.timex = window.setInterval(function () {
    var drand = Math.ceil(bianshu * Math.random()) + jiashu;
    var numx = ((num + drand) / 100).toFixed(2);
    num = num + drand;
    var dmtex2 = numx.toString();
    dmtex2 = $.fn.addCommas(dmtex2);
    _this.html(dmtex2)
   }, o.time);
 },
 tiaodFn1: function (o) {
  var nunx = o.num ? o.num : 10256256;
  nunx = nunx + nunx * 0.001 * Math.random();
  nunx = nunx.toFixed(0);
  o.timex = null;
  o.time = o.time ? o.time : 800;
  var bianshu = o.bianshu ? o.bianshu : 1000;
  var jiashu = o.jiashu ? o.jiashu : 20530;
  var num = nunx * 100;
  var _this = $(this);
  o.timex = window.setInterval(function () {
    var drand = Math.ceil(bianshu * Math.random()) + jiashu;
    var numx = ((num + drand) / 100).toFixed(0);
    num = num + drand;
    var dmtex2 = numx.toString();
    dmtex2 = $.fn.addCommas(dmtex2);
    _this.html(dmtex2)
   }, o.time);
 },
 tiaodFn2: function (o) {
  var nunx = o.num ? o.num : 10256256;
  nunx = nunx + nunx * 0.001 * Math.random();
  nunx = nunx.toFixed(0);
  o.timex = null;
  o.time = o.time ? o.time : 800;
  var bianshu = o.bianshu ? o.bianshu : 1000;
  var jiashu = o.jiashu ? o.jiashu : 20530;
  var num = nunx * 100;
  var _this = $(this);
  o.timex = window.setInterval(function () {
    var drand = Math.ceil(bianshu * Math.random());
    var numx = ((num + drand) / 100).toFixed(0);
    num = num + drand;
    var dmtex2 = numx.toString();
    dmtex2 = $.fn.addCommas(dmtex2);
    _this.html(dmtex2)
   }, o.time);
 }
})

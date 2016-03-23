// Define some components
var home = Vue.extend({
    template: '<div class="p1">首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/>首页<br/></div>'
})

var page2 = Vue.extend({
    template: '<div class="p2">页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二</div>'
})

var page3 = Vue.extend({
    template: '<div class="p3">页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三<br/>页面三</div>'
})

var page4 = Vue.extend({
    template: '<div class="p4">页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四</div>'
})

var page5 = Vue.extend({
    template: '<div class="p5">页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五</div>'
})


var App = Vue.extend({
    data:function(){
        return {
            effect:'next',
            changePage:false
        }
    }
})


var router = new VueRouter();


//过渡代码放到最下面的时候，有时候并不会执行钩子函数的方法，放到这里就可以了。
Vue.transition('next', {
  beforeEnter: function (el) {
    router.app.changePage = true;
  },
  enter:function(){
  },
  afterEnter: function (el) {
    router.app.changePage = false;
  }
});
Vue.transition('prev', {
  beforeEnter: function (el) {
    router.app.changePage = true;
  },
  enter:function(){
  },
  afterEnter: function (el) {
    router.app.changePage = false;
  }
});

router.map({
    '/': {
        name:'home',
        component: home
    },
    '/page2': {
        name:'page2',
        component: page2
    },
    '/page3': {
        name:'page3',
        component: page3
    },
    '/page4': {
        name:'page4',
        component: page4
    },
    '/page5': {
        name:'page5',
        component: page5
    }
})

//全局放一个routlist

window.routeList = [];
router.beforeEach(function(transition){
    if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]){
        router.app.effect='prev';//返回
        routeList.splice(routeList.length-1,1);
        setTimeout(function(){
            //这里加上延迟是要在afterEach之后在执行
          transition.next()
        },15);
        return;
    }
    router.app.effect='next';//前进
    routeList.push(transition.to.name);
    transition.next();
});

router.afterEach(function(transition){
    //这里必须要加上， 此钩子函数会在beforeEach之后马上执行,没有这句会导致
    //当你浏览顺序为，首页->页面二->页面三
    //此时点击页面二正常返回，然后再次选择页面三，本应该是前进，结果还是返回。
    router.app.effect='next';//重置前进
});

router.start(App, '#app');

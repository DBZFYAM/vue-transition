// Define some components
var page1 = Vue.extend({
    template: '<div class="p1">页面一<br/>页面一<br/>页面一<br/>页面一<br/></div>'
})

var page2 = Vue.extend({
    template: '<div class="p2">页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/>页面二<br/></div>'
})
var page3 = Vue.extend({
    template: '<div class="p3">页面三<br/>页面三<br/>页面三<br/>页面三<br/></div>'
})

var page4 = Vue.extend({
    template: '<div class="p4">页面四<br/>页面四<br/>页面四<br/>页面四<br/>页面四<br/></div>'
})

var page5 = Vue.extend({
    template: '<div class="p5">页面五<br/>页面五<br/>页面五<br/>页面五<br/>页面五<br/></div>'
})



// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({
    data:function(){
        return {
            transition:'page',
            changePage:false
        }
    }
})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/page1': {
        component: page1
    },
    '/page2': {
        component: page2
    },
    '/page3': {
        component: page3
    },
    '/page4': {
        component: page4
    },
    '/page5': {
        component: page5
    }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');


Vue.transition('page', {
  beforeEnter: function (el) {
    console.log('1');
    router.app.changePage = true;
  },
  enter:function(){
    console.log('2');
  },
  afterEnter: function (el) {
    console.log('3');
    router.app.changePage = false;
  }
});

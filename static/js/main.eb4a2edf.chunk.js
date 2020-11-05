(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),r=n.n(a),c=n(3),s=n.n(c),l=(n(13),n(4)),u=n(5),o=n(7),d=n(6);var m=function(e){return Object(i.jsxs)("ul",{className:"navbar navbar-dark bg-dark",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#home",onClick:function(){return e.handlePageChange("Home")},className:"Home"===e.currentPage?"nav-link active":"nav-link",children:"Erin Lee Crocker"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#about",onClick:function(){return e.handlePageChange("About")},className:"About"===e.currentPage?"nav-link active":"nav-link",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#blog",onClick:function(){return e.handlePageChange("Blog")},className:"Blog"===e.currentPage?"nav-link active":"nav-link",children:"Portfolio"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#contact",onClick:function(){return e.handlePageChange("Contact")},className:"Contact"===e.currentPage?"nav-link active":"nav-link",children:"Contact"})})]})},h=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Home Page"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus."})]})},b=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"text-center",children:Object(i.jsx)("h2",{children:"About Me"})}),Object(i.jsx)("p",{children:"Erin Crocker is a graphic designer acquiring her certification in web development through Georgia Tech's Web Development Bootcamp. With recent changes in the world and economy she will use her combined skill sets to become a proficient developer and designer. Her most recent work has centered around HTML, CSS, and JavaScript. Learning jQuery, how to make use AJAX calls, and working collaboratively with teams of other developers."}),Object(i.jsx)("p",{children:"Erin enjoys drawing and painting in her free time, as well as outdoor activities such as; kayaking, biking, and hiking with her son. With her boundless creativity and love of learning every challenge becomes a chance to grow and become more versatile."})]})})},g=(n(14),function(e){return Object(i.jsx)("div",{className:"container mt-3",children:Object(i.jsxs)("div",{className:"card text-center",children:[Object(i.jsx)("div",{className:"card-header",children:Object(i.jsx)("h4",{children:e.title})}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("img",{src:e.image,href:e.imageName}),Object(i.jsx)("p",{className:"card-text",children:e.details}),Object(i.jsx)("a",{href:e.buttonLink,target:"_blank",className:"btn btn-primary",children:"View Deployed App"})]})]})})}),j=n.p+"static/media/date-night-planner.50d584f3.png",p=function(){return Object(i.jsxs)("div",{class:"text-center mt-5 mb-5",children:[Object(i.jsx)("h3",{children:"PORTFOLIO"}),Object(i.jsx)(g,{title:"The Date Night Planner",image:j,imageName:"The Date Night Planner",details:"The Date Night Planner is a web application created to assist individuals who can\u2019t go out for a date night and are running out of ideas for date nights at home. This application reduces the pressure of finding new food, cocktails, and movie ideas.",gitHubLink:"https://github.com/erinleecrocker/The-Date-Night-Planner.git",buttonLink:"https://cgriffin332.github.io/The-Date-Night-Planner/"}),Object(i.jsx)(g,{title:"The Wedding Pot"}),Object(i.jsx)(g,{title:"Weather Dashboard"})]})},f=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Contact Page"}),Object(i.jsx)("p",{children:"Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus. Etiam vel condimentum magna, quis tempor nulla."})]})},v=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:"Home"},e.handlePageChange=function(t){e.setState({currentPage:t})},e.renderPage=function(){return"Home"===e.state.currentPage?Object(i.jsx)(h,{}):"About"===e.state.currentPage?Object(i.jsx)(b,{}):"Blog"===e.state.currentPage?Object(i.jsx)(p,{}):Object(i.jsx)(f,{})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(m,{currentPage:this.state.currentPage,handlePageChange:this.handlePageChange}),this.renderPage()]})}}]),n}(a.Component),O=function(){return Object(i.jsx)(v,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};n(15);s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.eb4a2edf.chunk.js.map
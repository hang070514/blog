<template>
  <div class="picture">
      <div id="gallery" class="fullscreen">
          {{msg}}
      </div>
    <!--   <div id="nav" class="navbar">
        <button id="preview">&lt; 前一张</button>
        <button id="next">下一张 &gt;</button>
    </div> -->
  </div>
</template>

<!-- <script src="static/polaroid-gallery.js"></script> -->
<script>
//import '../../static/polaroid-gallery.js'
export default {

  name: 'picture',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:'data.json',
      myArr:[]
    }
  },
  mounted(){
    //this.getData(),
    this.show()
  },
  methods:{
    getData(){
      this.$http.get('../../static/data.json').then(
        function(res){
          console.log(res.data);

          this.myArr = res.data;
          //return res.data;
          //console.log(this.myArr.length);
        }
      )
    },
    init(){
        navbarHeight = document.getElementById("nav").offsetHeight;
        navigation();

        window.addEventListener('resize', function () {
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            resizeTimeout = setTimeout(function () {
                shuffleAll();
                if (currentItem) {
                    select(currentItem);
                }
            }, 100);
        });
    },
    observe(){
      var observeDOM = (function () {
          var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
              eventListenerSupported = window.addEventListener;

          return function (obj, callback) {
              if (MutationObserver) {
                  var obs = new MutationObserver(function (mutations, observer) {
                      if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                      callback(mutations);
                  });

                  obs.observe(obj, { childList: true, subtree: false });
              }
              else if (eventListenerSupported) {
                  obj.addEventListener('DOMNodeInserted', callback, false);
              }
          }
      })();

      observeDOM(document.getElementById('gallery'), function (mutations) {
          var gallery = [].slice.call(mutations[0].addedNodes);
          var zIndex = 1;
          gallery.forEach(function (item) {
              var img = item.getElementsByTagName('img')[0];
              var first = true;
              img.addEventListener('load', function () {
                  if (first) {
                      currentItem = item;
                      first = false;
                  }
                  dataSize[item.id] = {item: item, width: item.offsetWidth, height: item.offsetHeight};

                  dataLength++;

                  item.addEventListener('click', function () {
                      select(item);
                      shuffleAll();
                  });

                  shuffle(item, zIndex++);
              })
          });
      });
    },
    setGallery(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += '<figure id="' + i + '">' +
                '<img src="img/' + arr[i].name + '" alt="' + arr[i].name + '"/>' +
                '<figcaption>' + arr[i].caption + '</figcaption>' +
                '</figure>';
        }
        document.getElementById("gallery").innerHTML = out;
    }
    polaroidGallery(){
      this.$options.methods.observe();
      this.$http.get('../../static/data.json').then(
        function(res){
          console.log(res.data);
          this.$options.methods.setGallery(res.data);
          //return res.data;
          //console.log(this.myArr.length);
        }
      )

      this.$options.methods.init();
    },
    show(){
      var dataSize = {};
      var dataLength = 0;
      var currentItem = null;
      var navbarHeight = 60;
      var resizeTimeout = null;
      var url = this.url;
      //var url = "myBlog/static/data.json";
      console.log(this.url);
      //this.$options.methods.getData();
      this.$options.methods.polaroidGallery();
      //function polaroidGallery() {
          observe();
          setGallery(this.myArr);
          init();
          // xmlhttp.onreadystatechange = function () {
          //     console.log(xmlhttp.status);
          //     console.log(xmlhttp.readyState);
          //     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          //         var myArr = JSON.parse(xmlhttp.responseText);
          //         setGallery(myArr);
          //         init();
          //     }
          // };
          // xmlhttp.open("GET", url, true);
          // xmlhttp.send();
      }

      //function setGallery(arr) {
          var out = "";
          var i;
          for (i = 0; i < arr.length; i++) {
              out += '<figure id="' + i + '">' +
                  '<img src="img/' + arr[i].name + '" alt="' + arr[i].name + '"/>' +
                  '<figcaption>' + arr[i].caption + '</figcaption>' +
                  '</figure>';
          }
          document.getElementById("gallery").innerHTML = out;
      }

      //function observe() {
          var observeDOM = (function () {
              var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
                  eventListenerSupported = window.addEventListener;

              return function (obj, callback) {
                  if (MutationObserver) {
                      var obs = new MutationObserver(function (mutations, observer) {
                          if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                          callback(mutations);
                      });

                      obs.observe(obj, { childList: true, subtree: false });
                  }
                  else if (eventListenerSupported) {
                      obj.addEventListener('DOMNodeInserted', callback, false);
                  }
              }
          })();

          observeDOM(document.getElementById('gallery'), function (mutations) {
              var gallery = [].slice.call(mutations[0].addedNodes);
              var zIndex = 1;
              gallery.forEach(function (item) {
                  var img = item.getElementsByTagName('img')[0];
                  var first = true;
                  img.addEventListener('load', function () {
                      if (first) {
                          currentItem = item;
                          first = false;
                      }
                      dataSize[item.id] = {item: item, width: item.offsetWidth, height: item.offsetHeight};

                      dataLength++;

                      item.addEventListener('click', function () {
                          select(item);
                          shuffleAll();
                      });

                      shuffle(item, zIndex++);
                  })
              });
          });
      }

      //function init() {
          navbarHeight = document.getElementById("nav").offsetHeight;
          navigation();

          window.addEventListener('resize', function () {
              if (resizeTimeout) {
                  clearTimeout(resizeTimeout);
              }
              resizeTimeout = setTimeout(function () {
                  shuffleAll();
                  if (currentItem) {
                      select(currentItem);
                  }
              }, 100);
          });
      }

      function select(item) {
          var scale = 1.8;
          var rotRandomD = 0;

          var initWidth = dataSize[item.id].width;
          var initHeight = dataSize[item.id].height;

          var newWidth = (initWidth * scale);
          var newHeight = initHeight * (newWidth / initWidth);

          var x = (window.innerWidth - newWidth) / 2;
          var y = (window.innerHeight - navbarHeight - newHeight) / 2;

          item.style.transformOrigin = '0 0';
          item.style.WebkitTransform = 'translate(' + x + 'px,' + y + 'px) rotate(' + rotRandomD + 'deg) scale(' + scale + ',' + scale + ')';
          item.style.msTransform = 'translate(' + x + 'px,' + y + 'px) rotate(' + rotRandomD + 'deg) scale(' + scale + ',' + scale + ')';
          item.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + rotRandomD + 'deg) scale(' + scale + ',' + scale + ')';
          item.style.zIndex = 999;

          currentItem = item;
      }

      function shuffle(item, zIndex) {
          var randomX = Math.random();
          var randomY = Math.random();
          var maxR = 45;
          var minR = -45;
          var rotRandomD = Math.random() * (maxR - minR) + minR;
          var rotRandomR = rotRandomD * Math.PI / 180;

          var rotatedW = Math.abs(item.offsetWidth * Math.cos(rotRandomR)) + Math.abs(item.offsetHeight * Math.sin(rotRandomR));
          var rotatedH = Math.abs(item.offsetWidth * Math.sin(rotRandomR)) + Math.abs(item.offsetHeight * Math.cos(rotRandomR));

          var x = Math.floor((window.innerWidth - rotatedW) * randomX);
          var y = Math.floor((window.innerHeight - rotatedH) * randomY);

          item.style.transformOrigin = '0 0';
          item.style.WebkitTransform = 'translate(' + x + 'px,' + y + 'px) rotate(' + rotRandomD + 'deg) scale(1)';
          item.style.msTransform = 'translate(' + x + 'px,' + y + 'px) rotate(' + rotRandomD + 'deg) scale(1)';
          item.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + rotRandomD + 'deg) scale(1)';
          item.style.zIndex = zIndex;
      }

      function shuffleAll() {
          var zIndex = 0;
          for (var id in dataSize) {
              if (id != currentItem.id) {
                  shuffle(dataSize[id].item, zIndex++);
              }
          }
      }

      function navigation() {
          var next = document.getElementById('next');
          var preview = document.getElementById('preview');

          next.addEventListener('click', function () {
              var currentIndex = Number(currentItem.id) + 1;
              if (currentIndex >= dataLength) {
                  currentIndex = 0
              }
              select(dataSize[currentIndex].item);
              shuffleAll();
          });

          preview.addEventListener('click', function () {
              var currentIndex = Number(currentItem.id) - 1;
              if (currentIndex < 0) {
                  currentIndex = dataLength - 1
              }
              select(dataSize[currentIndex].item);
              shuffleAll();
          })
      }

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .picture {
      width: 1120px;
      height: 500px;
    background-color: red;
  }

.fullscreen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

figure {
    width: 200px;
    position: absolute;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    background-color: white;
    -webkit-transition: all 0.6s;
    -moz-transition: all 0.6s;
    transition: all 0.6s;
    cursor: pointer;
}

figure img {
    height: auto;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 15px;
}

figure figcaption {
    font-family: Comic Sans, Comic Sans MS, cursive;
    color: #8F8476;
}

.navbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px;
    text-align: center;
    background-color: black;
    z-index: 999;
}

button {
    background-color: transparent;
    padding: 10px 24px;
    color: #ffffff;
    border: 2px solid black;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    transition: 0.4s;
}

button:hover {
    background-color: #f44336;
    color: white;
}
</style>

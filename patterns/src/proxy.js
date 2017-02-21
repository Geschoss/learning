console.log("!----------Proxy----------!");
'use strict';

let $ = function(id) {
  return document.getElementById(id);
};

$('vids').onclick = function(e) {
  let src, id;

  e = e || window.event;
  src = e.target || e.srcElement;

  if(src.nodeName !== "A") {
    return;
  }

  if(typeof e.preventDefault() === "function") {
    e.preventDefault();
  }

  e.returnValue = false;
  id = src.href.split('--')[1];
  if(src.className === 'play') {
    src.parentNode.innerHTML = videos.getPlayer(id);
    return;
  }

  src.parentNode.id = 'v' + id;
  videos.getInfo(id);

};


$('toggle-all').onclick = function(e) {
  let hrefs,
    i,
    max,
    id;

  hrefs = $('vids').getElementsByTagName('a');
  for(i = 0, max = hrefs.length; i < max; i += 1) {
    if(hrefs[i].className === 'play') {
      continue;
    }
    if(!hrefs[i].parentNode.firstChild.checked) {
      continue;
    }
    id = hrefs[i].href.split('--')[1];
    hrefs[i].parentNode.id = 'v' + id;
    videos.getInfo(id);
  }
};

let videos = {
  getPlayer: function(id) {

  },
  updateList: function(data) {

  },
  getInfo: function(id) {
    let info = $('info' + id);

    if(!info) {
      proxy.makeRequest(id, videos.updateList, videos);
      return;
    }

    if(info.style.display === 'none') {
      info.style.display = '';
    } else {
      info.style.display = 'none';
    }
  }
};

let http = {
  makeRequest: function(ids, callback) {
    let url = 'http://query.yahooapis.com/v1/public/yql?q=',
      sql = 'select * from music.video.id where ids IN (“%ID%”)',
      format = 'format=json',
      handler = 'callback=' + callback,
      script = document.createElement('script');

    sql = sql.replace('%ID%',ids.join('","'));
    sql = encodeURIComponent(sql);

    url +=sql + '&' + format + '&' + handler;
    script.src = url;
    document.body.appendChild(script);

  }
};



let proxy = {
  ids: [],
  delay: 50,
  timeout: null,
  callback: null,
  context: null,
  cache: {},
  makeRequest: function(id, callback, context) {
    if(this.checkCache(id)){

    }
    this.ids.push(id);
    this.callback = callback;
    this.context = context;
    if(!this.timeout){
      this.timeout = setTimeout(function() {
        proxy.flush();
      }, this.delay);
    }
  },
  flush: function() {
    http.makeRequest(this.ids, 'proxy.handler');
    this.timeout = null;
    this.ids = [];
  },
  handler: function(data) {
    let i, max,
      query = data.query;
    if(parseInt(query.count, 10)===1){
      proxy.callCallback(proxy.context,query.result.Video);
      return;
    }
    for(i = 0, max = query.result.Video.length; i < max; i += 1){
      proxy.callCallback(proxy.context, query.result.Video[i]);
    }
  },
  callCallback(context, data){
    proxy.callback.call(context,data);
  },
  checkCache: function(id) {
    return this.cache[id]
  }
};














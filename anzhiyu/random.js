var posts=["2025/06/11/hello-world/","2025/06/11/first-artice/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
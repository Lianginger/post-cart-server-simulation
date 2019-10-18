# Cross-Domain-Cookie

一個用 Node.js + Express 實作簡單加入購物車 API，並使用 session 記錄使用者的購物車 id、商品 id 和商品數量。

## API

加入購物車，並回應所有購物車商品

```
[URL]: https://post-cart-server-simulation.herokuapp.com
[API]: /cart
[方法]: post
[參數]:
  {
    "productId": 3,
    "quantity": 15
  }
[成功回應]:
  [
    {
      "cartId": 1,
      "productId": 2,
      "quantity": 6
    },
    {
      "cartId": 1,
      "productId": 3,
      "quantity": 15
    }
  ]
```

重新導向來源網址

```
[URL]: https://post-cart-server-simulation.herokuapp.com
[API]: /redirect
[方法]: get
```

## 專案背景

採用前、後端分離開發部屬後，前端和後端的網址可能是不一樣的，當前端向後端 API 發出請求的時候就會遇到 [CORS](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS) 的問題，本專案將模擬一個加入購物車的情境，並解決跨網域 cookie 請求時，電腦版 Safari 瀏覽器和 iPhone 上的 Safari、Chrome、Firefox 瀏覽器預設阻擋第三方 cookie 的問題。

- 前端：使用 axios 發送跨網域攜帶 cookie 的請求，並解決。( [前端專案 repository](https://github.com/Lianginger/cross-domain-cookie) )
- 後端：Node.js + Express，使用 session 記錄使用者的購物車 id、商品 id 和商品數量( 非常粗糙的簡化，請勿使用在 Production )。( 本專案 )

# AC_login

使用 Node.js + Express + MongoDB 製作簡易登入頁面。

## Screenshot - 畫面截圖

## Features - 功能

1. 使用者可以輸入帳號及密碼登入網頁

## Prerequisites - 環境設置

- Node.js
- Express @4.16.4
- Express-handlebars @3.0.0
- Bootstrap @5.1.3
- MongoDB
- mongoose

## Installation and execution - 安裝與執行步驟

1. 開啟 Terminal, Clone 此專案至本機:

```
git clone https://github.com/kim1037/login.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd login
```

3. 安裝所需套件

```
npm i express@4.16.4 express-handlebars@3.0.0
```

4. 安裝 mongoose

```
npm i mongoose@5.9.7
```

5. 安裝 nodemon (如已安裝可跳過此步驟)

```
npm install -g nodemon
```

6. 建立種子資料

```
npm run seed
```

terminal 出現 "done!" 表示種子資料已新增至 mongoDB

7. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

8. 當 terminal 出現以下字樣，表示伺服器已啟動

> The server is running on http://localhost:3000
>
> MongoDB connect success!

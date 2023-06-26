# forum-front-end-vue
使用Vue.js打造一個語言學習網站，製作了學生/老師兩種身分登入的畫面，內部畫面皆為前端使用假資料產生（未串接後端API）。
<br />
<br />

## 專案功能&畫面
<br />

### 1. 可於DevTool中安裝的Vue.js devtools下，切換isAdmin和isAuthenticated的值，Navbar的登入資訊會隨身分切換
<br />

![圖片](https://upload.cc/i1/2023/06/26/YlbEpw.jpg)

<br />

### 2. 學生身分時：首頁為「課程列表」，可看到所有課程（資料來源目前為假資料），可點選追蹤/選修課程與否（畫面會直接連動）
<br />

![圖片](https://upload.cc/i1/2023/06/26/1SVmjn.jpg)

<br />

### 3. 學生身分的「最新動態」，可觀看目前最新課程和評論（資料來源目前為假資料），點選課程或是評論者的連結皆有做<strong>路由處理</strong>（無畫面）
<br />

![圖片](https://upload.cc/i1/2023/06/26/dvOABs.jpg)

<br />

### 4. 學生身分的「我的課程」，可看到一開始預設的選修課程，在此點擊<strong>退選課程</strong>，該課程會直接從畫面中移除（但沒有與首頁的課程列表功能連動）
<br />

![圖片](https://upload.cc/i1/2023/06/26/XRlyrZ.jpg)

<br />

### 5. 學生身分的「課程追蹤清單」，可看到一開始預設的追蹤課程，在此點擊<strong>移除追蹤</strong>，該課程會直接從畫面中移除 （但沒有與首頁的課程列表功能連動）
<br />

![圖片](https://upload.cc/i1/2023/06/26/SQ3iCT.jpg)

<br />

### 6. 管理員（老師）身分的首頁為「課程列表」，可點選<strong>操作</strong>欄位的show顯示該課程的單頁介紹（目前皆為同一頁假資料顯示），點選Edit則可以編輯此課程，點選Delete則直接將課程從畫面中移除
<br />

![圖片](https://upload.cc/i1/2023/06/26/BdvQ0f.jpg)

<br />

### 7. 管理員（老師）身分時，可於首頁點選<strong>新增課程</strong>並點選送出後，可在DevTool看到送出的表單資料
<br />

![圖片](https://upload.cc/i1/2023/06/26/E3MuqI.jpg)

<br />

### 8. 管理員（老師）身分時，可於「學生列表」頁面看到所有學生的個人資料
<br />

![圖片](https://upload.cc/i1/2023/06/26/HWjrkR.jpg)

<br />
<br />

## Project setup 使用指南

### 1. 將專案 clone 至本地，至終端機輸入：
```
git clone https://github.com/ChunYingChou/forum-front-end-vue.git
```
### 2. 在終端機中輸入以下文字進入專案資料夾：
```
cd forum-front-end-vue
```
### 3. 在終端機中輸入以下以安裝相關套件：
```
npm install
```
### 4. 在終端機中輸入以下便可執行專案：
```
npm run serve
```

### 5. 瀏覽器將預設在 http://localhost:8080/ 運行

### 6. 在終端機中按下Ctrl+C即可終止此專案

<br/>

## Contributor 專案開發人員
- [Ashley Chou](https://github.com/ChunYingChou)

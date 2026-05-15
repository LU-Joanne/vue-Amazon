# vue-Amazon
> 此專案使用 **Vue 3** 搭配 **Pinia** 狀態管理與 **Vue Router** 模擬了電商平台的核心流程：從首頁瀏覽、商品詳情、購物車加減到結帳表單驗證。

## 專案特色
- **組件化開發**：將導覽列、產品卡片、運送表單等重複使用的 UI 放在 src/components 中。
- **狀態管理**：使用 Pinia 管理購物車、表單狀態和圖片路徑。
- **路由機制**：使用 createWebHashHistory 進行路由管理。
- **UI 框架**：使用 Bootstrap 進行樣式管理。

## 資料夾說明

- src
  - assets：靜態資料放置處
  - components
    - Navbar.vue：導覽列
    - OrderSummary.vue：訂購摘要
    - ProductCard.vue：產品卡片
    - ShippingForm.vue：訂購表單
  - data
    - product.js：模擬商品資料庫
  - router
    - index.js：Vue Router 路由設定 (Hash Mode)
  - store
    - cart.js：購物車邏輯核心（Pinia Store）
    - checkout.js：運送資訊與表單狀態管理
    - image.js：圖片路徑集中管理
  - views
    - Cart.vue：購物車頁面
    - Checkout.vue：結帳確認頁
    - Home.vue：首頁
    - Product.js：商品詳情頁
  - App.vue：根組件
  - main.js：掛載 Pinia, Router 與 Bootstrap
## 使用技術
- Vue 3
- Pinia
- Vue Router
- Bootstrap
- LocalStorage
## 本地端安裝與運行
Node.js 建議 v18.0 或更高版本
1. 取得專案
```sh
git clone https://lu-joanne.github.io/vue-Amazon/
```
2. 移動到專案內
```sh
cd vue-Amazon
```
3. 安裝套件
```sh
npm install
```
4. 運行專案
```sh
npm run dev
```

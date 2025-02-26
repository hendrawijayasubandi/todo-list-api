# To-Do List API

To-Do List API adalah backend aplikasi sederhana untuk mencatat dan mengelola daftar tugas. API ini menyediakan fitur otentikasi, pembuatan checklist, penambahan item, dan pengelolaan status tugas.

## 🚀 Fitur Utama
- **Autentikasi Pengguna** (Login & Register dengan JWT)
- **Manajemen Checklist** (Buat, Hapus, Tampilkan)
- **Manajemen Item dalam Checklist** (Tambah, Edit, Hapus, Ubah Status)

---

## 📂 Struktur Folder
```
📦 todo-list-api
├── 📂 src
│   ├── 📂 config
│   │   ├── database.js  # Konfigurasi MongoDB
│   ├── 📂 controllers
│   │   ├── authController.js
│   │   ├── checklistController.js
│   ├── 📂 models
│   │   ├── User.js  # Model User
│   │   ├── Checklist.js  # Model Checklist
│   ├── 📂 routes
│   │   ├── authRoutes.js
│   │   ├── checklistRoutes.js
│   ├── 📂 middleware
│   │   ├── authMiddleware.js
│   ├── app.js  # Entry point aplikasi
├── .env  # Variabel lingkungan
├── package.json  # Konfigurasi npm
├── README.md  # Dokumentasi
```

---

## 🛠️ Teknologi yang Digunakan
- **Node.js + Express.js** (Backend API)
- **MongoDB + Mongoose** (Database)
- **JWT (JSON Web Token)** (Autentikasi)
- **dotenv** (Konfigurasi variabel lingkungan)

---

## ⚙️ Instalasi dan Menjalankan API
### 1. **Clone Repository**
```sh
git clone https://github.com/hendrawijayasubandi/todo-list-api.git
cd todo-list-api
```
### 2. **Install Dependencies**
```sh
npm install
```
### 3. **Buat File `.env` dan Tambahkan Konfigurasi**
```sh
PORT=3000
MONGO_URI=mongodb://localhost:27017/todo_list
SECRET_KEY=G5v7J2f3T8aC9L0mN1qX6bZ4Y8wP5eR3
```
### 4. **Jalankan Server**
```sh
npm start  # Untuk produksi
npm run dev  # Untuk pengembangan (nodemon)
```
---

## 🔥 API Endpoints
### 1️⃣ **Register User**
- **Method**: `POST`
- **URL**: `/api/auth/register`
- **Body (JSON):**
```json
{
  "username": "user1",
  "password": "123456"
}
```
- **Response:**
```json
{
  "message": "User berhasil didaftarkan"
}
```

### 2️⃣ **Login User**
- **Method**: `POST`
- **URL**: `/api/auth/login`
- **Body (JSON):**
```json
{
  "username": "user1",
  "password": "123456"
}
```
- **Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3️⃣ **Manajemen Checklist (Butuh Token)**
- **Membuat Checklist**: `POST /api/checklists`
- **Menghapus Checklist**: `DELETE /api/checklists/:id`
- **Menampilkan Checklist**: `GET /api/checklists`
- **Detail Checklist**: `GET /api/checklists/:id`

### 4️⃣ **Manajemen Item dalam Checklist (Butuh Token)**
- **Menambahkan Item**: `POST /api/checklists/:id/items`
- **Detail Item**: `GET /api/checklists/:checklistId/items/:itemId`
- **Mengubah Item**: `PUT /api/checklists/:checklistId/items/:itemId`
- **Mengubah Status Item**: `PATCH /api/checklists/:checklistId/items/:itemId/status`
- **Menghapus Item**: `DELETE /api/checklists/:checklistId/items/:itemId`

📌 **Semua endpoint di atas hanya dapat diakses setelah login dan memiliki token JWT yang valid.** 🚀

---
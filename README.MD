*** Base React Test Fresher | Udemy Hỏi Dân IT ***

- React 18
- React Router 6
- Redux Tookit
- Vite 4

## Requirements - Thông tin của bộ Code Base này

- **Môi trường NodeJS**: v16.13.1
- **Yarn** = v1.22.19

- **"@reduxjs/toolkit"**: "1.9.3"
- **"react"**: "18.2.0"
- **"react-dom"**: "18.2.0"
- **"react-redux"**: "8.0.5"
- **"@vitejs/plugin-react-swc"**: "3.0.0"
- **"vite"**: "4.2.0"

## Chạy dự án
Có thể sử dụng yarn/npm nhé ^^:
```bash
# Run script
yarn run start

# or
yarn run dev
```

Mặc định dự án sẽ sử dụng Vite và chạy trên port `3000`

Có thể thay đổi port trong file `vite.config.js`
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Thay đổi port ở đây
  },
})
```


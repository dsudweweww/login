const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Thêm cors

const app = express();
const port = 3000;

// Sử dụng CORS để cho phép yêu cầu từ tất cả các domain
app.use(cors());

// Middleware để phân tích dữ liệu JSON
app.use(bodyParser.json());

// Tạo một user giả định cho việc đăng nhập
const mockUser = {
    username: 'admin',
    password: 'password123'
};

// Cung cấp các tài nguyên tĩnh như HTML, CSS, JS
app.use(express.static('public'));

// Route đăng nhập
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === mockUser.username && password === mockUser.password) {
        return res.json({ success: true });
    } else {
        return res.json({ success: false });
    }
});

// Chạy server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

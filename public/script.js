document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Gửi yêu cầu đăng nhập đến server
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        const message = document.getElementById('message');

        // Xử lý kết quả trả về từ server
        if (result.success) {
            message.style.color = 'green';
            message.textContent = 'Login successful!';
        } else {
            message.style.color = 'red';
            message.textContent = 'Invalid username or password.';
        }
    } catch (error) {
        console.error('Error during login:', error);
        const message = document.getElementById('message');
        message.style.color = 'red';
        message.textContent = 'An error occurred. Please try again.';
    }
});

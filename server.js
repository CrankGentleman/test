const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// 路由
app.get("/", (req, res) => {
    res.json({
        message: "欢迎使用Node.js Docker应用! 🚀",
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || "development",
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "healthy",
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString(),
    });
});

app.get("/api/hello", (req, res) => {
    const name = req.query.name || "世界";
    res.json({
        message: `你好, ${name}! 👋`,
        timestamp: new Date().toISOString(),
    });
});

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "服务器内部错误",
        message: err.message,
    });
});

// 404处理
app.use((req, res) => {
    res.status(404).json({
        error: "页面未找到",
        path: req.path,
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 服务器运行在端口 ${PORT}`);
    console.log(`📱 访问地址: http://localhost:${PORT}`);
    console.log(`🔍 健康检查: http://localhost:${PORT}/api/health`);
});

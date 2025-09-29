# Node.js Docker 应用

这是一个使用Docker Compose运行的简单Node.js Express应用。

## 功能特性

- 🚀 Express.js Web服务器
- 🐳 Docker容器化
- 🔄 自动重启
- 💚 健康检查
- 📊 系统监控API
- 🌐 CORS支持

## 快速开始

### 使用Docker Compose（推荐）

1. 启动服务：
```bash
docker-compose up --build
```

2. 在后台运行：
```bash
docker-compose up -d --build
```

3. 停止服务：
```bash
docker-compose down
```

### 本地开发

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

## API端点

- `GET /` - 欢迎信息
- `GET /api/health` - 健康检查
- `GET /api/hello?name=你的名字` - 个性化问候

## 访问应用

- 应用地址：http://localhost:3000
- 健康检查：http://localhost:3000/api/health

## 项目结构

```
.
├── server.js          # 主应用文件
├── package.json       # 项目依赖
├── Dockerfile         # Docker镜像配置
├── docker-compose.yaml # Docker Compose配置
├── .dockerignore      # Docker忽略文件
└── README.md          # 项目说明
```

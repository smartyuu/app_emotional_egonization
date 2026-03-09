## services/api-gateway

Node.js 业务网关服务。主要职责：

- 对移动端提供统一 REST API 接口。
- 负责用户体系、鉴权、日记 CRUD、情绪轨迹查询等业务逻辑。
- 通过 HTTP/gRPC 调用 Python AI 服务，获取情绪识别结果与专家回信。


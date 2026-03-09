## services/ai-service

Python AI 推理服务。主要职责：

- 封装 GNN+CNN 情绪识别模型，对 ECG/EEG 生理数据进行情绪分类。
- 封装 LLM 专家系统调用，根据日记文本与情绪标签生成共情式「专家回信」。
- 对外提供统一的推理 API（如 `/emotion/infer`、`/llm/reply`、`/pipeline/journal`），由 Node.js 业务网关调用。


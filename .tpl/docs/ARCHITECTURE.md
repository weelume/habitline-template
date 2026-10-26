# 架构

采用 Next 客户端路由。通用业务位于 `src/features/site-templates/catalog/habitline`；品牌、双语内容、主题、公共组件、页面与路由职责分离。Host Provider 允许外部消费方注入品牌、入口和页脚，不依赖外部工程路径。无后端、持久化、账户或数据库。

# Habitline 双语习惯网站模板

提供九个页面、18 条中文/英文路由，包含双首页、关于、候补名单、更新日志、FAQ、联系、隐私和条款。

工具链：Node 24.16.0、pnpm 9.15.4、React 19、Next 15 与 Framer Motion；依赖复用既有版本，不新增第三方库。

安装：`pnpm install --frozen-lockfile`；开发：`pnpm dev`（`PORT=43567`）；构建：`pnpm build`；生产：`pnpm start`；停止：对应终端 Ctrl+C。中文路径 `/`，英文 `/en`；内页依次追加页面 slug。

验证：`pnpm typecheck`、`pnpm lint`、`pnpm test`。

品牌：`src/features/site-templates/catalog/habitline/config/brand.ts`；内容：`content/data.ts`；样式：`theme.css`；组件：`components/`；页面：`pages/`；路由：`meta.ts`。

所有表单只做浏览器本地验证，不发送、不保存；账户、AI、提醒、离线同步、定价与下载为界面演示。运行素材本地托管，来源见 `.tpl/docs/ASSETS.json`。

目前为本地实现待验收状态。独立仓库：https://github.com/weelume/habitline-template；未完成三端逐项视觉/动效矩阵，不宣称完整复刻。原参考素材的商业再分发权未完整核实，禁止视为可商用发布。

// DockJoy 静态官网中英切换：中文是源文案，英文为运行时替换
(function () {
  const DICT = {
    "/ 产品": "/ Products",
    "/ 关于": "/ About",
    "/ 定价": "/ Pricing",
    "/ 服务条款": "/ Terms",
    "/ 解决方案": "/ Solutions",
    "/ 试点记录": "/ Pilot log",
    "/ 隐私政策": "/ Privacy",
    "1 对 1 配置": "1-on-1 setup",
    "1. 我们收集什么": "1. What we collect",
    "1. 服务内容": "1. Service",
    "2 周复盘": "2-week review",
    "2. 怎么使用": "2. How we use it",
    "2. 账号与安全": "2. Accounts and security",
    "22 秒演示 · 真实操作": "22s demo · real workflow",
    "22 秒，看一封邮件怎么被审核": "See how one email gets approved in 22 seconds",
    "22 秒，真实鼠标操作，从候选池到发送记录。": "22 seconds of real mouse work, from candidate pool to send log.",
    "3 家走完审核发送，复盘是否扩大。": "Run 3 companies through review and sending, then decide whether to scale.",
    "3. 使用规范": "3. Acceptable use",
    "3. 存储与隔离": "3. Storage and isolation",
    "4. 共享": "4. Sharing",
    "4. 计费": "4. Billing",
    "46 家有邮箱，只有 31 家有官网。很多工厂没有网站，但有业务邮箱。": "46 have email, only 31 have a website. Many factories have no site, but do have a business inbox.",
    "46 家补全了邮箱；52 家没有邮箱的，只保留电话和地址，没有编造。": "46 emails were filled in; for the 52 without email we kept only phone and address, and invented nothing.",
    "5. 你的权利": "5. Your rights",
    "5. 数据归属": "5. Data ownership",
    "52 家没有邮箱，我们留空并标注，没有生成假邮箱；这比“看起来完整”更有用。": "52 companies have no email. We left it blank and flagged it instead of inventing addresses — more useful than looking complete.",
    "6. 联系": "6. Contact",
    "6. 责任限制": "6. Limitation of liability",
    "7. 终止": "7. Termination",
    "8. 联系": "8. Contact",
    "98 家台湾 CNC 企业，从 iyp 采集到进入待审核区，全程可追溯。": "98 Taiwanese CNC companies, from iyp collection to the review queue, fully traceable.",
    "98 家待审核": "98 pending",
    "98 家里 51 家在中部（彰化 29、台中 20），北部 35 家；地推和外联可以按集群打。": "51 of 98 are in central Taiwan (Changhua 29, Taichung 20) and 35 in the north — go-to-market can be grouped by cluster.",
    "API / 私有化": "API / self-hosted",
    "DockJoy · 先审核，再发送": "DockJoy · review first, then send",
    "外贸获客 CRM｜先审核，再发送 · DockJoy": "Export lead-gen CRM — review first, then send · DockJoy",
    "产品功能｜候选审核、评分、起草、发送 · DockJoy": "Product — review, score, draft, send · DockJoy",
    "解决方案｜外贸团队、制造工厂、内贸转出口 · DockJoy": "Solutions for export teams, manufacturers and first-time exporters · DockJoy",
    "定价｜按结果付费，不卖座位 · DockJoy": "Pricing — pay for results, not seats · DockJoy",
    "台湾 CNC 试点记录｜132 张卡片到 98 家企业 · DockJoy": "Taiwan CNC pilot — 132 cards to 98 companies · DockJoy",
    "关于 DockJoy｜为什么把审核做进流程": "About DockJoy — why review is in the workflow",
    "DockJoy 待审核队列界面": "DockJoy review queue UI",
    "DockJoy 待审核队列界面，98 家候选": "DockJoy review queue with 98 candidates",
    "DockJoy 把找客户、评分、写开发信、审核、发送串成一条可控的流水线。发出去的每一封，你都看过。": "DockJoy turns sourcing, scoring, drafting, review and sending into one controlled pipeline. You see every email before it leaves.",
    "DockJoy 提供潜客管理、企业评分、开发信起草、人工审核与邮件发送等能力；具体功能以开通时的版本为准。": "DockJoy provides prospect management, company scoring, drafting, human review and email sending; features depend on the version you are on.",
    "SLA 与审计": "SLA and audit",
    "iyp 关键词搜索 11 页，132 张卡片，剔除广告与重复。": "11 pages of iyp keyword search, 132 cards, ads and duplicates removed.",
    "iyp 详情页的“公司信箱”或企业官网的 mailto 链接；iyp 自家客服邮箱已排除。": "From the company inbox on the iyp detail page or a mailto link on the company site; iyp's own support address was excluded.",
    "“按结果”怎么算": "How pay-for-results works",
    "← 产品": "← Products",
    "← 回到首页": "← Back home",
    "← 定价": "← Pricing",
    "← 解决方案": "← Solutions",
    "← 试点记录": "← Pilot log",
    "① 发之前，人要看过；② 数据不编造，缺就留空；③ 客户资产属于企业，不属于某个销售。": "1) A human sees every email before it sends; 2) no invented data — blanks stay blank; 3) customer assets belong to the company, not one salesperson.",
    "一条可控的获客流水线": "A controlled acquisition pipeline",
    "一次真实的导入试点": "A real import pilot",
    "下一站：关于": "Next: About",
    "下一站：定价": "Next: Pricing",
    "下一站：解决方案": "Next: Solutions",
    "下一站：试点记录": "Next: Pilot log",
    "不做“全自动群发”，不卖来路不明的名单，不把演示话说成已实现的功能。": "No auto-blast, no lists of unknown origin, and no demo talk passed off as shipped features.",
    "不卖席位": "No per-seat pricing",
    "不同阶段，不同打法": "Different stages, different playbooks",
    "不得发送垃圾邮件、未经许可的群发内容，或违反目标市场法律（包括反垃圾邮件与隐私法规）的邮件。": "No spam, no unsolicited bulk email, and nothing that breaks target-market law, including anti-spam and privacy rules.",
    "不推销，给你一个能自己验证的结果。": "No pitch — just a result you can verify yourself.",
    "不是不努力，是时间花错了地方。": "It is not effort that is missing; it is where the hours go.",
    "不是客户证言，是我们自己跑出来的记录。数字可以复核，缺失的也没有补。": "Not testimonials — a record we produced ourselves. The numbers can be checked, and missing values were not filled in.",
    "不绑年框": "No annual lock-in",
    "不限活动数": "Unlimited campaigns",
    "不需要培训一天，按顺序点就行。": "No day-long training — follow the order.",
    "专属成功经理": "Dedicated success manager",
    "中华黄页 iyp.com.tw 的公开搜索结果与商家详情页；未使用爬虫以外的推断。": "Public iyp.com.tw search results and merchant pages; nothing inferred beyond the crawl.",
    "为什么做 DockJoy": "Why we built DockJoy",
    "为什么页面上没有具体金额？": "Why are there no numbers on this page?",
    "主导航": "Main navigation",
    "也可以先看": "You can also read",
    "产业带很集中": "The industrial belt is concentrated",
    "产品": "Products",
    "产品 · DockJoy": "Products · DockJoy",
    "人工勾选后才进客户库；试点期未批量导入。": "Only manually selected rows enter the customer base; nothing was bulk-imported during the pilot.",
    "人工审核后发送": "Human review, then send",
    "人点批准才发，发完留下记录。": "Nothing sends until a person approves it, and the send is logged.",
    "仅在以下情况共享：你明确授权；使用发信服务商（Gmail SMTP / Resend）完成发送；法律法规要求。": "We share only when you authorise it, when a sending provider (Gmail SMTP / Resend) is used to deliver mail, or when the law requires it.",
    "从候选到发送，每个环节都能停下来看清楚。没有黑盒，也没有“发出去再说”。": "From candidate to send, every step can be paused and inspected. No black box, no sending first and asking later.",
    "从候选池到发送记录，真实鼠标操作，没有剪辑技巧。": "From candidate pool to send log, with real mouse work and no editing tricks.",
    "从申请到跑通，通常一周内。": "Usually live within a week of applying.",
    "价格和团队人数无关，和实际产出挂钩。": "Price is tied to output, not headcount.",
    "优先支持": "Priority support",
    "你可以导出、更正或删除你的数据；注销账号后，我们会在合理期限内删除或匿名化处理。": "You can export, correct or delete your data; after account closure we delete or anonymise it within a reasonable period.",
    "你可以随时停止使用；停止后数据按隐私政策处理。": "You can stop at any time; after that, data is handled under the privacy policy.",
    "你录入或导入的数据归你所有。我们仅在提供服务所需的范围内处理。": "Data you enter or import belongs to you. We process it only as needed to provide the service.",
    "你负责账号凭证的保管，并对账号下的操作负责。发现异常应立即通知我们。": "You are responsible for your credentials and activity under the account, and should tell us immediately about anything unusual.",
    "候选池": "Candidate pool",
    "做代工、零件加工，客户集中，决策链长。": "Contract machining and parts, with concentrated customers and long decision chains.",
    "先审核再发，宁可少发，不拿品牌试错。": "Review first, send less if needed, and never gamble with the brand.",
    "先审核，再发送。": "Review first. Then send.",
    "先按月跑，跑不动可以停；不靠长约锁客户。": "Run month by month; stop if it does not work. No long contract to lock you in.",
    "先看数据，再听我们说": "Look at the numbers first",
    "先跑 3 家": "Start with 3 companies",
    "先跑 3 家试点，验证话术": "Run 3 pilot companies to validate the messaging",
    "先跑 3 家，再决定要不要扩": "Run 3 first, then decide whether to scale",
    "先跑通，再扩大。具体价格与计费口径在开通前书面确认，不在页面上写死。": "Prove it first, then scale. Exact pricing and billing terms are confirmed in writing before onboarding, not fixed on this page.",
    "免费试用": "Start free",
    "免费试用 / 申请开通": "Start free / Request access",
    "入库前": "Before import",
    "全自动工具不了解你的业务，发错人、说错话，品牌替你买单。": "Fully automated tools do not know your business. When they email the wrong person, your brand pays for it.",
    "关于": "About",
    "关于 DockJoy →": "About DockJoy →",
    "关于与联系 · DockJoy": "About and contact · DockJoy",
    "内贸转外贸": "Domestic to export",
    "写清行业、目标市场、团队规模，我们回复更快。": "Tell us your industry, target markets and team size for a faster reply.",
    "凭据配置在服务端环境变量里，不放在浏览器；发送失败会明确报错，不伪造“已发送”。": "Credentials live in server-side environment variables, never in the browser; failed sends report an error instead of faking “sent”.",
    "分数 + 理由": "Score + rationale",
    "分数与理由": "Score and rationale",
    "制造工厂": "Manufacturers",
    "加微信": "Add us on WeChat",
    "加微信咨询": "Chat on WeChat",
    "加微信或留联系方式，说明行业。": "Add us on WeChat or leave your contact details and industry.",
    "加微信聊": "Talk on WeChat",
    "去重": "Dedupe",
    "去重后进入待审核": "After dedupe: review queue",
    "双方在开通前定义什么叫“有效”，写进确认单；没达到就不计。": "Both sides define “valid” before onboarding and write it into the confirmation; if it is not met, it is not billed.",
    "发出去收不回": "Sent and out of control",
    "发完留痕": "Send leaves a trail",
    "发现": "Find",
    "发送": "Send",
    "发送与跟进报表": "Sending and follow-up reports",
    "发送前人工批准，避免群发伤域名": "Human approval before sending, so bulk mail does not burn your domain",
    "发送记录": "Send log",
    "发邮件": "Email us",
    "只算有效结果": "Only valid results count",
    "可以。按月合作，提前一个账期告知即可停止，数据仍保留在你的租户里。": "Yes. Monthly terms; give one billing period's notice to stop, and your data stays in your tenant.",
    "可以随时停吗？": "Can we stop anytime?",
    "可复核的细节": "Details you can check",
    "台中市": "Taichung",
    "台账": "Ledger",
    "台账、联系人、发送记录都在你的租户里，可导出、可审计。": "Ledger, contacts and send logs stay in your tenant — exportable and auditable.",
    "同一套产品，按你的客户来源和团队规模调整。": "One product, tuned to your lead sources and team size.",
    "和“全自动工具”的区别": "How we differ from “fully automated” tools",
    "四个动作，一条流水线": "Four actions, one pipeline",
    "回到开头": "Back to top",
    "回到首页": "Back home",
    "因不可抗力、第三方服务（邮件服务商、云平台）故障造成的损失，我们在法律允许范围内不承担责任。": "We are not liable, to the extent the law allows, for losses caused by force majeure or third-party outages (email providers, cloud platforms).",
    "地址与电话": "Address and phone",
    "域名优先、名称规整，98 家进入待审核区。": "Domain first, normalised names second; 98 companies entered the review queue.",
    "培训与陪跑": "Training and hand-holding",
    "外贸团队": "Export teams",
    "外贸获客的三种浪费": "Three kinds of waste in export lead gen",
    "多事业部、代运营或私有化": "Multi-division, agency or self-hosted",
    "多成员协作": "Multi-member collaboration",
    "季度复盘": "Quarterly review",
    "它们在比发得多": "They compete on volume",
    "安政企業有限公司": "Anzheng Enterprise Co., Ltd.",
    "定价": "Pricing",
    "定价 · DockJoy": "Pricing · DockJoy",
    "定价 →": "Pricing →",
    "定价常见问题": "Pricing FAQ",
    "定制": "Custom",
    "定制数据源": "Custom data sources",
    "审核": "Review",
    "审核前，0 封邮件被发出。": "Before review: 0 emails sent.",
    "审核发送": "Review and send",
    "审核后发送": "Send after review",
    "家企业导入试点": "companies in the pilot",
    "家补全了邮箱": "emails filled in",
    "导入 100 家企业": "Import 100 companies",
    "导入候选": "Import candidates",
    "导入试点 · 2026-11": "Import pilot · Nov 2026",
    "封未经审核发出": "emails sent without review",
    "工作时间：周一至周五 9:00–18:00（GMT+8）": "Hours: Mon–Fri, 9:00–18:00 (GMT+8)",
    "已审核 3 · 待审 2": "3 approved · 2 pending",
    "已有外贸团队，需要稳定线索": "Existing export team needing steady leads",
    "已用 98 家台湾 CNC 企业跑通导入试点 · 审核后发送 · 全程留痕": "98 Taiwanese CNC companies piloted · review before send · full audit trail",
    "建租户、配发信、导入第一批候选。": "Create the tenant, configure sending and import the first candidates.",
    "开通流程": "Onboarding steps",
    "归你。企业、联系人、发送记录都在你的租户内，可导出、可审计。": "Yours. Companies, contacts and send logs stay in your tenant — exportable and auditable.",
    "彰化縣": "Changhua County",
    "待审核 · 98 家": "Review queue · 98",
    "待审核区": "Review queue",
    "待审核队列示意": "Review queue preview",
    "微信二维码": "WeChat QR code",
    "微信或邮件，说明行业与目标市场。": "WeChat or email us with your industry and target markets.",
    "怎么开始": "How to start",
    "怎么用：四个动作": "How it works: four actions",
    "成长": "Growth",
    "我们不做的事": "What we do not do",
    "我们协助建租户、配发信、导入试点名单。": "We help create the tenant, configure sending and import the pilot list.",
    "我们在比发得对": "We compete on sending the right ones",
    "我们相信的三件事": "Three things we believe",
    "我们看到的三个事实": "Three things the data showed",
    "我们见过太多“发出去再说”的工具。获客不该拿品牌试错，所以我们把审核做进了流程里。": "We have seen too many tools that send first and ask later. Acquisition should not gamble with the brand, so review is built into the workflow.",
    "打开导航": "Open navigation",
    "扫码备注「试用」和公司名。": "Scan and mention “trial” plus your company name.",
    "批准 / 跳过": "Approve / Skip",
    "批准、跳过、编辑": "Approve, skip, edit",
    "批准才发，发送记录留在台账。": "Approval is required to send; the send stays in the ledger.",
    "批量群发、自动跟进，发错人也不心疼。": "Bulk blasts and auto follow-ups, with little care for who receives them.",
    "把不值得跟进的先划掉，省时间。": "Cross out the ones not worth pursuing and save time.",
    "把加工能力写进草稿，不用套模板": "Write your machining capability into the draft instead of a template",
    "按公司背景写开发信": "Draft outreach from the company context",
    "按公司背景写开发信草稿，不是群发模板。": "Draft each email from the company context, not a bulk template.",
    "按公司背景写草稿": "Draft from company context",
    "按公司背景生成，再按需要改。": "Generated from the company context, then edited as needed.",
    "按地区与行业筛选潜在买家": "Filter potential buyers by region and industry",
    "按导入时间": "By import time",
    "按月结果": "Monthly results",
    "按结果付费，不卖座位": "Pay for results, not seats",
    "按结果结算的范围、口径与周期以开通确认单为准；未约定的部分不收费。": "Scope, definition and cycle of results-based billing are set in the onboarding confirmation; anything not agreed is not charged.",
    "按结果结算需要先确认行业、名单规模和“有效”的定义，统一报价会误导。开通前会给你一份明确的计费说明。": "Results-based billing needs the industry, list size and definition of “valid” first; a flat quote would mislead. You get clear billing terms before onboarding.",
    "按行业、规模、地区等字段打分，并写清楚为什么给这个分。分数是规则算的，不假装是 AI 判断。": "Scored on industry, size and region, with the reason written down. The score is rule-based; we do not pretend it is an AI judgement.",
    "按行业导入候选，先审核再入库": "Import candidates by industry; review before they enter the CRM",
    "按行业或地区导入候选，先进待审核区。": "Import candidates by industry or region; they land in the review queue first.",
    "按行业或地区导入，先落在待审核区。": "Import by industry or region; everything lands in the review queue.",
    "搜索卡片": "Search cards",
    "播放": "Play",
    "播放产品演示": "Play product demo",
    "数据存放在云数据库，按租户隔离；只有你所在租户的成员可以访问。归档采用软删除，联系人不会被物理删除。": "Data sits in a cloud database, isolated per tenant; only members of your tenant can access it. Archiving is a soft delete, so contacts are never physically removed.",
    "数据完整度": "Data completeness",
    "数据归谁？": "Who owns the data?",
    "数据是你的": "The data is yours",
    "数据是怎么来的": "How the data was built",
    "数据来源": "Data source",
    "新北市": "New Taipei City",
    "时间花在找名单": "Time lost to list-building",
    "最后更新：2026-11-16 · 本页为草案，上线前需法务复核。": "Last updated: 16 Nov 2026 · Draft — legal review required before launch.",
    "有产品、有展会和老客户，缺的是持续的新线索。": "A product, trade shows and repeat customers — what is missing is a steady flow of new leads.",
    "有产能、没外贸团队，不知道从哪开始。": "Capacity, no export team, and no clear place to start.",
    "有效企业": "Valid companies",
    "有没有导入客户库": "Was anything imported into the customer base?",
    "服务条款": "Terms of Service",
    "服务条款 · DockJoy": "Terms · DockJoy",
    "条款": "Terms",
    "来自 iyp 商家页；个别电话与地址不符（如金门号段出现在新北企业），原样保留并标注，未修改。": "Taken from iyp merchant pages; where a phone did not match the address (e.g. a Kinmen number on a New Taipei company) we kept it and flagged it rather than editing.",
    "模板化内容点开率低，发多了还伤域名信誉。": "Templated content gets low open rates, and volume damages domain reputation.",
    "欣瑩工業有限公司": "Xinying Industrial Co., Ltd.",
    "每一步都有记录，方便复盘": "Every step is logged for review",
    "每一步都能停下来看清楚，再决定下一步。": "Each step can be paused and inspected before moving on.",
    "每天翻搜索引擎、领英、海关数据，真正谈客户的时间被挤没了。": "Days disappear into search engines, LinkedIn and customs data; the time to actually talk to buyers is squeezed out.",
    "每条草稿对应一家公司和一位联系人，带上行业与地区信息；不是一封模板群发所有人。": "Every draft maps to one company and one contact, with industry and region; it is not one template for everyone.",
    "永騰實業有限公司": "Yongteng Industrial Co., Ltd.",
    "流程约束": "Process constraint",
    "点开可看评分与理由": "Open a row to see score and rationale",
    "生成草稿": "Generate drafts",
    "用于提供获客与邮件发送服务、排查故障、改进产品；不用于向第三方出售数据，也不用于与本服务无关的营销。": "Used to provide acquisition and sending, diagnose issues and improve the product; never sold to third parties or used for unrelated marketing.",
    "用审核流程控制风险": "Use review to control risk",
    "申请开通": "Request access",
    "申请开通 / 免费试用": "Request access / Start free",
    "申请试点": "Apply for the pilot",
    "留个联系方式，我们 1 个工作日内协助配置租户与发信，先跑 3 家试点。": "Leave your contact details; within one business day we help set up the tenant and sending, then run a 3-company pilot.",
    "登录": "Sign in",
    "看一遍，比读十段说明快": "Watch once instead of reading ten paragraphs",
    "看产品": "See products",
    "看分与理由": "See score and rationale",
    "看回复与记录，再决定是否扩大。": "Check replies and logs before scaling.",
    "看结果": "See results",
    "确认": "Confirm",
    "确认试点范围、计费口径与时间。": "Confirm pilot scope, billing terms and timing.",
    "第一次用获客工具，先验证": "First acquisition tool — validate first",
    "系统给每家公司打分，写清楚理由。": "The system scores every company and writes down why.",
    "缺失就是缺失": "Missing means missing",
    "群发邮件没人回": "Bulk email gets no replies",
    "義吉CNC車床機械加工廠": "Yiji CNC Turning Works",
    "联系": "Contact",
    "草稿必须有人点过“批准”才进发送队列；不合适的人直接跳过；批准前可以改文案。": "A draft enters the send queue only after a person clicks “Approve”; unsuitable contacts can be skipped; copy can be edited before approval.",
    "补全": "Enrich",
    "补全邮箱": "Emails found",
    "规模": "Scale",
    "解决方案": "Solutions",
    "解决方案 · DockJoy": "Solutions · DockJoy",
    "解决方案 →": "Solutions →",
    "评分": "Score",
    "评分 + 草稿": "Score + drafts",
    "试切、样品等跟进节点留痕": "Log trial cuts, samples and other checkpoints",
    "试点": "Pilot",
    "试点期全部停留在待审核区，未批量导入正式企业表；是否导入由人工逐家决定。": "During the pilot everything stayed in the review queue; nothing was bulk-imported into the official table. Importing is a per-company human decision.",
    "试点期按约定结算；未产生有效结果不计费。具体以开通确认单为准。": "Pilot billing follows the agreement; no valid results, no charge. The onboarding confirmation governs.",
    "试点记录": "Pilot log",
    "试点记录 · DockJoy": "Pilot log · DockJoy",
    "试点记录 →": "Pilot log →",
    "试点跑出来的数字，不修饰。": "Numbers from the pilot, unvarnished.",
    "试用期收费吗？": "Do you charge during the trial?",
    "谁批的、什么时候发的、发给了谁，都有记录；企业归档是软删除，联系人不会被物理删除。": "Who approved it, when it went out and who received it are all logged; company archiving is a soft delete, so contacts are never physically removed.",
    "账号信息（姓名、邮箱）、你在产品内录入或导入的企业与联系人数据、发送与互动记录，以及必要的访问日志。": "Account details (name, email), company and contact data you enter or import, sending and interaction records, and necessary access logs.",
    "起草": "Draft",
    "跑 3 家": "Run 3 companies",
    "跑通": "Live",
    "跟进记录可追溯": "Every follow-up traceable",
    "这个页面不存在": "This page does not exist",
    "选 3 家真实客户走完审核发送。": "Take 3 real customers through review and sending.",
    "逐家进详情页找邮箱、电话、地址；有官网的再抓联系页。": "Open each detail page for email, phone and address; where a website exists, crawl its contact page too.",
    "邮箱从哪里来": "Where the emails came from",
    "邮箱比官网多": "More emails than websites",
    "配置": "Configure",
    "采集": "Collect",
    "采集或导入的候选先进": "Collected or imported candidates go first into",
    "链接可能写错了，或者页面还没做。回到首页，或者直接看产品。": "The link may be wrong, or the page is not built yet. Go home, or look at the product.",
    "長明工業有限公司": "Changming Industrial Co., Ltd.",
    "隐私": "Privacy",
    "隐私政策": "Privacy Policy",
    "隐私政策 · DockJoy": "Privacy · DockJoy",
    "隐私相关问题请联系": "For privacy questions, contact",
    "页面不存在 · DockJoy": "Page not found · DockJoy",
    "首页": "Home",
    "首页 →": "Home →",
    "（上线前替换）": "(replace before launch)",
    "（占位邮箱，上线前替换）": "(placeholder email, replace before launch)",
    "（占位，上线前替换）。": "(placeholder, replace before launch).",
    "，了解我们怎么跑数据。": " to see how we ran the data.",
    "，人工勾选后才进入正式企业表；同名企业按 BR-02 合并，不重复建。": ", and only after manual selection do they enter the official company table; same-name companies merge per BR-02 instead of duplicating."
  };

  const ATTR_ORIG = new WeakMap();
  const TEXT_ORIG = new WeakMap();
  let lang = "zh";
  const titleEl = document.querySelector("title");
  const titleZh = titleEl ? titleEl.textContent : "";
  const descEl = document.querySelector('meta[name="description"]');
  const descZh = descEl ? descEl.getAttribute("content") : "";

  const PAGE_DESC = {
    "index.html": "DockJoy turns sourcing, scoring, drafting, review and sending into one controlled acquisition pipeline. You see every email before it leaves.",
    "product.html": "DockJoy product capabilities: review queue, scoring, drafting, human approval, sending and ledger.",
    "solutions.html": "Acquisition playbooks for export teams, manufacturers and domestic-to-export companies.",
    "pricing.html": "DockJoy is pay-for-results: start with a small pilot, then scale monthly. No seats, no annual lock-in.",
    "cases.html": "Real data from the Taiwan CNC import pilot: 132 cards, 98 companies, 46 emails.",
    "about.html": "About DockJoy, how to request access and reach us on WeChat.",
    "privacy.html": "How DockJoy collects, uses and protects data.",
    "terms.html": "DockJoy terms of service.",
    "404.html": "Page not found. Go home or look at the product."
  };


  function translateNode(node) {
    const raw = node.nodeValue || "";
    const key = raw.trim();
    if (!key || !DICT[key]) return;
    if (!TEXT_ORIG.has(node)) TEXT_ORIG.set(node, raw);
    const en = DICT[key];
    node.nodeValue = raw.replace(key, en);
  }

  function translateAttr(el, name) {
    const raw = el.getAttribute(name);
    if (!raw) return;
    const key = raw.trim();
    if (!DICT[key]) return;
    if (!ATTR_ORIG.has(el)) ATTR_ORIG.set(el, {});
    const store = ATTR_ORIG.get(el);
    if (!(name in store)) store[name] = raw;
    el.setAttribute(name, DICT[key]);
  }

  function walk(root, fn) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (p.closest("script,style,noscript,[data-no-i18n]")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    let n;
    while ((n = walker.nextNode())) fn(n);
  }

  function apply(next) {
    lang = next;
    document.documentElement.setAttribute("lang", next === "en" ? "en" : "zh-CN");
    if (titleEl) titleEl.textContent = next === "en" ? (DICT[titleZh.trim()] || titleZh) : titleZh;
    if (next === "en") {
      walk(document.body, translateNode);
      document.querySelectorAll("[placeholder],[title],[aria-label],[alt]").forEach((el) => {
        ["placeholder", "title", "aria-label", "alt"].forEach((a) => translateAttr(el, a));
      });
      if (descEl) {
        const file = location.pathname.split("/").pop() || "index.html";
        descEl.setAttribute("content", PAGE_DESC[file] || PAGE_DESC["index.html"]);
      }
      const og = document.querySelectorAll('meta[property^="og:"]');
      og.forEach((m) => translateAttr(m, "content"));
    } else {
      walk(document.body, (n) => {
        const orig = TEXT_ORIG.get(n);
        if (orig !== undefined) n.nodeValue = orig;
      });
      document.querySelectorAll("[placeholder],[title],[aria-label],[alt]").forEach((el) => {
        const store = ATTR_ORIG.get(el);
        if (!store) return;
        Object.entries(store).forEach(([k, v]) => el.setAttribute(k, v));
      });
      if (descEl) descEl.setAttribute("content", descZh);
    }
    localStorage.setItem("dockjoy_site_lang", next);
    updateButtons();
  }

  function updateButtons() {
    document.querySelectorAll("[data-lang]").forEach((b) => {
      const on = b.getAttribute("data-lang") === lang;
      b.style.background = on ? "rgba(243,243,240,.16)" : "transparent";
      b.style.color = on ? "#F3F3F0" : "#A3A39D";
      b.setAttribute("aria-pressed", String(on));
    });
  }

  function mount() {
    const saved = localStorage.getItem("dockjoy_site_lang");
    apply(saved === "en" ? "en" : "zh");
    const actions = document.querySelector(".nav-actions");
    if (!actions || document.getElementById("langSwitch")) return;
    const box = document.createElement("div");
    box.id = "langSwitch";
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", "Language");
    box.style.cssText = "display:inline-flex;border:1px solid rgba(243,243,240,.22);border-radius:6px;overflow:hidden;margin-right:6px;color:#F3F3F0";
    box.innerHTML =
      '<button type="button" data-lang="zh" style="border:0;background:transparent;color:inherit;font:inherit;font-size:11px;padding:5px 7px;cursor:pointer">中文</button>' +
      '<button type="button" data-lang="en" style="border:0;background:transparent;color:inherit;font:inherit;font-size:11px;padding:5px 7px;cursor:pointer">EN</button>';
    actions.insertBefore(box, actions.firstChild);
    box.querySelectorAll("[data-lang]").forEach((b) =>
      b.addEventListener("click", () => apply(b.getAttribute("data-lang"))),
    );
    updateButtons();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();

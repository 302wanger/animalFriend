# animalFriend
A website to show some cat and dog, just for these people who can't feed. Use img or video to please youself!
这是一个尝试，所谓云吸猫云吸狗。

个人尝试了下，一开始就有些停不下来。

多看萌宠，好处多多：
1. 缓解了我在大城市里的孤独感
2. 对我的抑郁症有疗效


### 对应文件及文件夹的用处：

1. models: 存放操作数据库的文件
2. public: 存放静态文件，如样式、图片等
3. routes: 存放路由文件
4. views: 存放模板文件
5. index.js: 程序主文件
6. package.json: 存储项目名、描述、作者、依赖等等信息
7. config: 默认的配置信息
8. middlewares: 权限控制，用于验证用户信息

### 对应模块的用处：

1. express: web 框架
2. express-session: session 中间件
3. connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
3. connect-flash: 页面通知的中间件，基于 session 实现
4. ejs: 模板
5. express-formidable: 接收表单及文件上传的中间件
6. config-lite: 读取配置文件
7. marked: markdown 解析
8. moment: 时间格式化
9. mongolass: mongodb 驱动
10. objectid-to-timestamp: 根据 ObjectId 生成时间戳
11. sha1: sha1 加密，用于密码加密
12. winston: 日志
13. express-winston: express 的 winston 日志中间件

提示：
1. 这些包最好的安装方法：
    - 第一步：直接copy package.json这个文件
    - 第二步：进入animalFriend 运行 yarn install
    -
2. 但是我没有用这种方法，我一个个安装的，只为了了解各个包，前期可以这么做，后期熟悉后尽量用第一个方法

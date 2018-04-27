// 首页 - 首页
module.exports = async (ctx, next) => {
    ctx.body = '<div><a href="/">首页</a> <a href="/news">新闻频道</a></div>' +
        '<h1>首页页面</h1>';
};
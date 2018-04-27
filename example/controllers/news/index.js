// 新闻 - 首页
module.exports = async (ctx, next) => {
    ctx.body = '<div><a href="/">首页</a> <a href="/news">新闻频道</a></div>' +
        '<h1>新闻首页页面</h1><a href="/news/list">新闻列表页</a>';
};
// 新闻 - 详情页
module.exports = async (ctx, next) => {
    const id = ctx.request.query.id || 0;
    ctx.body = '<div><a href="/">首页</a> <a href="/news">新闻频道</a></div>' +
        '<h1>新闻详情页面'+id+'</h1><a href="/news/list">新闻列表页</a>';
};
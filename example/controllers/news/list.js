// 新闻 - 列表页
module.exports = async (ctx, next) => {
    ctx.body = '<div><a href="/">首页</a> <a href="/news">新闻频道</a></div>' +
        '<h1>新闻列表页面</h1><a href="/news/list">新闻列表页</a>' +
        '<ul>' +
        '<li><a href="/news/view?id=1">新闻1</a></li>' +
        '<li><a href="/news/view?id=2">新闻2</a></li>' +
        '</ul>';
};
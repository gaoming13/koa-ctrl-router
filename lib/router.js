const fs = require('fs');
const path = require('path');

/**
 * 路由
 *
 * @param controllerRootPath 控制器文件夹(绝对路径)
 * @returns {Function}
 */
module.exports = function (controllerRootPath) {
    return async function (ctx, next) {
        // 控制器文件夹是否存在
        if (! fs.existsSync(controllerRootPath)) {
            throw new Error(`controllerRootPath: '${controllerRootPath}' not exist!`);
        }

        // 控制器名称
        let pathArr = ctx.url.split('?')[0].split('/').filter(v => v !== '');
        const [controllerName = 'index', actionName = 'index'] = pathArr;

        // 控制器文件路径
        const actionFilePath = path.resolve(controllerRootPath, `${controllerName}/${actionName}.js`);

        // 控制器存在
        if (fs.existsSync(actionFilePath)) {
            await require(actionFilePath)(ctx, next);
        }
        next();
    }
};
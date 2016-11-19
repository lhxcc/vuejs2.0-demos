// 模拟数据
const productDatas = [
    {"id": 1, "title": "机械键盘", "color": "黑色", "price": 499.00, "stock": 6, "img": "jianpan.jpg"},
    {"id": 2, "title": "Apple MacBook Pro", "color": "银色", "price": 13688.00, "stock": 3, "img": "mac.jpg"},
    {"id": 3, "title": "小霸王游戏机", "color": "杂色", "price": 189.00, "stock": 5, "img": "youxiji.jpg"},
    {"id": 4, "title": "机械键盘", "color": "黑色", "price": 499.00, "stock": 6, "img": "jianpan.jpg"},
]

// 模拟ajax请求（这里替换成你真正的ajax请求即可）
export default {
    getProducts (cb){

        if (Math.random() > 0.3) {
            cb(productDatas)
        } else {
            cb(null)
        }

    }
}
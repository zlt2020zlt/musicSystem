// 节流
export function throttle(fn, interval) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > interval) {
            fn.apply(context, args);
            previous = now;
        }
    }
}

// 截取字符串
export function cut_str(str, len) {
    let char_length = 0
    for (let i = 0; i < str.length; i++) {
        let son_str = str.charAt(i)
        encodeURI(son_str).length > 2 ? char_length += 1 : char_length += 0.5
        if (char_length >= len) {
            let sub_len = char_length === len ? i + 1 : i
            return str.substr(0, sub_len)
                // eslint-disable-next-line no-unreachable
            break
        }
    }
}
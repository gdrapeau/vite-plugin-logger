export function logger(message,logSource) {
    return {
        name: 'logger',
        transform: function(src, id) {
            console.log(message,id)
            if (logSource) console.log('source=\n',src)
            return undefined
        }
    }
 }

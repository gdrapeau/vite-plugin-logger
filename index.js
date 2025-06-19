export function logger(message) {
    return {
        name: 'logger',
        transform: function(src, id) {
            console.log(message,id)
            return undefined
        }
    }
 }

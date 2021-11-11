import backgrounds from '../assets/backgrounds'

class GreeterUtil {
    dirlist(path) {
        if (path === '/usr/share/backgrounds') {
            return backgrounds
        }
    }
}

export default GreeterUtil

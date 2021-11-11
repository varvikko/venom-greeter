import greeterutil from '../utils/greeterUtil'

export function getBackgrounds(path = '/usr/share/backgrounds') {
    const backgrounds = []

    greeterutil.dirlist(path).forEach((dir) => {
        if (/^.*\.(png|jpe?g)$/.test(dir)) {
            backgrounds.push(dir)
        } else if (/^[^.]+$/.test(dir)) {
            backgrounds.push(...getBackgrounds(dir))
        }
    })

    return backgrounds
}

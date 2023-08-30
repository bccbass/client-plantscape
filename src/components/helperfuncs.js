const upperCaser = (name) => name.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')


export {upperCaser}
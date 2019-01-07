function getAllProperties(object) {
    let properties = [];
    while (Object.getPrototypeOf(object) !== null &&
     typeof Object.getPrototypeOf(object) !== 'undefined') {
        object = Object.getPrototypeOf(object);
        let objectProperties = Object.getOwnPropertyNames(object);
        for (let i = 0; i < objectProperties.length; i++) {
            if (properties.indexOf(objectProperties[i]) === -1) {
                properties.push(objectProperties[i]);
            }
        }
    }
    return properties;
}

function getAllDescriptors(object) {
    let descriptors = {};
    while (Object.getPrototypeOf(object) !== null &&
     typeof Object.getPrototypeOf(object) !== 'undefined') {
        object = Object.getPrototypeOf(object);
        let objectProperties = Object.getOwnPropertyNames(object);
        for (let i = 0; i < objectProperties.length; i++) {
            let descriptor = Object.getOwnPropertyDescriptor(object, objectProperties[i]);
            if (!Object.getOwnPropertyNames(descriptors).includes(descriptor)) {
                descriptors[objectProperties[i]] = descriptor;
            }
        }
    }
    return descriptors;
}

function extendAll(object) {
    let properties = getAllProperties(object);
    let descriptors = getAllDescriptors(object);
    for (let property in properties) {
        if (!getAllProperties(this).includes(properties[property])) {
            let descriptor = descriptors[properties[property]];
            Object.defineProperty(this, properties[property], descriptor);
        }
    }
}
exports.extendAll=extendAll;
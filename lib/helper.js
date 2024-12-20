export function findValueById(array, id){
    return array.find(item=>item.id==id).value
}

export function findFilenameById(array, id){
    //const field = array.find(item=>item.id==id)
    const field = document.querySelector(`#formId_${id}`)
    console.log("🚀 ~ file: helper.js ~ line 7 ~ findFilenameById ~ field", field)
    return field?.files[0].name
}
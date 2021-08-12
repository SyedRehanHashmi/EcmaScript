const subExist = (str) => { 
    const arrStr = str.split(" ");
    let count = 0;
    arrStr.forEach((element) => {
        if (element.toUpperCase() == "lorem".toUpperCase()) {
            count = count + 1;
        }
    });
    return count;
};
const strData =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

console.log(subExist(strData));
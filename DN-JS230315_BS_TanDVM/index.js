var rootElement = document.querySelector("#root");
rootElement.innerHTML = "<h1>Xin ch\u00E0o Rekkei</h1>";
var sex;
(function (sex) {
    sex[sex["MALE"] = 0] = "MALE";
    sex[sex["FEMALE"] = 1] = "FEMALE";
})(sex || (sex = {}));
var students = [
    { name: "Tân Đặng", age: 30, sex: sex.MALE },
    { name: "Hoàng Nguyễn", age: 29, sex: sex.MALE },
    { name: "Khoa Trần", age: 29, sex: sex.MALE },
    { name: "Tùng Nguễn", age: 36, sex: sex.MALE },
    { name: "Nhàn Thái", age: 33, sex: sex.FEMALE },
    { name: "Phúc Nguyễn", age: 22, sex: sex.MALE },
];
var Student_TbodyElement = document.querySelector("#Student_Tbody");
var content = "";
students.forEach(function (student, index) {
    content += "\n          <tr>\n               <td>".concat(student.name, "</td>\n               <td>").concat(student.age, "</td>\n               <td>").concat(student.sex === sex.MALE ? "Male" : "Female", "</td>\n               <td>\n                    <button type=\"button\" onclick=\"handleEdit(").concat(index, ")\">Edit</button>\n               </td>\n          </tr>");
});
Student_TbodyElement.innerHTML = content;
var editIndex;
var handleEdit = function (index) {
    editIndex = index;
    var student = students[index];
    if (student) {
        document.querySelector('#name').value = student.name;
        document.querySelector('#age').value = student.age.toString();
        document.querySelector('#sex').value = student.sex === sex.MALE ? 'Male' : 'Female';
    }
    console.log(index);
};




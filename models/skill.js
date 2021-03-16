const skills = [
    {id:001, skill: 'HTML', description: "Understand and can implement HTML for front and back end"},
    {id:002, skill: 'CSS', description: "Understand and can implement CSS for clear and stylish view communication"},
    {id:003, skill: 'JavaScript', description: "Understand can can implement JavaScript for frant and back end"},
    {id:004, skill: 'Node and Express', description: "In progress...."}
]

module.exports = {
    getAll,
    getOne,
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
}


let skills = [
    {id:001, skill: 'HTML', description: "Understand and can implement HTML for front and back end"},
    {id:002, skill: 'CSS', description: "Understand and can implement CSS for clear and stylish view communication"},
    {id:003, skill: 'JavaScript', description: "Understand can can implement JavaScript for frant and back end"},
    {id:004, skill: 'Node and Express', description: "In progress...."},
]

module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteSkill,
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
}

function create(skill) {
    skill.id = skills[skills.length - 1].id + 1;
    skill.description = "in progress..."
    skills.push(skill);
}

function deleteSkill(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

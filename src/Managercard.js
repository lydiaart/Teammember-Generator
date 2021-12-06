const managercard = (manager) => {
return `
<div class="col-4 my-4 d-flex justify-content-center">
<div class="card shadow-sm mb-5 rounded" style="width: 20rem;">

    <div class="card-body bg-primary">
        <h5 class="card-title text-light">${manager.name}</h5>
        <h6 class="card-title text-light"><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h6>
    </div>
    <div class="card-body bg-gray">
        <ul class="list-group list-group-flush border">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
    
</div>
</div>
`
}

module.exports = managercard;
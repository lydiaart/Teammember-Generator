const interncard = (intern) => {
    return `
    <div class="col-4 my-4 d-flex justify-content-center">
                <div class="card shadow-sm mb-5 rounded" style="width: 20rem;">

                    <div class="card-body bg-primary">
                        <h5 class="card-title text-light">${intern.name}</h5>
                        <h6 class="card-title text-light"><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h6>
                    </div>
                    <div class="card-body bg-gray">
                        <ul class="list-group list-group-flush bg-light border">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                    
                </div>
                </div>
    `
}

module.exports = interncard;
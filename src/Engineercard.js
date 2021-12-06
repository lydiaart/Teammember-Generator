const engineercard = (engineer) => {
return `
<div class="col-4 my-4 d-flex justify-content-center">
                <div class="card shadow-sm mb-5 rounded" style="width: 20rem;">

                    <div class="card-body bg-primary">
                        <h5 class="card-title text-light">${engineer.name} </h5>
                        <h6 class="card-title text-light"><i class="fas fa-glasses"></i> ${engineer.getRole()}</h6>
                    </div>
                    <div class="card-body bg-gray">
                        <ul class="list-group list-group-flush bg-light border">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
                        </ul>
                    </div>
                    
                </div>
 </div>

`
}

module.exports = engineercard;
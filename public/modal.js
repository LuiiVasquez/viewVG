var modalWrap = null;

/* ============ Modal con una imganen ============ */
const showModalImg = (
    title,
    photo,
    cap,
    description,
    servicios,
    personal,
    //yesBtnLabel = 'yes',
    noBtnLabel = 'cancel',
    //callback
) => {

    // para no crear muchos boxes
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                    <button type="button" class="btn-close" id="cerrar" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="img360">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="4000">
                                    <img class="img-modal" src="${photo}" alt="${title}" width="100%" height="400">
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap} </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4> Descripción </h4>
                        ${description}
                        <hr>
                        <h4> Servicios </h4>
                        ${servicios}
                        <hr>
                        <h4> Personal </h4>
                        ${personal}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `
    //button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">${yesBtnLabel}</button>
    //modalWrap.querySelector('.modal-success-btn').onclick = callback;

    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}

/* ============ Modal con un 360 ============ */
const showModal = (
    title,
    photo,
    cap,
    description,
    servicios,
    personal,
    //yesBtnLabel = 'yes',
    noBtnLabel = 'cancel',
    //callback
) => {

    // para no crear muchos boxes
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                    <button type="button" class="btn-close" id="cerrar" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="img360">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="4000">
                                    <iframe class="ifr-360-1 d-block w-100" src="${photo}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap} </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4> Descripción </h4>
                        ${description}
                        <hr>
                        <h4> Servicios </h4>
                        ${servicios}
                        <hr>
                        <h4> Personal </h4>
                        ${personal}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `
    //button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">${yesBtnLabel}</button>
    //modalWrap.querySelector('.modal-success-btn').onclick = callback;

    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}

/* ============ Modal con 2 360 ============ */
const showModal2 = (
    title,
    photo1,
    cap1,
    photo2,
    cap2,
    description,
    servicios,
    personal,
    //yesBtnLabel = 'yes',
    noBtnLabel = 'cancel',
    //callback
) => {

    // para no crear muchos boxes
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                    <button type="button" class="btn-close" id="cerrar" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="img360">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="4000">
                                    <iframe class="ifr-360 d-block w-100" src="${photo1}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap1} </h5>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <iframe class="ifr-360 d-block w-100" src="${photo2}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap2} </h5>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4> Descripción </h4>
                        ${description}
                        <hr>
                        <h4> Servicios </h4>
                        ${servicios}
                        <hr>
                        <h4> Personal </h4>
                        ${personal}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `
    //button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">${yesBtnLabel}</button>
    //modalWrap.querySelector('.modal-success-btn').onclick = callback;

    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}

/* ============ Modal con 5 360 ============ */
const showModal3 = (
    title,
    photo1,
    cap1,
    photo2,
    cap2,
    photo3,
    cap3,
    photo4,
    cap4,
    photo5,
    cap5,
    description,
    servicios,
    personal,
    //yesBtnLabel = 'yes',
    noBtnLabel = 'cancel',
    //callback
) => {

    // para no crear muchos boxes
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                    <button type="button" class="btn-close" id="cerrar" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="img360">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="4000">
                                    <iframe class="ifr-360 d-block w-100" src="${photo1}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap1} </h5>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <iframe class="ifr-360 d-block w-100" src="${photo2}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap2} </h5>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <iframe class="ifr-360 d-block w-100" src="${photo3}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap3} </h5>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <iframe class="ifr-360 d-block w-100" src="${photo4}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap4} </h5>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <iframe class="ifr-360 d-block w-100" src="${photo5}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap5} </h5>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4> Descripción </h4>
                        ${description}
                        <hr>
                        <h4> Servicios </h4>
                        ${servicios}
                        <hr>
                        <h4> Personal </h4>
                        ${personal}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `
    //button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">${yesBtnLabel}</button>
    //modalWrap.querySelector('.modal-success-btn').onclick = callback;

    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}

/* ============ Modal solo imagen 360 ============ */
const showModalArea = (
    title,
    photo,
    cap,
    location
) => {

    // para no crear muchos boxes
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                    <button type="button" class="btn-close" id="cerrar" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="img360">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="4000">
                                    <iframe class="ifr-360-1 d-block w-100" src="${photo}" frameborder="0" height="500px" width="100%" allowfullscreen="true"></iframe>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> ${cap} </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <h4> Ubicación </h4>
                        ${location}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    `
    //button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal">${yesBtnLabel}</button>
    //modalWrap.querySelector('.modal-success-btn').onclick = callback;

    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}
















// modalWrap.innerHTML = `
// <div class="modal fade" tabindex="-1">
//     <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title">${title}</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//                 <div class="contimg">
//                     <iframe src="${photo}" frameborder="0" height="350px" width="75%" allowfullscreen="true"></iframe>
//                 </div>
//                 <hr>
//                 <div>
//                     <h4> Descripcion </h4>
//                     <p>${description}</p>
//                     <hr>
//                     <h4> Personal </h4>
//                     <p>${personal}</p>
//                 </div>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${noBtnLabel}</button>
                
//             </div>
//         </div>
//     </div>
// </div>
// `; 
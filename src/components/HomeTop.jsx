import React from 'react';

function HomeTop() {
  return (
    <div>
      <div className="container-fluid position-relative overflow-hidden mt-2 text-center bg-light mf-0">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Título legal</h1>
          <p className="lead font-weight-normal">E uma descrição engraçadinha, para continuar. Alavanque seus esforços em marketing com esse exemplo, baseado nas páginas de marketing da Apple.</p>
          <a className="btn btn-outline-secondary" href="/">Em breve</a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>
    </div>
  );
}

export default HomeTop;

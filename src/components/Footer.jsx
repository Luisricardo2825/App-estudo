import React from 'react';

function Footer() {
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10" /><line x1="14.31" y1="8" x2="20.05" y2="17.94" /><line x1="9.69" y1="8" x2="21.17" y2="8" /><line x1="7.38" y1="12" x2="13.12" y2="2.06" /><line x1="9.69" y1="16" x2="3.95" y2="6.06" /><line x1="14.31" y1="16" x2="2.83" y2="16" /><line x1="16.62" y1="12" x2="10.88" y2="21.94" /></svg>
          <small className="d-block mb-3 text-muted">© 2017-2018</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="/">Algo legal</a></li>
            <li><a className="text-muted" href="/">Feature aleatória</a></li>
            <li><a className="text-muted" href="/">Recursos para times</a></li>
            <li><a className="text-muted" href="/">Coisas para desenvolvedores</a></li>
            <li><a className="text-muted" href="/">Outra coisa legal</a></li>
            <li><a className="text-muted" href="/">Último item</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Fontes</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="/">Fonte</a></li>
            <li><a className="text-muted" href="/">Nome da fonte</a></li>
            <li><a className="text-muted" href="/">Outra fonte</a></li>
            <li><a className="text-muted" href="/">Fonte final</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Fontes</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="/">Negócios</a></li>
            <li><a className="text-muted" href="/">Educação</a></li>
            <li><a className="text-muted" href="/">Governo</a></li>
            <li><a className="text-muted" href="/">Jogos</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Sobre</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="/">Equipe</a></li>
            <li><a className="text-muted" href="/">Locais</a></li>
            <li><a className="text-muted" href="/">Privacidade</a></li>
            <li><a className="text-muted" href="/">Termos</a></li>
          </ul>
        </div>
      </div>
    </footer>

  );
}

export default Footer;

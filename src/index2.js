import React, {useState, useEffect, Fragment} from 'react'
import { NavLink } from 'react-router-dom'

document.title = "Landing Page";


function Index2(){
    return(
<section>
    <h2 class="ASO">ASO.com</h2>
    <h1 class="Titulo">
        Bem-Vindo ao ASO!
    </h1>
    <h1 class="Titulo2">
        O sistema de Agendamento de Serviços Online!
    </h1>
    <h2 class="SubTitulo">
        Venha fazer parte do nosso time! Você, profissional, demonstra suas habilidades, enquanto os clientes, se
        satisfazem com o seu serviço.<br />
        Ficaremos animados com os seus resultados e conseguiremos mais credibilidade para você e para o nosso site!
    </h2>
    <NavLink to="login"> 
    <div>
    <button type="button" class="Registrar"> REGISTRE-SE AGORA </button>
    </div>
    </NavLink>
    
    <section class="Seção">
        <h1 class="TituloMeio">NA ASO, VOCÊ PODE</h1>
        <div class="Lado1">
            <div class="Calendario">
                <img src="image/calendario.svg" alt="calendário" />
                    <h2 class="Agendar">Agendar seus serviços</h2>
                    <h3 class="Agendar2">Temos diversas opções disponíveis! <br />Você agenda conforme sua demanda.</h3>
            </div>
                
                <div class="Lupa">
                    <img src="image/lupa.svg" alt="lupa" />
                    <h2 class="Encontrar">Encontrar o que procura</h2>
                    <h3 class="Encontrar2">Em poucos minutos, você encontra <br />a solução do seu problema!</h3>
                </div>
        </div>
    
    <div class="Lado2">
        <div class="Atualizar">
            <img src="image/atualizacao.svg" alt="atualização" />
            <h2 class="Catalogo">Catálogo Atualizado</h2>
            <h3 class="Catalogo2">Há sempre novas opções para escolher!</h3>
        </div>
        <div class="Avaliar">
            <img src="image/avaliacao.svg" alt="" />
            <h2 class="Selecionar">Saiba qual selecionar</h2>
            <h3 class="Selecionar2">Todos os serviços são avaliados de acordo <br />com a satisfação dos clientes!</h3>
        </div>
    </div>
</section>
</section>
);
}

export default Index2;
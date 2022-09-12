import { getFirestore, doc, getDoc, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";



const relatorio = document.querySelector('[data-js="relatorio"]');
var firebaseConfig = {
  apiKey: "AIzaSyAkhTtORnvWoZCOUIvgzC_yAj5azjbuykU",
  authDomain: "r4500-f2513.firebaseapp.com",
  projectId: "r4500-f2513",
  storageBucket: "r4500-f2513.appspot.com",
  messagingSenderId: "355568894424",
  appId: "1:355568894424:web:45303faab5f0ea8245b2ad",
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app2 = initializeApp(firebaseConfig);
const db = firebase.firestore();
const datab = getFirestore(app2);

let tela = localStorage.getItem('clube');
console.log(tela);

window.onload = function (){
    const q = query(collection(datab, "TESTE"), where("Clube", "==", tela));
    getDocs(q).then(snapshot => {
        const relatorios = snapshot.docs.reduce((acc,doc) => {
            const {
                Clube,
                Cidade,
                Estado,
                Mes_relatorio,
                Presidencia_palavras_diretor,
                Presidencia_myrotary_atualizado,
                Vicep_palavras_diretor,
                Secretaria_descricao_atividades,
                Secretaria_palavras_diretor,
                Secretaria_numero_atas_confeccionadas,
                Secretaria_percentual_diretores_relatorios,
                Secretaria_cadastro_mdio_atualizado,
                Tesouraria_descricao_atividades,
                Tesouraria_palavras_diretor,
                Tesouraria_entradas,
                Tesouraria_saidas,
                Tesouraria_saldo_obtido_mes,
                Tesouraria_link_drive_comprovantes,
                Administracao_descricao_atividades,
                Administracao_palavras_diretor,
                Administracao_meta_cumprida,
                Dqa_descricao_atividades,
                Dqa_palavras_diretor,
                Dqa_associados_afastados,
                Dqa_empossados_mes,
                Dqa_associados_desligados,
                Dqa_numero_associados,
                Ip_descricao_atividades,
                Ip_palavras_diretor,
                Ip_links_importantes,
                Ph_descricao_atividades,
                Ph_palavras_diretor,
                Ph_planejamento_mes_seguinte,
                Fr_descricao_atividades,
                Fr_palavras_diretor,
                Fr_tema_relacionado_no_mes,
                Ri_descricao_atividades,
                Ri_palavras_diretor,
                Dei_descricao_atividades,
                Dei_palavras_diretor,
    
            } = doc.data()
    
            acc += `<form id="clearFrom">
            <div class="row g-3">
                <h5 class="text-dark">Informações Obrigatórias</h5>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Clube: </b> </label>
                    <div class="form-control border-0" style="height: 55px;">
                        <p> ${Clube} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Cidade: </b> </label>
                    <div class="form-control border-0" type="text" style="height: 55px;">
                        <p> ${Cidade} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Estado: </b> </label>
                    <div class="form-control border-0" type="text" style="height: 55px;">
                        <p> ${Estado} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b>  Mês do relatorio: </b> </label>
                    <div class="form-control border-0" type="text" style="height: 55px;">
                        <p>${Mes_relatorio} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Presidência</h5>
                
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do Presidente: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p> ${Presidencia_palavras_diretor} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> O cadastro no portal MyRotary está atualizado? </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p> ${Presidencia_myrotary_atualizado} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Vice-presidência</h5>
                <div class="col-12">
                    <label> <b> Palavras do Vice-Presidente: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p> <p></p> ${Vicep_palavras_diretor} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Secretaria</h5>
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p> ${Secretaria_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor de secretaria: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p> <p></p> ${Secretaria_palavras_diretor} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Número de atas: </b> </label>
                    <div class="form-control border-0" type="number" style="height: 55px;">
                        <p> ${Secretaria_numero_atas_confeccionadas} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b>Percentual de diretores no prazo: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p> ${Secretaria_percentual_diretores_relatorios} </p>
                    </div>
                </div>
    
                <div class="row justify-content-center" style="margin-top: 10px;">
                    <div class="col-6 ">
                        <label> <b>O cadastro no portal da MDIO Brasil está atualizado?</b> </label>
                        <div class="form-control border-0" type="text" style="height: 55px;">
                                ${Secretaria_cadastro_mdio_atualizado} 
                        </div>
                    </div>
                </div>
    
                <h5 class="text-dark top">Tesouraria</h5>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades:  </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Tesouraria_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor de tesouraria: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Tesouraria_palavras_diretor} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Número de entradas: </b> </label>
                    <div class="form-control border-0" type="number" style="rows="6" cols="115";">
                        <p> ${Tesouraria_entradas} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Saídas: </b> </label>
                    <div class="form-control border-0" type="number" style="height: 55px;">
                        <p> ${Tesouraria_saidas} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Saldo obtido: </b> </label>
                    <div class="form-control border-0" type="number" style="height: 55px;">
                        <p> ${Tesouraria_saldo_obtido_mes} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Link dos Comprovantes: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";"">
                        <p> ${Tesouraria_link_drive_comprovantes} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Administração</h5>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";"">
                        <p> ${Administracao_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor de administração:  </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";"">
                        <p> ${Administracao_palavras_diretor} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Metas cumpridas do diretor de administração:  </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";"">
                        <p> ${Administracao_meta_cumprida} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Desenvolvimento do Quadro Associativo</h5>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades:  </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Dqa_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor de DQA: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Dqa_palavras_diretor} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Número de afastados de suas atividades no mês: </b> </label>
                    <div class="form-control border-0" type="number" style="height: 55px;">
                        <p>  ${Dqa_associados_afastados} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Número de empossados no mês: </b> </label>
                    <div class="form-control border-0" type="number" style="height: 55px;">
                        <p>  ${Dqa_empossados_mes} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Número de desligados no mês: </b> </label>
                    <div class="form-control border-0" type="number" style="height: 55px;">
                        <p>  ${Dqa_associados_desligados} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Número de Associados do clube: </b> </label>
                    <div class="form-control border-0" type="number" style="height: 55px;">
                        <p>  ${Dqa_numero_associados} </p>
                    </div>
                </div>
                <div><p>Obs.: É essencial que todas as mudanças no quadro associativos sejam incluídas no portal da MDIO Brasil</p></div>
    
                <h5 class="text-dark top">Imagem Pública</h5>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades:  </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Ip_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor de Imagem: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Ip_palavras_diretor} </p>
                    </div>
                </div>
    
                <div class="col-12">
                    <label> <b> Links importantes: </b> </label>
                    <div class="form-control border-0" type="url" style="rows="6" cols="115";">
                        <p>  ${Ip_links_importantes} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Projetos Humanitários</h5>
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades:  </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Ph_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor de Imagem: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Ph_palavras_diretor} </p>
                    </div>
                </div>
    
                <div class="col-12">
                    <label> <b> Planejamentos da diretoria para o próximo mês: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Ph_planejamento_mes_seguinte} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Fundação Rotária</h5>
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Fr_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor de FR: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Fr_palavras_diretor} </p>
                    </div>
                </div>
                <div class="col-12">
                    <label> <b> Qual tema relacionado a Fundação Rotária foi trabalhado no clube esse mês?: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Fr_tema_relacionado_no_mes} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Relações Internacionais</h5>
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades:: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Ri_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor de RI: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p> ${Ri_palavras_diretor} </p>
                    </div>
                </div>
    
                <h5 class="text-dark top">Diversidade, Equidade e Inclusão</h5>
                <div class="col-12 col-sm-6">
                    <label> <b> Descrição das atividades:: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p>  ${Dei_descricao_atividades} </p>
                    </div>
                </div>
    
                <div class="col-12 col-sm-6">
                    <label> <b> Palavras do diretor do DEI: </b> </label>
                    <div class="form-control border-0" type="text" style="rows="6" cols="115";">
                        <p> ${Dei_palavras_diretor} </p>
                    </div>
                </div>
            </div>
            </form>`
            return acc
            }, '')
            relatorio.innerHTML = relatorios;
            localStorage.clear();
            })}
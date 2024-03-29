//Unique Firebase Object

const date = new Date();
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
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("TESTE");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //*** OBTENDO VALORES DO FORMULÁRIO ****

  let clube = document.getElementById("Clube").value;
  let cidade = document.getElementById("Cidade").value;
  let estado = document.getElementById("Estado").value;
  let mes_relatorio = document.getElementById("Mes_relatorio").value;

  //SECRETARIA
  let secretaria_descricao_atividades = document.getElementById(
    "Secretaria_descricao_atividades"
  ).value;
  let secretaria_palavras_diretor = document.getElementById(
    "Secretaria_palavras_diretor"
  ).value;
  let secretaria_numero_atas_confeccionadas = document.getElementById(
    "Secretaria_numero_atas_confeccionadas"
  ).value;
  let secretaria_percentual_diretores_relatorios = document.getElementById(
    "Secretaria_percentual_diretores_relatorios"
  ).value;
  let secretaria_cadastro_mdio_atualizado = document.getElementById(
    "Secretaria_cadastro_mdio_atualizado"
  ).value;

  //TESOURARIA
  let tesouraria_descricao_atividades = document.getElementById(
    "Tesouraria_descricao_atividades"
  ).value;
  let tesouraria_palavras_diretor = document.getElementById(
    "Tesouraria_palavras_diretor"
  ).value;
  let tesouraria_entradas = document.getElementById(
    "Tesouraria_entradas"
  ).value;
  let tesouraria_saidas = document.getElementById("Tesouraria_saidas").value;
  let tesouraria_saldo_obtido_mes = document.getElementById(
    "Tesouraria_saldo_obtido_mes"
  ).value;
  let tesouraria_link_drive_comprovantes = document.getElementById(
    "Tesouraria_link_drive_comprovantes"
  ).value;

  //ADMINISTRAÇÃO
  let administracao_descricao_atividades = document.getElementById(
    "Administracao_descricao_atividades"
  ).value;
  let administracao_palavras_diretor = document.getElementById(
    "Administracao_palavras_diretor"
  ).value;
  let administracao_meta_cumprida = document.getElementById(
    "Administracao_meta_cumprida"
  ).value;

  //DQA
  let dqa_descricao_atividades = document.getElementById(
    "Dqa_descricao_atividades"
  ).value;
  let dqa_palavras_diretor = document.getElementById(
    "Dqa_palavras_diretor"
  ).value;
  let dqa_numero_associados = document.getElementById(
    "Dqa_numero_associados"
  ).value;
  let dqa_associados_afastados = document.getElementById(
    "Dqa_associados_afastados"
  ).value;
  let dqa_empossados_mes = document.getElementById("Dqa_empossados_mes").value;
  let dqa_associados_desligados = document.getElementById(
    "Dqa_associados_desligados"
  ).value;

  //IP
  let ip_descricao_atividades = document.getElementById(
    "Ip_descricao_atividades"
  ).value;
  let ip_palavras_diretor = document.getElementById(
    "Ip_palavras_diretor"
  ).value;
  let ip_links_importantes = document.getElementById(
    "Ip_links_importantes"
  ).value;

  //PH

  let ph_descricao_atividades = document.getElementById(
    "Ph_descricao_atividades"
  ).value;
  let ph_palavras_diretor = document.getElementById(
    "Ph_palavras_diretor"
  ).value;
  let ph_planejamento_mes_seguinte = document.getElementById(
    "Ph_planejamento_mes_seguinte"
  ).value;

  //RI
  let ri_descricao_atividades = document.getElementById(
    "Ri_descricao_atividades"
  ).value;
  let ri_palavras_diretor = document.getElementById(
    "Ri_palavras_diretor"
  ).value;

  //DEI
  let dei_descricao_atividades = document.getElementById(
    "Dei_descricao_atividades"
  ).value;
  let dei_palavras_diretor = document.getElementById(
    "Dei_palavras_diretor"
  ).value;

  //FR
  let fr_descricao_atividades = document.getElementById(
    "Fr_descricao_atividades"
  ).value;
  let fr_palavras_diretor = document.getElementById(
    "Fr_palavras_diretor"
  ).value;
  let fr_tema_relacionado_no_mes = document.getElementById(
    "Fr_tema_relacionado_no_mes"
  ).value;

  //VICE-PRESIDENCIA
  let vicep_palavras_diretor = document.getElementById(
    "Vicep_palavras_diretor"
  ).value;

  // PRESIDÊNCIA
  let presidencia_palavras_diretor = document.getElementById(
    "Presidencia_palavras_diretor"
  ).value;
  let presidencia_myrotary_atualizado = document.getElementById(
    "Presidencia_myrotary_atualizado"
  ).value;


  //**************************************

  //ALERTAS CAMPOS OBRIGATÓRIO:

  //Alerta - Clube == ""
  if (!clube) {
    alert("Por favor, preencha o campo (Clube).");
    return;
  }

  //Alerta - Estado == ""
  if (!estado) {
    alert("Por favor, preencha o campo (Estado).");
    return;
  }

  //Alerta - Cidade == ""
  if (!cidade) {
    alert("Por favor, preencha o campo (Cidade).");
    return;
  }

  //Alerta - Mes == ""
  if (!mes_relatorio) {
    alert("Por favor, preencha o campo (Mês do relatório).");
    return;
  }
  //Alerta - Presidência == ""
  if (!presidencia_palavras_diretor) {
    alert("Por favor, preencha o campo (Presidência).");
    return;
  }

  if (!presidencia_myrotary_atualizado) {
    alert("Por favor, preencha o campo (Presidência).");
    return;
  }
  //Alerta - Vice-presidência == ""
  if (!vicep_palavras_diretor) {
    alert("Por favor, preencha o campo (Vice-presidência).");
    return;
  }
   //Alerta - Secretaria Descricao Atividades == ""
   if (!secretaria_descricao_atividades) {
    alert("Por favor, preencha o campo (Secretaria Descricao Atividades).");
    return;
  }
   //Alerta - Secretaria Palavras Diretor == ""
   if (!secretaria_palavras_diretor) {
    alert("Por favor, preencha o campo (Secretaria Palavras Diretor).");
    return;
  }
  //Alerta - Secretaria Numero Atas Confeccionadas == ""
  if (!secretaria_numero_atas_confeccionadas) {
    alert("Por favor, preencha o campo (Secretaria Numero Atas Confeccionadas).");
    return;
  }
  //Alerta - Secretaria Percentual Diretores Relatorios == ""
  if (!secretaria_percentual_diretores_relatorios) {
    alert("Por favor, preencha o campo (Secretaria Percentual Diretores Relatorios).");
    return;
  }
  //Alerta - Secretaria Cadastro Mdio Atualizado == ""
  if (!secretaria_cadastro_mdio_atualizado) {
    alert("Por favor, preencha o campo (Secretaria Cadastro Mdio Atualizado).");
    return;
  }
  //Alerta - Tesouraria Descricao Atividades == ""
  if (!tesouraria_descricao_atividades) {
    alert("Por favor, preencha o campo (Tesouraria Descricao Atividades).");
    return;
  }
  //Alerta - Tesouraria Palavras Diretor == ""
  if (!tesouraria_palavras_diretor) {
    alert("Por favor, preencha o campo (Tesouraria Palavras Diretor).");
    return;
  }
  //Alerta - Tesouraria Entradas == ""
  if (!tesouraria_entradas) {
    alert("Por favor, preencha o campo (Tesouraria Entradas).");
    return;
  }
  //Alerta - Tesouraria Saidas == ""
  if (!tesouraria_saidas) {
    alert("Por favor, preencha o campo (Tesouraria Saidas).");
    return;
  }
  //Alerta - Tesouraria Saldo Obtido Mes == ""
  if (!tesouraria_saldo_obtido_mes) {
    alert("Por favor, preencha o campo (Tesouraria Saldo Obtido Mes).");
    return;
  }
  //Alerta - Tesouraria Link Drive Comprovantes == ""
  if (!tesouraria_link_drive_comprovantes) {
    alert("Por favor, preencha o campo (Tesouraria Link Drive Comprovantes).");
    return;
  }
  //Alerta - Administracao Descricao Atividades == ""
  if (!administracao_descricao_atividades) {
    alert("Por favor, preencha o campo (Administracao Descricao Atividades).");
    return;
  }
  //Alerta - Administracao Palavras Diretor == ""
  if (!administracao_palavras_diretor) {
    alert("Por favor, preencha o campo (Administracao Palavras Diretor).");
    return;
  }
  //Alerta - Administracao Meta Cumprida == ""
  if (!administracao_meta_cumprida) {
    alert("Por favor, preencha o campo (Administracao Meta Cumprida).");
    return;
  }
  //Alerta - Dqa Descricao Atividades == ""
  if (!dqa_descricao_atividades) {
    alert("Por favor, preencha o campo (Desenvolvimento do Quadro Associativo  Descricao Atividades).");
    return;
  }
  //Alerta - Dqa Palavras Diretor == ""
  if (!dqa_palavras_diretor) {
    alert("Por favor, preencha o campo (Desenvolvimento do Quadro Associativo  Palavras Diretor).");
    return;
  }
  //Alerta - Dqa Associados Afastados == ""
  if (!dqa_associados_afastados) {
    alert("Por favor, preencha o campo (Desenvolvimento do Quadro Associativo  Associados Afastados).");
    return;
  }
  //Alerta - Dqa Empossados Mes == ""
  if (!dqa_empossados_mes) {
    alert("Por favor, preencha o campo (Desenvolvimento do Quadro Associativo  Empossados Mes).");
    return;
  }
  //Alerta - Dqa Associados Desligados == ""
  if (!dqa_associados_desligados) {
    alert("Por favor, preencha o campo (Desenvolvimento do Quadro Associativo  Associados Desligados).");
    return;
  }
  //Alerta - Dqa Numero Associados == ""
  if (!dqa_numero_associados) {
    alert("Por favor, preencha o campo (Desenvolvimento do Quadro Associativo Numero Associados).");
    return;
  }
  //Alerta - Ip Descricao Atividades == ""
  if (!ip_descricao_atividades) {
    alert("Por favor, preencha o campo (Imagem Pública Descricao Atividades).");
    return;
  }
  //Alerta - Ip Palavras Diretor == ""
  if (!ip_palavras_diretor) {
    alert("Por favor, preencha o campo (Imagem Pública Palavras Diretor).");
    return;
  }
  //Alerta - Ip Links Importantes == ""
  if (!ip_links_importantes) {
    alert("Por favor, preencha o campo (Imagem Pública Links Importantes).");
    return;
  }
  //Alerta - Projetos Humanitários Descricao Atividades == ""
  if (!ph_descricao_atividades) {
    alert("Por favor, preencha o campo (Projetos Humanitários Descricao Atividades).");
    return;
  }
  //Alerta - Projetos Humanitários Palavras Diretor == ""
  if (!ph_palavras_diretor) {
    alert("Por favor, preencha o campo (Projetos Humanitários Palavras Diretor).");
    return;
  }
  //Alerta - Projetos Humanitários Planejamento Mes Seguinte == ""
  if (!ph_planejamento_mes_seguinte) {
    alert("Por favor, preencha o campo (Projetos Humanitários Planejamento Mes Seguinte).");
    return;
  }
  //Alerta - Fr Descricao Atividades == ""
  if (!fr_descricao_atividades) {
    alert("Por favor, preencha o campo (Fundação Rotária Descricao Atividades).");
    return;
  }
  //Alerta - Fr Palavras Diretor == ""
  if (!fr_palavras_diretor) {
    alert("Por favor, preencha o campo (Fundação Rotária Palavras Diretor).");
    return;
  }
  //Alerta - Fr Tema Relacionado No Mes == ""
  if (!fr_tema_relacionado_no_mes) {
    alert("Por favor, preencha o campo (Fundação Rotária Tema Relacionado No Mes).");
    return;
  }
  //Alerta - Ri Descricao Atividades == ""
  if (!ri_descricao_atividades) {
    alert("Por favor, preencha o campo (Relações Internacionais Descricao Atividades).");
    return;
  }
  //Alerta - Ri Palavras Diretor == ""
  if (!ri_palavras_diretor) {
    alert("Por favor, preencha o campo (Relações Internacionais Palavras Diretor).");
    return;
  }
  //Alerta - dei Descricao Atividades == ""
  if (!dei_descricao_atividades) {
    alert("Por favor, preencha o campo (Relações Internacionais Descricao Atividades).");
    return;
  }
  //Alerta - dei Palavras Diretor == ""
  if (!dei_palavras_diretor) {
    alert("Por favor, preencha o campo (Relações Internacionais Palavras Diretor).");
    return;
  }

  firestore
    .collection("TESTE")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.Clube;
        if (clube === fn) {
          console.log("Already Exists");
        }
        console.log("sucesso");
      });
    });
  //Salva os dados do formulário para o Firebase

  db.doc()
    .set({
      Data_envio: date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
      Clube: clube, //tipo: input/text
      Cidade: cidade, //tipo: input/text
      Estado: estado, //tipo: select
      Mes_relatorio: mes_relatorio, //tipo: select

      //SECRETARIA
      Secretaria_descricao_atividades: secretaria_descricao_atividades, //tipo: textarea
      Secretaria_palavras_diretor: secretaria_palavras_diretor, //tipo: textarea
      Secretaria_numero_atas_confeccionadas: secretaria_numero_atas_confeccionadas, //tipo: input/number
      Secretaria_percentual_diretores_relatorios: secretaria_percentual_diretores_relatorios, //tipo: input/text
      Secretaria_cadastro_mdio_atualizado: secretaria_cadastro_mdio_atualizado, //tipo: textarea

      //TESOURARIA
      Tesouraria_descricao_atividades: tesouraria_descricao_atividades, //tipo: textarea
      Tesouraria_palavras_diretor: tesouraria_palavras_diretor, //tipo: textarea
      Tesouraria_entradas: tesouraria_entradas, //tipo: input/number
      Tesouraria_saidas: tesouraria_saidas, //tipo: input/number
      Tesouraria_saldo_obtido_mes: tesouraria_saldo_obtido_mes, //tipo: input/number
      Tesouraria_link_drive_comprovantes: tesouraria_link_drive_comprovantes, //tipo: input/url

      //ADMINISTRAÇÃO
      Administracao_descricao_atividades: administracao_descricao_atividades, //tipo: textarea
      Administracao_palavras_diretor: administracao_palavras_diretor, //tipo: textarea
      Administracao_meta_cumprida: administracao_meta_cumprida, //tipo: input/textarea

      //DQA
      Dqa_descricao_atividades: dqa_descricao_atividades, //tipo: textarea
      Dqa_palavras_diretor: dqa_palavras_diretor, //tipo: textarea
      Dqa_numero_associados: dqa_numero_associados, //tipo: input/number
      Dqa_associados_afastados: dqa_associados_afastados, //tipo: textarea
      Dqa_empossados_mes: dqa_empossados_mes, //tipo: textarea
      Dqa_associados_desligados: dqa_associados_desligados, //tipo: textarea

      //IP
      Ip_descricao_atividades: ip_descricao_atividades, //tipo: textarea
      Ip_palavras_diretor: ip_palavras_diretor, //tipo: textarea
      Ip_links_importantes: ip_links_importantes, //tipo: textarea

      //PH
      Ph_descricao_atividades: ph_descricao_atividades, //tipo: textarea
      Ph_palavras_diretor: ph_palavras_diretor, //tipo: textarea
      Ph_planejamento_mes_seguinte: ph_planejamento_mes_seguinte, //tipo: textarea

      //FR
      Fr_descricao_atividades: fr_descricao_atividades, //tipo: textarea
      Fr_palavras_diretor: fr_palavras_diretor, //tipo: textarea
      Fr_tema_relacionado_no_mes: fr_tema_relacionado_no_mes, //tipo: textarea

      //RI
      Ri_descricao_atividades: ri_descricao_atividades, //tipo: textarea
      Ri_palavras_diretor: ri_palavras_diretor, //tipo: textarea

      //DEI
      Dei_descricao_atividades: dei_descricao_atividades, //tipo: textarea
      Dei_palavras_diretor: dei_palavras_diretor, //tipo: textarea

      //VICEP
      Vicep_palavras_diretor: vicep_palavras_diretor, //tipo: textarea

      // PRESI
      Presidencia_palavras_diretor: presidencia_palavras_diretor, //tipo: textarea
      Presidencia_myrotary_atualizado: presidencia_myrotary_atualizado, //tipo: textarea

    })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });

  //Alerta - Submissão Aceita
  alert("Relatório enviado com sucesso!");

    

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }

  
  
  clearForm();
});

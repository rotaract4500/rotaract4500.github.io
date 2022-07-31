(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyAkhTtORnvWoZCOUIvgzC_yAj5azjbuykU",
  authDomain: "r4500-f2513.firebaseapp.com",
  projectId: "r4500-f2513",
  storageBucket: "r4500-f2513.appspot.com",
  messagingSenderId: "355568894424",
  appId: "1:355568894424:web:be8b16b0c0d98c9445b2ad"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("Relatório");

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
  let secretaria_descricao_atividades = document.getElementById("Secretaria_descricao_atividades").value;
  let secretaria_palavras_diretor = document.getElementById("Secretaria_palavras_diretor").value;
  let secretaria_numero_atas_confeccionadas = document.getElementById("Secretaria_numero_atas_confeccionadas").value;
  let secretaria_percentual_diretores_relatorios = document.getElementById("Secretaria_percentual_diretores_relatorios").value;
  let secretaria_cadastro_mdio_atualizado = document.getElementById("Secretaria_cadastro_mdio_atualizado").value;
  
  //TESOURARIA
  let tesouraria_descricao_atividades = document.getElementById("Tesouraria_descricao_atividades").value;
  let tesouraria_palavras_diretor = document.getElementById("Tesouraria_palavras_diretor").value;
  let tesouraria_entradas = document.getElementById("Tesouraria_entradas").value;
  let tesouraria_saidas = document.getElementById("Tesouraria_saidas").value;
  let tesouraria_saldo_obtido_mes = document.getElementById("Tesouraria_saldo_obtido_mes").value;
  let tesouraria_link_drive_comprovantes = document.getElementById("Tesouraria_link_drive_comprovantes").value;

  //ADMINISTRAÇÃO
  let administracao_descricao_atividades = document.getElementById("Administracao_descricao_atividades").value;
  let administracao_palavras_diretor = document.getElementById("Administracao_palavras_diretor").value;
  let administracao_numero_reunioes = document.getElementById("Administracao_numero_reunioes").value;
  let administracao_frequencia_mensal = document.getElementById("Administracao_frequencia_mensal").value;
  let administracao_porcentagem_frequencia_baixa = document.getElementById("Administracao_porcentagem_frequencia_baixa").value;
  let administracao_companheirismos = document.getElementById("Administracao_companheirismos").value;

  //DQA
  let dqa_descricao_atividades = document.getElementById("Dqa_descricao_atividades").value;
  let dqa_palavras_diretor = document.getElementById("Dqa_palavras_diretor").value;
  let dqa_numero_associados = document.getElementById("Dqa_numero_associados").value;
  let dqa_associados_afastados = document.getElementById("Dqa_associados_afastados").value;
  let dqa_empossados_mes = document.getElementById("Dqa_empossados_mes").value;
  let dqa_afastados_mes = document.getElementById("Dqa_afastados_mes").value;
  let dqa_associados_desligados = document.getElementById("Dqa_associados_desligados").value;

  //IP
  let ip_descricao_atividades = document.getElementById("Ip_descricao_atividades").value;
  let ip_palavras_diretor = document.getElementById("Ip_palavras_diretor").value;
  let ip_links_importantes = document.getElementById("Ip_links_importantes").value;
  
  //RI
  let ri_descricao_atividades = document.getElementById("Ri_descricao_atividades").value;
  let ri_palavras_diretor = document.getElementById("Ri_palavras_diretor").value;

  //VICE-PRESIDENCIA
  let vicep_palavras_diretor = document.getElementById("Vicep_palavras_diretor").value;

  // PRESIDÊNCIA
  let presidencia_palavras_diretor = document.getElementById("Presidencia_palavras_diretor").value;
  let presidencia_myrotary_atualizado = document.getElementById("Presidencia_myrotary_atualizado").value;
  let presidencia_impressoes_trabalho_secretaria = document.getElementById("Presidencia_impressoes_trabalho_tesouraria").value;
  let presidencia_impressoes_trabalho_administracao = document.getElementById("Presidencia_impressoes_trabalho_administracao").value;
  let presidencia_impressoes_trabalho_dqa = document.getElementById("Presidencia_impressoes_trabalho_dqa").value;
  let presidencia_impressoes_trabalho_ip = document.getElementById("Presidencia_impressoes_trabalho_ip").value;
  let presidencia_impressoes_trabalho_ph = document.getElementById("Presidencia_impressoes_trabalho_ph").value;
  let presidencia_impressoes_trabalho_fr = document.getElementById("Presidencia_impressoes_trabalho_fr").value;
  let presidencia_impressoes_trabalho_ri = document.getElementById("Presidencia_impressoes_trabalho_ri").value;
  let presidencia_impressoes_trabalho_distrito = document.getElementById("Presidencia_impressoes_trabalho_distrito").value;

  //**************************************

  //ALERTAS CAMPOS OBRIGATÓRIO:

  //Alerta - Clube == ""
  if(!clube){
    alert("Por favor, preencha o campo (Clube).");
    return;
  }

  //Alerta - Estado == ""
  if(!estado){
    alert("Por favor, preencha o campo (Estado).");
    return;
  }

  //Alerta - Cidade == ""
  if(!cidade){
    alert("Por favor, preencha o campo (Cidade).");
    return;
  }

  //Alerta - Mes == ""
  if(!mes_relatorio){
    alert("Por favor, preencha o campo (Mês do relatório).");
    return;
  }



  firestore
    .collection("Relatório")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().Clube;
        if (clube === fn) {
          console.log("Already Exists");
        }
         console.log("data", doc.data().Clube);
      });
    });
  //Salva os dados do formulário para o Firebase
  db.doc()
    .set({

      Data_envio : data_envio,
      Clube: clube, //tipo: input/text
      Cidade: cidade, //tipo: input/text
      Estado: estado, //tipo: select
      Mes_relatorio: mes_relatorio, //tipo: select
 
      //SECRETARIA
      Secretaria_descricao_atividades: secretaria_descricao_atividades, //tipo: textarea
      Secretaria_palavras_diretor : secretaria_palavras_diretor, //tipo: textarea
      Secretaria_numero_atas_confeccionadas : secretaria_numero_atas_confeccionadas, //tipo: input/number
      Secretaria_percentual_diretores_relatorios : secretaria_percentual_diretores_relatorios, //tipo: input/text
      Secretaria_cadastro_mdio_atualizado: secretaria_cadastro_mdio_atualizado, //tipo: textarea
     
      //TESOURARIA
      Tesouraria_descricao_atividades: tesouraria_descricao_atividades, //tipo: textarea
      Tesouraria_palavras_diretor: tesouraria_palavras_diretor, //tipo: textarea
      Tesouraria_entradas: tesouraria_entradas, //tipo: input/number
      Tesouraria_saidas: tesouraria_saidas,//tipo: input/number
      Tesouraria_saldo_obtido_mes : tesouraria_saldo_obtido_mes, //tipo: input/number
      Tesouraria_link_drive_comprovantes: tesouraria_link_drive_comprovantes, //tipo: input/url

      //ADMINISTRAÇÃO
      Administracao_descricao_atividades: administracao_descricao_atividades, //tipo: textarea
      Administracao_palavras_diretor: administracao_palavras_diretor, //tipo: textarea
      Administracao_numero_reunioes: administracao_numero_reunioes, //tipo: input/number
      Administracao_frequencia_mensal: administracao_frequencia_mensal, //tipo: input/number
      Administracao_porcentagem_frequencia_baixa: administracao_porcentagem_frequencia_baixa, //tipo: input/number
      Administracao_companheirismos: administracao_companheirismos, //tipo: textarea

      //DQA
      Dqa_descricao_atividades: dqa_descricao_atividades, //tipo: textarea
      Dqa_palavras_diretor: dqa_palavras_diretor, //tipo: textarea
      Dqa_numero_associados: dqa_numero_associados, //tipo: input/number
      Dqa_associados_afastados: dqa_associados_afastados, //tipo: textarea
      Dqa_empossados_mes: dqa_empossados_mes, //tipo: textarea
      Dqa_afastados_mes: dqa_afastados_mes, //tipo: textarea
      Dqa_associados_desligados: dqa_associados_desligados, //tipo: textarea

      //IP
      Ip_descricao_atividades: ip_descricao_atividades,  //tipo: textarea
      Ip_palavras_diretor: ip_palavras_diretor, //tipo: textarea
      Ip_links_importantes: ip_links_importantes, //tipo: textarea

      //PH
      Ph_descricao_atividades: ph_descricao_atividades,  //tipo: textarea
      Ph_palavras_diretor: ph_palavras_diretor, //tipo: textarea
      Ph_planejamento_mes_seguinte: ph_planejamento_mes_seguinte, //tipo: textarea

      //FR
      Fr_descricao_atividades: fr_descricao_atividades,  //tipo: textarea
      Fr_palavras_diretor: fr_palavras_diretor, //tipo: textarea
      Fr_tema_relacionado_no_mes: fr_tema_relacionado_no_mes, //tipo: textarea

      //RI
      Ri_descricao_atividades: ri_descricao_atividades, //tipo: textarea
      Ri_palavras_diretor: ri_palavras_diretor, //tipo: textarea

      //VICEP
      Vicep_palavras_diretor: vicep_palavras_diretor, //tipo: textarea


      // PRESI
      Presidencia_palavras_diretor: presidencia_palavras_diretor,  //tipo: textarea
      Presidencia_myrotary_atualizado: presidencia_myrotary_atualizado, //tipo: textarea
      Presidencia_impressoes_trabalho_secretaria: presidencia_impressoes_trabalho_secretaria, //tipo: textarea
      Presidencia_impressoes_trabalho_tesouraria: presidencia_impressoes_trabalho_tesouraria, //tipo: textarea
      Presidencia_impressoes_trabalho_administracao: presidencia_impressoes_trabalho_administracao, //tipo: textarea
      Presidencia_impressoes_trabalho_dqa: presidencia_impressoes_trabalho_dqa, //tipo: textarea
      Presidencia_impressoes_trabalho_ip: presidencia_impressoes_trabalho_ip, //tipo: textarea
      Presidencia_impressoes_trabalho_ph: presidencia_impressoes_trabalho_ph, //tipo: textarea
      Presidencia_impressoes_trabalho_fr: presidencia_impressoes_trabalho_fr, //tipo: textarea
      Presidencia_impressoes_trabalho_ri: presidencia_impressoes_trabalho_ri, //tipo: textarea
      Presidencia_impressoes_trabalho_distrito: presidencia_impressoes_trabalho_distrito, //tipo: textarea

    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });


  //Alerta - Submissão Aceita
  alert("Relatório enviado com sucesso!");
  


  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});

import { getFirestore, doc, getDoc, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

    
    
   


    const listaRelatorios = document.querySelector('[data-js="games-list"]')

    
    const firebaseConfig = {
      apiKey: "AIzaSyAkhTtORnvWoZCOUIvgzC_yAj5azjbuykU",
      authDomain: "r4500-f2513.firebaseapp.com",
      projectId: "r4500-f2513",
      storageBucket: "r4500-f2513.appspot.com",
      messagingSenderId: "355568894424",
      appId: "1:355568894424:web:45303faab5f0ea8245b2ad",
    };
    
    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const app = initializeApp(firebaseConfig);
    const db = firebase.firestore();
    const datab = getFirestore(app);
    
    
    export function update(value) {
        atualizarRelatorios(value);
    }
    
    export function mesRelatorio(mes){
        atualizarRelatoriosPorMes(mes);
    }
    function atualizarRelatoriosPorMes(mes){
        const q = query(collection(datab, "TESTE"), where("Mes_relatorio", "==", mes));
        if(mes != "todos"){
            getDocs(q).then(snapshot => {
                const relatorios = snapshot.docs.reduce((acc,doc) => {
                    const {Clube, Cidade, Mes_relatorio} = doc.data()
                        acc += `<table class = "table table-striped">
                        <thead>
                        <tr>
                            <th>Clube</th>
                            <th>Cidade</th>
                            <th>Mês do Relatório</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${Clube}</td>
                            <td>${Cidade}</td>
                            <td>${Mes_relatorio}</td>
                            <td> 
                            <button class="btn btn-light" type="button" name="visualizar" value="${Clube}" onclick="getValue(this) && changePage()">Visualizar</button>
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        `
                        return acc
                    }, '')
                    listaRelatorios.innerHTML = relatorios;
                })
        }else{
            started();
        }
        
        
    }
    

    function atualizarRelatorios(clube){
        const q = query(collection(datab, "TESTE"), where("Clube", "==", clube));
        if(clube != "todos"){
            getDocs(q).then(snapshot => {
                const relatorios = snapshot.docs.reduce((acc,doc) => {
                    const {Clube, Cidade, Mes_relatorio} = doc.data()
                    
                        acc += `<table class = "table table-striped">
                        <thead>
                        <tr>
                            <th>Clube</th>
                            <th>Cidade</th>
                            <th>Mês do Relatório</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>${Clube}</td>
                            <td>${Cidade}</td>
                            <td>${Mes_relatorio}</td>
                            <td> 
                            <button class="btn btn-light" type="button" name="visualizar" value="${Clube}" onclick="getValue(this) && changePage()">Visualizar</button>
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        `
                        return acc
                    }, '')
                    listaRelatorios.innerHTML = relatorios;
                })
        }else{
            started();
        }
        
        
    }
    

    function started(){
        db.collection('TESTE').get()
        .then(snapshot => {
        const relatorios = snapshot.docs.reduce((acc,doc) => {
            const {Clube, Cidade, Mes_relatorio} = doc.data()
            
                acc += `<table class = "table table-striped">
                <thead>
                <tr>
                    <th>Clube</th>
                    <th>Cidade</th>
                    <th>Mês do Relatório</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>${Clube}</td>
                    <td>${Cidade}</td>
                    <td>${Mes_relatorio}</td>
                    <td> 
                    <button class="btn btn-light" type="button" name="visualizar" value="${Clube}" onclick="getValue(this) && changePage()">Visualizar</button>
                    </td>
                </tr>
                </tbody>
                </table>
                `
                return acc
            }, '')
            listaRelatorios.innerHTML = relatorios;
        })
        .catch(err =>{
            console.log(err.message);
        })
    }
   started();




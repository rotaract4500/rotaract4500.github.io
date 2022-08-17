const testeLii = document.querySelector('[data-js="games-list"]')
//const citiesRef = collection(db);
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
const db = firebase.firestore();
    function update() {
    var select = document.getElementById('Clube');
    var value = select.options[select.selectedIndex].value;

    console.log(value)
 }
  update();

db.collection('TESTE').get()
    .then(snapshot => {
    //const q = query(citiesRef, where("Clube", "==", value), orderBy("Mes_relatorio"))
    const testeLi = snapshot.docs.reduce((acc,doc) => {
        const {Clube, Cidade, Mes_relatorio} = doc.data()
        
            acc += `<table class = "table table-striped">
            <thead>
            <tr>
                <th>Clube</th>
                <th>Cidade</th>
                <th>Mês do Relatório</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>${Clube}</td>
                <td>${Cidade}</td>
                <td>${Mes_relatorio}</td>
                <td><a href="#" class="btn btn-danger"> Incompleto </a></td>
                <td> 
                    <div>
                        <a href="ViewRelatorio/view_relatorio.html">
                            <input class="btn btn-light" type="button" value="Visualizar" >
                        </a>
                    </div>
                </td>
            </tr>
            </tbody>
            
            </table>`
            return acc
        }, '')
        testeLii.innerHTML = testeLi
    })
    .catch(err =>{
        console.log(err.message);
    })

    






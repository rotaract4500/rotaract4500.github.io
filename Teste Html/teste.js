const testeLii = document.querySelector('[data-js="games-list"]')
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


db.collection('TESTE').get()
    .then(snapshot => {
    const testeLi = snapshot.docs.reduce((acc,doc) => {
        const {Clube, Estado, Cidade} = doc.data()
            acc += `<li class = "my-4">
            <h5>${Clube}</h5>

            <ul>
                <li>Desenvolvido por ${Estado}</li>
                <li>Adicionando no banco em ${Cidade}</li>
            </ul>
            
            </li>`
            return acc
        }, '')
        testeLii.innerHTML = testeLi
    })
    .catch(err =>{
        console.log(err.message);
    })



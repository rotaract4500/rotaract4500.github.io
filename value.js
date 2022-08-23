
   export function getValue(value){
        let setClube = value.value;
        localStorage.setItem('clube', setClube);
        return true;
    }

    export function changePage(){
        window.location = "ViewRelatorio/view_relatorio.html";
        return true;
    }

   export function getValue(value){
        let setId = value.value;
        localStorage.setItem('clube', setId);
        return true;
    }

    export function changePage(){
        window.location = "ViewRelatorio/view_relatorio.html";
        return true;
    }
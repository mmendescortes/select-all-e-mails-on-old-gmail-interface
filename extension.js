(() => {
    {
        checkboxes = Array.from(document.querySelectorAll(
            "input[type=checkbox]"));
        let selectAll = () => {
            for (leti = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked ? checkboxes[i]
                    .checked = false : checkboxes[i].checked =
                    true
            }
        };
        btn = document.createElement("BUTTON");
        btn.innerHTML = "Selecionar tudo";
        btn.type = "button";
        btn.style.margin = "0px 5px 0px 0px";
        btn.onclick = () => {
            selectAll()
        };
        let placement = document.querySelector(
                "[value=Excluir]") || document.querySelector(
                "[value='Remover estrela']") || document
            .querySelector("[value=Ir]").parentElement.children[
                3] || document.querySelector(
                "[value='Descartar rascunhos']") || document
            .querySelector("[value='Excluir definitivamente']");
        document.getElementsByTagName("tr")[4].childNodes[1]
            .childNodes[0].childNodes[0].childNodes[0].childNodes[
                1].childNodes[0].childNodes[3].childNodes[0]
            .childNodes[0].childNodes[0].insertBefore(btn,
                placement)
    }
})();

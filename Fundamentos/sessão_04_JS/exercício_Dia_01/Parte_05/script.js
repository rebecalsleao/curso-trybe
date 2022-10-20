let processoSeletivo = "reprovada";

switch (processoSeletivo) {
    case "aprovada":
        console.log("Aprovada, parabéns!");
        break;
    case "lista":
        console.log("Você está na lista de espera!");
        break;
    case "reprovada":
        console.log("Você foi reprovado, tente outra vez!");
        break;
    default:
        console.log("Não se aplica");
        break;
}

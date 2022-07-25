"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
})(Profissao || (Profissao = {}));
const joao = {
    nome: 'João',
    idade: 26,
    profissao: Profissao.Desenvolvedor
};
const monica = {
    nome: 'Monica',
    idade: 19,
    disciplinas: ['Matemática', '´Português', 'História', 'Geografia'],
};
console.log(monica.disciplinas);

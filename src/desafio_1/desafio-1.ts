// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */

interface Aluno {
    codigo: number;
    nome: string;
};

const alunoObj = {} as Aluno;
    alunoObj.codigo = 10;
    alunoObj.nome = 'Antonio';

console.log(alunoObj.nome);
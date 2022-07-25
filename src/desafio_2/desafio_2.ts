// Como podemos melhorar o esse código usando TS? 
enum Profissao {
    Atriz,
    Padeiro,
    Desenvolvedor
}
interface Pessoa {
    nome: String;
    idade: Number;
    profissao?: Profissao
}
interface Estudante extends Pessoa	{
    disciplinas: string[]
}

const joao: Pessoa = {
    nome: 'João',
    idade: 26,
    profissao: Profissao.Desenvolvedor
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 19,
    disciplinas: ['Matemática', '´Português', 'História', 'Geografia'], 
}

console.log(monica.disciplinas);
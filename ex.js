function Pessoa(nome) {
    this.nome = nome;
}

function FuncionarioNR(nome, cargo, salario) {

    let _nome = nome;
    let _salario = salario;
    let _cargo = cargo


    this.getNome = function() {
        return _nome;
    }
    this.getCargo = function() {
        return _cargo;
    }
    this.getSalario = function() {
        return _salario;
    }

    this.atribuiFuncao = function(função) {
        _cargo = função
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor
        }
    }

    this.aumento = function () {
        const novoSalario = _salario + 450;
        _salario = novoSalario;
    }

}

function Manutenção(nome) {
    FuncionarioNR.call(this, nome, "Manutenção", 1650);

    this.aumento = function () {
        const novoSalario = this.getSalario() * 1.1 + 450;
        this.setSalario(novoSalario);
    }
}

const funcionario1 = new FuncionarioNR("Leonardo", "Manutenção", 1650);

const funcionario2 = new Manutenção("Luis");

console.log(funcionario1.getNome());
console.log(funcionario1.getCargo());
funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.atribuiFuncao("Novo lider da Manutenção ")


console.log(funcionario2.getNome());
console.log(funcionario2.getCargo());
funcionario2.aumento();
console.log(funcionario2.getSalario());



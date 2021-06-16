# chatnilson
A aplicação não esta responsiva, apenas flúida porém funcionando sem perder qualidade em telas com 900px horizontais.
Foram feitos testes na aplicação com relação a validação dos erros nos inputs.
Clicar diversas vezes no submit de uma pergunta resultava em múltiplas execuções da função nextStep() >> a correção ja foi implementada.
Infelizmente existe uma perda de performance no momento de listar as cidades devido ao fato de existir mais de 5 mil cidades e ter que ser aplicado regex para filtra-las.
Nao e possivel pesquisar cidades utilizando o acento, o que dificulta um pouco a implementacao dessa funcionalidade.
Foi modificado um JSON para pegar apenas os dados relevantes e sem a acentuacao.
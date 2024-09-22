//  Rafael Portugal / Lucas Picanco  //

public class Main {

    public static void main(String[] args) {

        try {

            double valor;
            String nomeProduto;
            TipoProduto tipoProduto;


            System.out.println("Valor do produto:");
            valor = Double.parseDouble(System.console().readLine());

            System.out.println("Nome do produto:");
            nomeProduto = System.console().readLine();

            System.out.println("Tipo do produto (FISICO, DIGITAL, SERVICO):");
            String tipoProdutoStr = System.console().readLine().toUpperCase();
            tipoProduto = TipoProduto.valueOf(tipoProdutoStr);


            ProdutoBase produto = null;


            switch (tipoProduto) {

                case FISICO:
                    System.out.println("Informe qual a unidade de medida:");
                    String unidadeMedida = System.console().readLine();
                    System.out.println("Informe a quantidade:");
                    int quantidade = Integer.parseInt(System.console().readLine());
                    produto = new ProdutoFisico(valor, tipoProduto, nomeProduto, unidadeMedida, quantidade);
                    break;

                case DIGITAL:
                    System.out.println("Chave de ativação:");
                    String chaveAtivacao = System.console().readLine();
                    System.out.println("Data de expiração:");
                    String dataExpiracao = System.console().readLine();
                    produto = new ProdutoDigital(valor, tipoProduto, nomeProduto, chaveAtivacao, dataExpiracao);
                    break;

                case SERVICO:
                    System.out.println("Data de início:");
                    String dataInicio = System.console().readLine();
                    System.out.println("Quantidade de dias de duração do serviço:");
                    int qtdDiasDuracaoServico = Integer.parseInt(System.console().readLine());
                    produto = new ProdutoServico(valor, tipoProduto, nomeProduto, dataInicio, qtdDiasDuracaoServico);
                    break;

            }

            if (produto != null) {

                produto.calcularPreco();
                System.out.println(produto);

            } else {

                System.out.println("Tipo de produto inválido.");

            }

        } catch (IllegalArgumentException e) {
            System.out.println("Tipo de produto inválido. Por favor, escolha dentre as seguintes opcoes: FISICO, DIGITAL ou SERVICO.");
        } catch (Exception e) {
            System.out.println("Ocorreu um erro ao processar o produto: " + e.getMessage());
        }
    }
}

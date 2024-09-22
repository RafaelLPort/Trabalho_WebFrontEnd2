public interface Produto {

    void calcularPreco();

}

enum TipoProduto {

    FISICO, DIGITAL, SERVICO

}

abstract class ProdutoBase implements Produto {

    protected double valor;
    protected TipoProduto tipoProduto;
    protected String nomeProduto;

    public ProdutoBase(double valor, TipoProduto tipoProduto, String nomeProduto) {
        this.valor = valor;
        this.tipoProduto = tipoProduto;
        this.nomeProduto = nomeProduto;
    }

    public abstract void calcularPreco();

    
    @Override
    public String toString() {

        return "ProdutoBase{" + "valor=" + valor + ", tipoProduto=" + tipoProduto + ", nomeProduto='" + nomeProduto + '\'' + '}';

    }
}



class ProdutoFisico extends ProdutoBase {

    private String unidadeMedida;
    private int quantidade;

    public ProdutoFisico(double valor, TipoProduto tipoProduto, String nomeProduto, String unidadeMedida, int quantidade) {

        super(valor, tipoProduto, nomeProduto);
        this.unidadeMedida = unidadeMedida;
        this.quantidade = quantidade;

    }


    @Override
    public void calcularPreco() {

        valor += 25.00;

    }

    
    @Override
    public String toString() {

        return "ProdutoBase{" + "valor=" + valor + ", tipoProduto=" + tipoProduto + ", nomeProduto='" + nomeProduto + '\'' + '}';
        
    }

}



class ProdutoDigital extends ProdutoBase {

    private String chaveAtivacao;
    private String dataExpiracao;


    public ProdutoDigital(double valor, TipoProduto tipoProduto, String nomeProduto, String chaveAtivacao, String dataExpiracao) {

        super(valor, tipoProduto, nomeProduto);
        this.chaveAtivacao = chaveAtivacao;
        this.dataExpiracao = dataExpiracao;

    }

    
    @Override
    public void calcularPreco() {

        valor += 0.01 * valor;

    }

    
    @Override
    public String toString() {

        return "ProdutoBase{" + "valor=" + valor + ", tipoProduto=" + tipoProduto + ", nomeProduto='" + nomeProduto + '\'' + '}';
        
    }

}



class ProdutoServico extends ProdutoBase {

    private String dataInicio;
    private int qtdDiasDuracaoServico;

    public ProdutoServico(double valor, TipoProduto tipoProduto, String nomeProduto, String dataInicio, int qtdDiasDuracaoServico) {

        super(valor, tipoProduto, nomeProduto);
        this.dataInicio = dataInicio;
        this.qtdDiasDuracaoServico = qtdDiasDuracaoServico;

    }


    @Override
    public void calcularPreco() {

        valor += 10.00 * qtdDiasDuracaoServico; 

    }


    @Override
    public String toString() {

        return "ProdutoBase{" + "valor=" + valor + ", tipoProduto=" + tipoProduto + ", nomeProduto='" + nomeProduto + '\'' + '}';
        
    }

}

